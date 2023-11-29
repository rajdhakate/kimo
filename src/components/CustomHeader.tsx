import {StyleSheet, View} from 'react-native';
import React from 'react';
import CustomText from './CustomText';

type Props = {
  title: string;
  style?: object;
};

const CustomHeader = ({title, style}: Props) => {
  return (
    <View>
      <CustomText
        text={title}
        textType="body-bold"
        style={[styles.header, style]}
      />
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  header: {
    margin: 16,
    paddingTop: 30,
  },
});
