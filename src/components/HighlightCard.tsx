import {
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import CustomText from './CustomText';

import ArrowCircular from './../assets/svgs/ArrowCircular.svg';
import Highlight from '../models/Highlight';

type Props = {
  highlight: Highlight;
};

const width = Dimensions.get('screen').width;

const HighlightCard = ({highlight}: Props) => {
  return (
    <TouchableOpacity style={styles.card}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.fullImage}
          source={{uri: highlight.image}}
          resizeMode="cover"
        />

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
      </View>
    </TouchableOpacity>
  );
};

export default HighlightCard;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#ffffff',
    marginLeft: 16,
    aspectRatio: 340 / 304,
    // width: width * 0.8,
    shadowColor: 'rgba(0, 128, 128, 0.16)',
    shadowOpacity: 1,
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 5,
    borderRadius: 8,
  },
  imageContainer: {
    width: '100%',
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
