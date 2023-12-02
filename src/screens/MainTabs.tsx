import React, {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useDispatch, useSelector} from 'react-redux';

import Home from './Home';
import Detail from './Detail';
import {fetchHighlights} from '../actions/highlights';
import TabBar from './TabBar';
import {TabBarProps} from '../utils/GlobalType';
import {ThunkDispatch} from 'redux-thunk';
import {AnyAction} from 'redux';

const Tab = createBottomTabNavigator();

const TabBarComponent = (props: TabBarProps) => <TabBar {...props} />;

const MainTabs = () => {
  const dispatch: ThunkDispatch<any, void, AnyAction> = useDispatch();
  const highlights = useSelector((state: any) => state.highlights);

  useEffect(() => {
    dispatch(fetchHighlights());
  }, [dispatch]);

  return (
    <Tab.Navigator initialRouteName="Home" tabBar={TabBarComponent}>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />

      {highlights.map((highlight: any) => (
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
