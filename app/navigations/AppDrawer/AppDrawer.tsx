import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {AppDrawerParamList} from './AppDrawerTypes';
import Home from '../../screens/Main/Home';
import Calendar from '../../screens/Main/Calendar';
import Overview from '../../screens/Main/Overview';
import List from '../../screens/Main/List';
import Groups from '../../screens/Main/Groups';
import Profile from '../../screens/Main/Profile';
import Timeline from '../../screens/Main/Timeline';
import {theme} from '../../theme/theme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DrawerContent from './DrawerContent';
import HeaderRight from '../../components/screens/Home/HeaderRight';

const Drawer = createDrawerNavigator<AppDrawerParamList>();

const AppDrawer = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerStyle={{width: '100%', backgroundColor: theme.COLOR.SECONDARY}}
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={({navigation}) => ({
        headerShown: true,
        headerTitle: '',
        headerStyle: {
          backgroundColor: theme.COLOR.BACKGROUND_GREY,
          borderBottomWidth: 0,
        },
        headerLeft: () => (
          <Icon
            name="menu"
            size={30}
            color={theme.COLOR.LIGHT_GREY}
            onPress={() => {
              navigation.openDrawer();
            }}
            style={{marginLeft: 10}}
          />
        ),
      })}>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          headerRight: () => <HeaderRight />,
        }}
      />
      <Drawer.Screen name="Calendar" component={Calendar} />
      <Drawer.Screen name="Overview" component={Overview} />
      <Drawer.Screen name="Groups" component={Groups} />
      <Drawer.Screen name="Lists" component={List} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Timeline" component={Timeline} />
    </Drawer.Navigator>
  );
};

export default AppDrawer;
