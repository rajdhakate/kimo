import {
  Image,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import CustomHeader from '../components/CustomHeader';
import GuideCard from '../components/GuideCard';
import LogoHeader from '../components/LogoHeader';
import CustomText from '../components/CustomText';
import SpotCard from '../components/SpotCard';

type Props = {};

const Detail = (props: Props) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <LogoHeader />
          <View style={styles.headContainer}>
            <Image
              style={styles.fullImage}
              source={require('./../assets/pngs/Head.png')}
              resizeMode="contain"
            />
          </View>

          <CustomText
            style={{padding: 16, paddingTop: 40, lineHeight: 24}}
            textType="body"
            text="Hawaii is the capital of modern surfing. This group of Pacific islands gets swell from all directions, so there are plenty of pristine surf spots for all."
          />

          <CustomHeader title="Top spots" />

          <SpotCard />
          <SpotCard />
          <SpotCard />
          <SpotCard />
        </View>

        <View style={{flex: 1, backgroundColor: '#E6F2F2'}}>
          <CustomHeader title="Travel Guide" />

          <GuideCard name="Raj Dhakate" subtitle="Guide since 2012" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Detail;

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
  headContainer: {
    width: '100%',
    aspectRatio: 360 / 240,
  },
  fullImage: {
    width: '100%',
    height: '100%',
  },
});
