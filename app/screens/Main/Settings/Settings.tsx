import React from 'react';
import {View, Text} from 'react-native';

interface SettingsProps {}

const Settings: React.FC<SettingsProps> = ({}) => {
  return (
    <View>
      <Text>I am Settings component</Text>
    </View>
  );
};

export default Settings;
