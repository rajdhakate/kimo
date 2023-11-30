import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomText from './CustomText';

type Props = {};

const SpotCard = (props: Props) => {
  return (
    <View style={styles.card}>
      <CustomText text="1. Maui" textType="body-bold" style={styles.title} />

      <View style={styles.imageContainer}>
        <Image
          style={styles.fullImage}
          source={require('./../assets/pngs/Head.png')}
          resizeMode="cover"
        />
      </View>
    </View>
  );
};

export default SpotCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 16,
    shadowColor: 'rgba(0, 128, 128, 0.16)',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 16,
  },
  title: {
    color: '#008080',
    marginLeft: 16,
    marginVertical: 30,
  },
  imageContainer: {
    aspectRatio: 120 / 63,
    overflow: 'hidden',
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    maxWidth: '40%',
  },
  fullImage: {
    width: '100%',
    height: '100%',
  },
});
