import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Highlight, RootStackParamList} from '../utils/GlobalType';
import {backgroundColor} from '../theme/colors';
import CustomText from './CustomText';
import ArrowCircular from '../assets/svgs/ArrowCircular.svg';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

type Props = {
  isFirst: boolean;
  isLast: boolean;
  highlight: Highlight;
};

const HighlightCard = ({isFirst, isLast, highlight}: Props) => {
  const _styles = styles(isFirst, isLast);
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const navigateToDetail = async () => {
    navigation.navigate('Detail', {
      highlight: highlight,
      showBackButton: true,
    });
  };

  return (
    <TouchableOpacity style={_styles.card} onPress={navigateToDetail}>
      <View style={_styles.imageContainer}>
        <Image
          style={_styles.fullImage}
          source={{uri: highlight.image}}
          resizeMode="cover"
        />
      </View>

      <View style={_styles.details}>
        <View style={_styles.texts}>
          <CustomText
            text={highlight.title}
            style={_styles.title}
            textType="header"
          />
          <CustomText
            text={highlight.description}
            style={_styles.subtitle}
            textType="body"
          />
        </View>

        <ArrowCircular />
      </View>
    </TouchableOpacity>
  );
};

export default HighlightCard;

const styles = (isFirst: Boolean, isLast: Boolean) =>
  StyleSheet.create({
    card: {
      flex: 1,
      backgroundColor: backgroundColor,
      marginLeft: isFirst ? 16 : 0,
      marginRight: isLast ? 16 : 0,
      height: 354,
      width: 360,
      shadowColor: 'rgba(0, 128, 128, 0.16)',
      shadowOpacity: 1,
      shadowOffset: {width: 0, height: 0},
      shadowRadius: 5,
      borderRadius: 8,
    },
    imageContainer: {
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8,
      height: '50%',
    },
    fullImage: {
      width: '100%',
      height: '100%',
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8,
    },
    details: {
      padding: 24,
      alignItems: 'flex-end',
    },
    texts: {
      width: '100%',
      marginBottom: 6,
    },
    title: {},
    subtitle: {
      marginTop: 16,
    },
  });
