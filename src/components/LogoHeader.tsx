import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';

type Props = {};

const LogoHeader = (props: Props) => {
  return (
    <View style={styles.topBarContainer}>
      <FastImage
        style={styles.fullImage}
        source={require('./../assets/pngs/TopBar.png')}
        resizeMode={FastImage.resizeMode.contain}
      />
    </View>
  );
};

export default LogoHeader;

const styles = StyleSheet.create({
  topBarContainer: {
    width: '100%',
    aspectRatio: 359 / 80,
  },
  fullImage: {
    width: '100%',
    height: '100%',
  },
});
