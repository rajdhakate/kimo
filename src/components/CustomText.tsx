import {StyleSheet, Text} from 'react-native';
import React from 'react';

type Props = {
  textType?: 'body' | 'body-bold' | 'header';
  text: string;
  style?: object;
};

const CustomText = ({text, style, textType}: Props) => {
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

  return <Text style={[textStyle, style]}>{text}</Text>;
};

export default CustomText;

const styles = StyleSheet.create({
  body: {
    fontFamily: 'IBMPlexMono-Regular',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 20,
    color: '#001A1A',
  },
  bodyBold: {
    fontFamily: 'IBMPlexMono-Bold',
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 20,
    color: '#001A1A',
  },
  header: {
    fontFamily: 'IBMPlexMono-Bold',
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 30,
    color: '#008080',
  },
  regular: {
    fontFamily: 'IBMPlexMono-Regular',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 20,
    color: '#008080',
  },
});
