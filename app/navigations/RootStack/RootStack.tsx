import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthContext from '../../context/AuthContext';
import AuthStack from '../AuthStack/AuthStack';
import AppStack from '../AppStack/AppStack';
import {User} from '../../interfaces/IUser';

const RootStack = () => {
  const [user, setUser] = useState<User>(null);
  return (
    <NavigationContainer>
      <AuthContext.Provider
        value={{
          login: () => {
            setUser({userName: 'Max'});
          },
          logout: () => {
            setUser(null);
          },
          user,
        }}>
        {user ? <AppStack /> : <AuthStack />}
      </AuthContext.Provider>
    </NavigationContainer>
  );
};

export default RootStack;
