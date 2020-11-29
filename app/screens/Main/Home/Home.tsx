import React from 'react';
import {View, Text} from 'react-native';

interface HomeProps {}

const Home: React.FC<HomeProps> = ({}) => {
  return (
    <View>
      <Text>I am Home component</Text>
    </View>
  );
};

export default Home;
