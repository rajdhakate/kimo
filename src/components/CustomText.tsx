import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {primaryColor, secondaryColor} from '../theme/colors';

type Props = {
  textType?: 'body' | 'body-bold' | 'header';
  text: string;
  style?: object;
  numberOfLines?: number | undefined;
};

const CustomText = ({text, style, textType, numberOfLines}: Props) => {
  let textStyle: {};
  switch (textType) {
    case 'body':
      textStyle = styles.body;
      break;
    case 'body-bold':
      textStyle = styles.bodyBold;
      break;
    case 'header':
      textStyle = styles.header;
      break;
    default:
      textStyle = styles.regular;
      break;
  }

  return (
    <Text numberOfLines={numberOfLines} style={[textStyle, style]}>
      {text}
    </Text>
  );
};

export default CustomText;

const styles = StyleSheet.create({
  body: {
    fontFamily: 'IBMPlexMono-Regular',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 20,
    color: secondaryColor,
  },
  bodyBold: {
    fontFamily: 'IBMPlexMono-Bold',
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 20,
    color: secondaryColor,
  },
  header: {
    fontFamily: 'IBMPlexMono-Bold',
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 30,
    color: primaryColor,
  },
  regular: {
    fontFamily: 'IBMPlexMono-Regular',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 20,
    color: primaryColor,
  },
});
