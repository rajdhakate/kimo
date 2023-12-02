import {Platform, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import CustomText from './CustomText';
import {backgroundColor, primaryColor} from '../theme/colors';

type Props = {
  cta: string;
};

const PrimaryButton = ({cta}: Props) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.button}>
        <CustomText textType="body-bold" text={cta} style={styles.ctaText} />
      </View>
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
  },
  button: {
    paddingHorizontal: 24,
    paddingTop: 9,
    paddingBottom: 11,
    backgroundColor: primaryColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    shadowColor: 'rgba(7, 56, 56, 0.80)',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: Platform.OS === 'android' ? 8 : 0,
  },
  ctaText: {
    color: backgroundColor,
  },
});
