import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {secondaryColor} from '../theme/colors';
import ArrowIcon from '../assets/svgs/ArrowIcon';

type Props = {
  showBackButton?: boolean;
};

const LogoHeader = ({showBackButton = false}: Props) => {
  const navigation = useNavigation();

  return (
    <View style={styles.topBarContainer}>
      {showBackButton && (
        <View style={styles.backButtonContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            style={styles.backButtonTouchable}>
            <ArrowIcon color={secondaryColor} />
          </TouchableOpacity>
        </View>
      )}
      <Image
        style={styles.fullImage}
        source={require('./../assets/pngs/TopBar.png')}
        resizeMode={'contain'}
      />
    </View>
  );
};

export default LogoHeader;

const styles = StyleSheet.create({
  topBarContainer: {
    width: '100%',
    aspectRatio: 359 / 80,
  },
  fullImage: {
    width: '100%',
    height: '100%',
  },
  backButtonContainer: {
    position: 'absolute',
    zIndex: 10,
    left: 10,
    top: '50%',
    transform: [{translateY: -25}, {rotate: '180deg'}],
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButtonTouchable: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
