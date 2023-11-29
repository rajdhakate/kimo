import {
  FlatList,
  Image,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import React, {useCallback, useState} from 'react';

import HighlightCard from '../components/HighlightCard';
import CustomHeader from '../components/CustomHeader';
import CustomText from '../components/CustomText';
import Arrow from './../assets/svgs/Arrow.svg';
import CategoryCard from '../components/CategoryCard';
import GuideCard from '../components/GuideCard';

type Props = {};

const Home = (props: Props) => {
  const [isRefreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    // Set the refreshing state to true
    setRefreshing(true);

    // Perform the data fetching or any asynchronous operation
    // For example, you can fetch data from an API here

    // After the operation is complete, set refreshing to false
    // to stop the refreshing indicator
    setTimeout(() => {
      setRefreshing(false);
    }, 1000); // Simulating an asynchronous operation duration
  }, []);

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
          <View style={styles.topBarContainer}>
            <Image
              style={styles.fullImage}
              source={require('./../assets/pngs/TopBar.png')}
              resizeMode="contain"
            />
          </View>
          <View style={styles.headContainer}>
            <Image
              style={styles.fullImage}
              source={require('./../assets/pngs/Head.png')}
              resizeMode="contain"
            />
          </View>
        </View>

        <CustomHeader title="Highlights" />

        <ScrollView
          horizontal
          style={{height: 340, width: '100%', marginBottom: 40}}
          showsHorizontalScrollIndicator={false}>
          <HighlightCard />
          <HighlightCard />
          <HighlightCard />
        </ScrollView>

        <View style={{flex: 1, backgroundColor: '#E6F2F2'}}>
          <CustomHeader title="Categories" />

          <CategoryCard title="Adventure" />
          <CategoryCard title="Culinary" />
          <CategoryCard title="Eco-tourism" />
          <CategoryCard title="Family" />
          <CategoryCard title="Sport" />

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
  },
  scrollView: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  topBarContainer: {
    width: '100%',
    aspectRatio: 359 / 80,
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
