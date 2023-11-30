import {StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {useDispatch, useSelector} from 'react-redux';

import Home from './Home';
import Detail from './Detail';

import {fetchHighlights} from '../actions/hightlights';

import HomeIcon from './../assets/svgs/HomeIcon';
import SurfingIcon from './../assets/svgs/SurfingIcon';
import HulaIcon from './../assets/svgs/HulaIcon';
import VulcanoIcon from './../assets/svgs/VulcanoIcon';

const Tab = createMaterialBottomTabNavigator();

type Props = {};

const MainTabs = (props: Props) => {
  const dispatch = useDispatch();
  const highlights = useSelector(state => state.highlights);

  useEffect(() => {
    dispatch(fetchHighlights());
  }, [dispatch]);

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
          } else if (route.name === 'Traditional Festivals') {
            return <HulaIcon color={iconColor} />;
          } else if (route.name === 'Volcanoes') {
            return <VulcanoIcon color={iconColor} />;
          }
        },
      })}>
      <Tab.Screen name="Home" component={Home} />

      {highlights.map(highlight => (
        <Tab.Screen
          key={highlight.title}
          name={highlight.title}
          component={Detail}
          initialParams={{highlight}}
        />
      ))}
    </Tab.Navigator>
  );
};

export default MainTabs;

const styles = StyleSheet.create({});
