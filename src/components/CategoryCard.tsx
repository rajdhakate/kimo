import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import CustomText from './CustomText';
import Arrow from './../assets/svgs/Arrow.svg';

type Props = {
  title: string;
};

const CategoryCard = ({title}: Props) => {
  return (
    <TouchableOpacity style={styles.card}>
      <CustomText text={title} textType="body" />
      <Arrow />
    </TouchableOpacity>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 16,
    marginTop: 8,
    padding: 24,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
