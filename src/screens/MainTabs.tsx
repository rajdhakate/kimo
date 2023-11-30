import {StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useDispatch, useSelector} from 'react-redux';

import Home from './Home';
import Detail from './Detail';

import {fetchHighlights} from '../actions/hightlights';

import TabBar from './Tabbar';

const Tab = createBottomTabNavigator();

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
      tabBar={props => <TabBar {...props} />}>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />

      {highlights.map(highlight => (
        <Tab.Screen
          key={highlight.title}
          name={highlight.title}
          component={Detail}
          initialParams={{highlight}}
          options={{headerShown: false}}
        />
      ))}
    </Tab.Navigator>
  );
};

export default MainTabs;

const styles = StyleSheet.create({});
