import {Image, StyleSheet, View} from 'react-native';
import React from 'react';

type Props = {};

const LogoHeader = (props: Props) => {
  return (
    <View style={styles.topBarContainer}>
      <Image
        style={styles.fullImage}
        source={require('./../assets/pngs/TopBar.png')}
        resizeMode="contain"
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
