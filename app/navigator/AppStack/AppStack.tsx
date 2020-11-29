import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AppStackParamList} from './AppStackTypes';
import Home from '../../screens/Main/Home';
import Walkthrough from '../../screens/Main/Walkthrough';

const Stack = createStackNavigator<AppStackParamList>();

const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Walkthrough" component={Walkthrough} />
    </Stack.Navigator>
  );
};

export default AppStack;
