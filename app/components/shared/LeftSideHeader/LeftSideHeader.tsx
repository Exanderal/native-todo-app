import React from 'react';
import {View, Text} from 'react-native';

interface LeftSideHeaderProps {}

const LeftSideHeader: React.FC<LeftSideHeaderProps> = ({}) => {
  return (
    <View>
      <Text>I am LeftSideHeader component</Text>
    </View>
  );
};

export default LeftSideHeader;
