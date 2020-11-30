import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const avatar = require('../../../../assets/navbar/avatar.png');

interface HeaderRightProps {}

const HeaderRight: React.FC<HeaderRightProps> = ({}) => {
  return (
    <View style={styles.container}>
      <Text>62*</Text>
      <Image source={avatar} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 34,
    height: 34,
    marginLeft: 5,
  },
});
export default HeaderRight;
