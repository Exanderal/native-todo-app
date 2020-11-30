import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AppStackParamList} from './AppStackTypes';
import AppDrawer from '../AppDrawer';
import Walkthrough from '../../screens/Main/Walkthrough';
import AuthContext from '../../context/AuthContext';
import {Text} from 'react-native';
import Header from '../../components/screens/Walkthrough/Header';

const Stack = createStackNavigator<AppStackParamList>();

const AppStack = () => {
  const {firstLogin} = useContext(AuthContext);
  return (
    <Stack.Navigator initialRouteName="App">
      {firstLogin ? (
        <Stack.Screen
          name="Walkthrough"
          component={Walkthrough}
          options={{
            headerTitle: '',
            headerLeft: () => <Header onPress={() => {}} />,
          }}
        />
      ) : (
        <Stack.Screen
          name="App"
          component={AppDrawer}
          options={{headerShown: false}}
        />
      )}
    </Stack.Navigator>
  );
};

export default AppStack;
