import React from 'react';
import {View, Text} from 'react-native';

interface OverviewProps {}

const Overview: React.FC<OverviewProps> = ({}) => {
  return (
    <View>
      <Text>I am Overview component</Text>
    </View>
  );
};

export default Overview;
