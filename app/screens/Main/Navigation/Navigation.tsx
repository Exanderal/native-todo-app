import React from 'react';
import {View, Text} from 'react-native';

interface NavigationProps {}

const Navigation: React.FC<NavigationProps> = ({}) => {
  return (
    <View>
      <Text>I am Navigation component</Text>
    </View>
  );
};

export default Navigation;
