import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AppStackParamList} from './AppStackTypes';
import Home from '../../screens/Main/Home';
import Walkthrough from '../../screens/Main/Walkthrough';
import AuthContext from '../../context/AuthContext';

const Stack = createStackNavigator<AppStackParamList>();

const AppStack = () => {
  const {firstLogin} = useContext(AuthContext);
  return (
    <Stack.Navigator initialRouteName="Home">
      {firstLogin ? (
        <Stack.Screen name="Walkthrough" component={Walkthrough} />
      ) : (
        <Stack.Screen name="Home" component={Home} />
      )}
    </Stack.Navigator>
  );
};

export default AppStack;
