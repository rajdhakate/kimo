import {
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

import ArrowCircular from './../assets/svgs/ArrowCircular.svg';
import Highlight from '../models/Highlight';
import CustomText from './CustomText';
import {backgroundColor} from '../theme/colors';

type Props = {
  highlight: Highlight;
};

const HighlightCard = ({highlight}: Props) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => {
        navigation.navigate('Detail', {highlight, showBackButton: true});
      }}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.fullImage}
          source={{uri: highlight.image}}
          resizeMode="cover"
        />
      </View>

      <View style={styles.details}>
        <View style={styles.texts}>
          <CustomText
            text={highlight.title}
            style={styles.title}
            textType="header"
          />
          <CustomText
            text={highlight.description}
            style={styles.subtitle}
            textType="body"
          />
        </View>

        <ArrowCircular />
      </View>
    </TouchableOpacity>
  );
};

export default HighlightCard;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: backgroundColor,
    marginLeft: 16,
    aspectRatio: 340 / 304,
    shadowColor: 'rgba(0, 128, 128, 0.16)',
    shadowOpacity: 1,
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 5,
    borderRadius: 8,
    width: '100%',
  },
  imageContainer: {
    aspectRatio: 368 / 170,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  fullImage: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  details: {
    margin: 24,
    alignItems: 'flex-end',
  },
  texts: {
    width: '100%',
  },
  title: {},
  subtitle: {
    marginTop: 16,
  },
});
