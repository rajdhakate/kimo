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
import {fetchHighlights} from '../actions/highlights';
import {backgroundColor, primaryColor, primaryLight} from '../theme/colors';
import PrimaryButton from '../components/PrimaryButton';
import {ThunkDispatch} from 'redux-thunk';
import {AnyAction} from 'redux';
import {Category, Highlight} from '../utils/GlobalType';

const Home = () => {
  const dispatch: ThunkDispatch<any, void, AnyAction> = useDispatch();
  const highlights = useSelector((state: any) => state.highlights);
  const [categories, setCategories] = useState<Category[]>([]);
  const [isRefreshing, setRefreshing] = useState<boolean>(false);

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

  const highlightKeyExtractor = (item: Highlight) => {
    return item.title.toString();
  };
  const renderHighlightItem = ({
    index,
    item,
  }: {
    index: number;
    item: Highlight;
  }) => (
    <HighlightCard
      key={index.toString()}
      highlight={item}
      isFirst={index === 0}
      isLast={index === highlights.length - 1}
    />
  );

  const renderCategoryItem = (category: Category) => {
    return <CategoryCard key={category.name} category={category} />;
  };

  const renderSeparator = () => {
    return <View style={styles.separator} />;
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.scrollView}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={onRefresh}
            colors={[primaryColor]}
            tintColor={primaryColor}
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
              style={styles.list}
              showsHorizontalScrollIndicator={false}
              keyExtractor={highlightKeyExtractor}
              data={highlights}
              horizontal
              renderItem={renderHighlightItem}
              ItemSeparatorComponent={renderSeparator}
            />
          </View>
        )}

        <View style={styles.category}>
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

      <PrimaryButton cta="Book a trip" />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: backgroundColor,
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
  category: {
    flex: 1,
    backgroundColor: primaryLight,
    paddingBottom: 80,
  },
  list: {
    width: '100%',
    paddingBottom: 40,
  },
  separator: {width: 16},
});
