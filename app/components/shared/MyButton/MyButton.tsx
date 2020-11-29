import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {StyleSheet} from 'react-native';
import {theme} from '../../../theme/theme';

interface MyButtonProps {
  title: string | Element;
  backgroundColor?: string;
  onPress: () => void;
}

const MyButton: React.FC<MyButtonProps> = ({
  title,
  backgroundColor = 'transparent',
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, {backgroundColor}]}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 75,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: theme.COLOR.WHITE,
    fontSize: theme.FONT_SIZE.MEDIUM,
  },
});

export default MyButton;
