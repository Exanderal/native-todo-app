import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export type AppStackParamList = {
  App: undefined;
  Walkthrough: undefined;
};

export type AppStackNavProps<T extends keyof AppStackParamList> = {
  navigation: StackNavigationProp<AppStackParamList, T>;
  route: RouteProp<AppStackParamList, T>;
};
