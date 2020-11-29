import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthStackParamList} from './AuthStackTypes';
import Login from '../../screens/Auth/Login';
import SignUp from '../../screens/Auth/SignUp';
import SignUpHeader from '../../components/screens/SignUp/Header';

const Stack = createStackNavigator<AuthStackParamList>();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={({navigation}) => {
          return {
            headerTitle: '',
            headerLeft: () => (
              <SignUpHeader
                onPress={() => {
                  navigation.goBack();
                }}
              />
            ),
          };
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
