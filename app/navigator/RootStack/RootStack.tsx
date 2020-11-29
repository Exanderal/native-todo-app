import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthContext from '../../context/AuthContext';
import AuthStack from '../AuthStack/AuthStack';
import AppStack from '../AppStack/AppStack';

const RootStack = () => {
  const [userLogged, setUserLogged] = useState(true);
  return (
    <NavigationContainer>
      <AuthContext.Provider value={{userLogged, setUserLogged}}>
        {userLogged ? <AppStack /> : <AuthStack />}
      </AuthContext.Provider>
    </NavigationContainer>
  );
};

export default RootStack;
