import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {AppDrawerParamList} from './AppDrawerTypes';
import Home from '../../screens/Main/Home';
import Calendar from '../../screens/Main/Calendar';
import Create from '../../screens/Main/Create';

const Drawer = createDrawerNavigator<AppDrawerParamList>();

const AppDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Calendar" component={Calendar} />
      <Drawer.Screen name="Create" component={Create} />
    </Drawer.Navigator>
  );
};

export default AppDrawer;
