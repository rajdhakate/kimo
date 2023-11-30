import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import CustomText from './CustomText';
import FastImage from 'react-native-fast-image';

type Props = {
  name: string;
  subtitle: string;
};

const avatarSize = Dimensions.get('screen').width * 0.2;

const GuideCard = ({name, subtitle}: Props) => {
  return (
    <View style={styles.card}>
      <View style={styles.details}>
        <View style={styles.texts}>
          <CustomText text={name} textType="header" style={styles.name} />
          <CustomText text={subtitle} textType="body" style={styles.subtitle} />
        </View>

        <View style={styles.avatarContainer}>
          <FastImage
            style={styles.fullImage}
            source={require('../assets/pngs/Head.png')}
            resizeMode={FastImage.resizeMode.cover}
          />
        </View>
      </View>

      <TouchableOpacity style={styles.cta}>
        <CustomText text="Contact" />
      </TouchableOpacity>
    </View>
  );
};

export default GuideCard;

const styles = StyleSheet.create({
  card: {
    margin: 16,
    padding: 24,
    backgroundColor: '#ffffff',
    borderRadius: 8,
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  texts: {
    width: '65%',
  },
  name: {
    color: '#001A1A',
  },
  subtitle: {
    marginTop: 15,
  },
  avatarContainer: {
    width: avatarSize,
    aspectRatio: 1 / 1,
    backgroundColor: 'red',
    borderRadius: avatarSize / 2,
    overflow: 'hidden',
  },
  fullImage: {
    width: '100%',
    height: '100%',
  },
  cta: {
    marginTop: 33,
    paddingTop: 9,
    paddingBottom: 11,
    paddingHorizontal: 24,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#008080',
    height: 40,
    width: 116,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
