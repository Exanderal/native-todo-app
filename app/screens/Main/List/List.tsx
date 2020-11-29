import React from 'react';
import {View, Text} from 'react-native';

interface ListProps {}

const List: React.FC<ListProps> = ({}) => {
  return (
    <View>
      <Text>I am List component</Text>
    </View>
  );
};

export default List;
