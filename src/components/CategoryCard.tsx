import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

import CustomText from './CustomText';
import ArrowIcon from './../assets/svgs/ArrowIcon';
import {backgroundColor, primaryColor} from '../theme/colors';
import {Category} from '../utils/GlobalType';

type Props = {
  category: Category;
};

const CategoryCard = ({category}: Props) => {
  return (
    <TouchableOpacity style={styles.card}>
      <CustomText text={category.name} textType="body" />
      <ArrowIcon color={primaryColor} />
    </TouchableOpacity>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 16,
    marginTop: 8,
    padding: 24,
    backgroundColor: backgroundColor,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
