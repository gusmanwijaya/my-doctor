import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Doctor, Hospitals, Messages} from '../../screens';
import {BottomTabNavigator} from '../../components';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomTabNavigator {...props} />}>
      <Tab.Screen
        name="Doctor"
        component={Doctor}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Messages"
        component={Messages}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Hospitals"
        component={Hospitals}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
