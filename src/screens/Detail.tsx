import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import FastImage from 'react-native-fast-image';
import CustomHeader from '../components/CustomHeader';
import GuideCard from '../components/GuideCard';
import LogoHeader from '../components/LogoHeader';
import CustomText from '../components/CustomText';
import SpotCard from '../components/SpotCard';
import {backgroundColor, primaryLight} from '../theme/colors';
import PrimaryButton from '../components/PrimaryButton';
import {Activity, HighlightActivities} from '../utils/GlobalType';
import {makeApiCall} from '../apis/ApiCall';

type Props = {
  route: any;
};

const Detail = ({route}: Props) => {
  const {highlight, showBackButton} = route.params;
  const [highlightData, setHighlightData] = useState<HighlightActivities>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchActivity = async () => {
    await makeApiCall(`/v1/activities/${highlight.title}`)
      .then(response => {
        setIsLoading(false);
        setHighlightData(response.data);
      })
      .catch(_ => {});
  };

  useEffect(() => {
    fetchActivity();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderActivityItem = (activity: Activity) => {
    return <SpotCard key={activity.name} activity={activity} />;
  };

  const emptyView = (
    <View style={styles.emptyView}>
      <CustomText text="No Data Found" />
    </View>
  );

  const loadingView = (
    <View style={styles.emptyView}>
      <CustomText text="Loading..." />
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <LogoHeader showBackButton={showBackButton} />
          {highlightData ? (
            <>
              <View style={styles.headContainer}>
                <FastImage
                  style={styles.fullImage}
                  source={{uri: highlightData.image}}
                  resizeMode={FastImage.resizeMode.cover}
                />

                <CustomText
                  text={highlightData.name}
                  style={styles.highlightName}
                />
              </View>

              <CustomText
                style={styles.description}
                textType="body"
                text={highlightData.description}
              />

              {highlightData.activities?.length > 0 && (
                <View style={styles.activities}>
                  <CustomHeader title="Top spots" />
                  {highlightData.activities.map(renderActivityItem)}
                </View>
              )}

              <View
                style={[
                  styles.guide,
                  // eslint-disable-next-line react-native/no-inline-styles
                  {paddingBottom: showBackButton ? 20 : 80},
                ]}>
                <CustomHeader title="Travel Guide" />

                <GuideCard name="Raj Dhakate" subtitle="Guide since 2012" />
              </View>
            </>
          ) : isLoading ? (
            loadingView
          ) : (
            emptyView
          )}
        </View>
      </ScrollView>

      {!showBackButton && <PrimaryButton cta="Book a trip" />}
    </SafeAreaView>
  );
};

export default Detail;

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
    position: 'relative',
    width: '100%',
    aspectRatio: 360 / 240,
  },
  fullImage: {
    width: '100%',
    height: '100%',
  },
  highlightName: {
    position: 'absolute',
    top: '50%',
    left: 0,
    right: 0,
    transform: [{translateY: -25}],
    textAlign: 'center',
    color: backgroundColor,
    fontSize: 48,
    fontWeight: '700',
    lineHeight: 60,
    opacity: 0.8,
  },
  description: {padding: 16, paddingTop: 40, lineHeight: 24},
  activities: {marginBottom: 100},
  guide: {
    flex: 1,
    backgroundColor: primaryLight,
  },
  emptyView: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
