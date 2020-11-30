import {DrawerNavigationProp} from '@react-navigation/drawer';
import {RouteProp} from '@react-navigation/native';

export type AppDrawerParamList = {
  Home: undefined;
  Calendar: undefined;
  Overview: undefined;
  Groups: undefined;
  Lists: undefined;
  Profile: undefined;
  Timeline: undefined;
};

export type AppDrawerNavProps<T extends keyof AppDrawerParamList> = {
  navigation: DrawerNavigationProp<AppDrawerParamList, T>;
  route: RouteProp<AppDrawerParamList, T>;
};
