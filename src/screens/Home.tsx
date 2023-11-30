import {
  FlatList,
  Image,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';

import HighlightCard from '../components/HighlightCard';
import CustomHeader from '../components/CustomHeader';
import CategoryCard from '../components/CategoryCard';
import GuideCard from '../components/GuideCard';
import LogoHeader from '../components/LogoHeader';
import axiosInstance from '../apis/AxiosInstance';
import {useDispatch, useSelector} from 'react-redux';
import {fetchHighlights} from '../actions/hightlights';

type Props = {};

const Home = (props: Props) => {
  const dispatch = useDispatch();
  const highlights = useSelector(state => state.highlights);
  const [categories, setCategories] = useState([]);
  const [isRefreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axiosInstance.get('/v1/categories');
      setCategories(response.data);
      setRefreshing(false);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchCategories();
    dispatch(fetchHighlights());
  }, [dispatch]);

  const highlightKeyExtractor = item => {
    return item.title.toString();
  };

  const renderHighlightItem = ({index, item}) => {
    return <HighlightCard highlight={item} />;
  };

  const renderCategoryItem = category => {
    return <CategoryCard key={categories.name} category={category} />;
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.scrollView}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={onRefresh}
            colors={['#009688']}
            tintColor="#009688"
          />
        }>
        <View style={styles.container}>
          <LogoHeader />

          <View style={styles.headContainer}>
            <Image
              style={styles.fullImage}
              source={require('./../assets/pngs/Head.png')}
              resizeMode="contain"
            />
          </View>
        </View>

        {highlights.length > 0 && (
          <View>
            <CustomHeader title="Highlights" />

            <FlatList
              style={{height: 340, width: '100%', marginBottom: 40}}
              showsHorizontalScrollIndicator={false}
              keyExtractor={highlightKeyExtractor}
              data={highlights}
              horizontal
              renderItem={renderHighlightItem}
            />
          </View>
        )}

        <View style={{flex: 1, backgroundColor: '#E6F2F2'}}>
          {categories.length > 0 && (
            <View>
              <CustomHeader title="Categories" />

              {categories.map(renderCategoryItem)}
            </View>
          )}

          <CustomHeader title="Travel Guide" />

          <GuideCard name="Raj Dhakate" subtitle="Guide since 2012" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollView: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  headContainer: {
    width: '100%',
    aspectRatio: 360 / 480,
  },
  fullImage: {
    width: '100%',
    height: '100%',
  },
});
