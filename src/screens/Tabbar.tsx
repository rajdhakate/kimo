import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

import HomeIcon from '../assets/svgs/HomeIcon';
import HulaIcon from '../assets/svgs/HulaIcon';
import SurfingIcon from '../assets/svgs/SurfingIcon';
import {backgroundColor, primaryColor, secondaryColor} from '../theme/colors';
import CustomText from '../components/CustomText';
import VulcanoIcon from '../assets/svgs/VulcanoIcon';

type Props = {
  state: any;
  descriptors: any;
  navigation: any;
};

const TabBar = ({state, descriptors, navigation}: Props) => {
  return (
    <View style={styles.bar}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        let iconColor = isFocused ? primaryColor : secondaryColor;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabBarButton}>
            <View style={styles.tabBarIcon}>
              {label === 'Home' && <HomeIcon color={iconColor} />}
              {label === 'Surfing' && <SurfingIcon color={iconColor} />}
              {label === 'Traditional Festivals' && (
                <HulaIcon color={iconColor} />
              )}
              {label === 'Volcanoes' && <VulcanoIcon color={iconColor} />}
            </View>
            <CustomText
              text={label}
              numberOfLines={1}
              style={[styles.tabBarTitle, {color: iconColor}]}
            />

            {isFocused && <View style={styles.tabBarIndicator} />}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TabBar;

const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    height: 100,
    backgroundColor: backgroundColor,
    paddingBottom: 26,
    shadowColor: 'rgba(81, 81, 224, 0.24)',
    shadowOffset: {width: 0, height: -4},
    shadowOpacity: 1,
    shadowRadius: 16,
  },
  tabBarButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
  },
  tabBarIcon: {
    marginBottom: 4,
  },
  tabBarTitle: {
    fontSize: 10,
    fontWeight: '700',
    textAlign: 'center',
    width: '80%',
  },
  tabBarIndicator: {
    position: 'absolute',
    height: 4,
    width: '80%',
    backgroundColor: primaryColor,
    bottom: 0,
  },
});
