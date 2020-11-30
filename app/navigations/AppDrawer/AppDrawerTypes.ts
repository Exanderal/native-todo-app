import {DrawerNavigationProp} from '@react-navigation/drawer';
import {RouteProp} from '@react-navigation/native';

export type AppDrawerParamList = {
  Calendar: undefined;
  Create: undefined;
  Home: undefined;
};

export type AppDrawerNavProps<T extends keyof AppDrawerParamList> = {
  navigation: DrawerNavigationProp<AppDrawerParamList, T>;
  route: RouteProp<AppDrawerParamList, T>;
};
