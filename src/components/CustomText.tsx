import {StyleSheet, Text} from 'react-native';
import React from 'react';

type Props = {
  textType?: 'body' | 'body-bold' | 'header';
  // | 'bold'
  // | 'bold-italic'
  // | 'extra-light'
  // | 'extra-light-italic'
  // | 'italic'
  // | 'light'
  // | 'light-italic'
  // | 'medium'
  // | 'medium-italic'
  // | 'regular'
  // | 'semi-bold'
  // | 'semi-bold-italic'
  // | 'thin'
  // | 'thin-italic';
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
    // case 'bold':
    //   textStyle = styles.bold;
    //   break;
    // case 'bold-italic':
    //   textStyle = styles.boldItalic;
    //   break;
    // case 'extra-light':
    //   textStyle = styles.extraLight;
    //   break;
    // case 'extra-light-italic':
    //   textStyle = styles.extraLightItalic;
    //   break;
    // case 'italic':
    //   textStyle = styles.italic;
    //   break;
    // case 'light':
    //   textStyle = styles.light;
    //   break;
    // case 'light-italic':
    //   textStyle = styles.lightItalic;
    //   break;
    // case 'medium':
    //   textStyle = styles.medium;
    //   break;
    // case 'medium-italic':
    //   textStyle = styles.mediumItalic;
    //   break;
    // case 'regular':
    //   textStyle = styles.regular;
    //   break;
    // case 'semi-bold':
    //   textStyle = styles.semiBold;
    //   break;
    // case 'semi-bold-italic':
    //   textStyle = styles.semiBoldItalic;
    //   break;
    // case 'thin':
    //   textStyle = styles.thin;
    //   break;
    // case 'thin-italic':
    //   textStyle = styles.thinItalic;
    //   break;
    // default:
    //   textStyle = styles.regular;
    //   break;
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
  // bold: {
  //   fontFamily: 'IBMPlexMono-Bold',
  // },
  // boldItalic: {
  //   fontFamily: 'IBMPlexMono-BoldItalic',
  // },
  // extraLight: {
  //   fontFamily: 'IBMPlexMono-ExtraLight',
  // },
  // extraLightItalic: {
  //   fontFamily: 'IBMPlexMono-ExtraLightItalic',
  // },
  // italic: {
  //   fontFamily: 'IBMPlexMono-Italic',
  // },
  // light: {
  //   fontFamily: 'IBMPlexMono-Light',
  // },
  // lightItalic: {
  //   fontFamily: 'IBMPlexMono-LightItalic',
  // },
  // medium: {
  //   fontFamily: 'IBMPlexMono-Medium',
  // },
  // mediumItalic: {
  //   fontFamily: 'IBMPlexMono-MediumItalic',
  // },
  // regular: {
  //   fontFamily: 'IBMPlexMono-Regular',
  // },
  // semiBold: {
  //   fontFamily: 'IBMPlexMono-SemiBold',
  // },
  // semiBoldItalic: {
  //   fontFamily: 'IBMPlexMono-SemiBoldItalic',
  // },
  // thin: {
  //   fontFamily: 'IBMPlexMono-Thin',
  // },
  // thinItalic: {
  //   fontFamily: 'IBMPlexMono-ThinItalic',
  // },
});
