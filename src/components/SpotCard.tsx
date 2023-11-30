import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import CustomText from './CustomText';
import {backgroundColor, primaryColor, shadowColor} from '../theme/colors';
import FastImage from 'react-native-fast-image';

type Props = {
  activity: object;
};

const SpotCard = ({activity}: Props) => {
  return (
    <TouchableOpacity style={styles.card}>
      <CustomText
        text={activity.name}
        textType="body-bold"
        style={styles.title}
      />

      <View style={styles.imageContainer}>
        <FastImage
          style={styles.fullImage}
          source={{uri: 'https://picsum.photos/300/200'}}
          resizeMode={FastImage.resizeMode.cover}
        />
      </View>
    </TouchableOpacity>
  );
};

export default SpotCard;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: backgroundColor,
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginTop: 8,
    shadowColor: shadowColor,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 8,
  },
  title: {
    color: primaryColor,
    marginLeft: 16,
    marginVertical: 30,
    width: '55%',
  },
  imageContainer: {
    overflow: 'hidden',
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    width: '40%',
  },
  fullImage: {
    width: '100%',
    height: '100%',
  },
});
