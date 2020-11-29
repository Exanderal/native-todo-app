import React from 'react';
import {View, Text} from 'react-native';

interface ProfileProps {}

const Profile: React.FC<ProfileProps> = ({}) => {
  return (
    <View>
      <Text>I am Profile component</Text>
    </View>
  );
};

export default Profile;
