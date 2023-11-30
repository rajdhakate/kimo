import {StyleSheet} from 'react-native';
import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Home from './Home';

import HomeIcon from './../assets/svgs/HomeIcon';
import SurfingIcon from './../assets/svgs/SurfingIcon';
import HulaIcon from './../assets/svgs/HulaIcon';
import VulcanoIcon from './../assets/svgs/VulcanoIcon';

const Tab = createMaterialBottomTabNavigator();

type Props = {};

const MainTabs = (props: Props) => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#008080"
      inactiveColor="#001A1A"
      barStyle={{backgroundColor: '#ffffff'}}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconColor = focused ? '#008080' : '#001A1A';

          if (route.name === 'Home') {
            return <HomeIcon color={iconColor} />;
          } else if (route.name === 'Surfing') {
            return <SurfingIcon color={iconColor} />;
          } else if (route.name === 'Hula') {
            return <HulaIcon color={iconColor} />;
          } else if (route.name === 'Vulcano') {
            return <VulcanoIcon color={iconColor} />;
          }
        },
        // tabBarActiveTintColor: 'red',
        // tabBarInactiveTintColor: 'yellow',
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Surfing" component={Home} />
      <Tab.Screen name="Hula" component={Home} />
      <Tab.Screen name="Vulcano" component={Home} />
    </Tab.Navigator>
  );
};

export default MainTabs;

const styles = StyleSheet.create({});
