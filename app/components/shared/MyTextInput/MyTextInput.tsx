import React from 'react';
import {View, Text, TextInput, Platform} from 'react-native';
import {StyleSheet} from 'react-native';
import {theme} from '../../../theme/theme';

interface MyTextInputProps {
  title: string;
  color?: string;
  placeholderColor?: string;
  secure?: boolean;
}

const MyTextInput: React.FC<MyTextInputProps> = ({
  title,
  color = theme.COLOR.DARK_GREY,
  placeholderColor = theme.COLOR.LIGHT_GREY,
  secure = false,
}) => {
  return (
    <View style={styles.inputWrapper}>
      <Text style={[styles.inputLabel, {color}]}>{title}</Text>
      <TextInput
        placeholder={title}
        style={[styles.input, {color}]}
        secureTextEntry={secure}
        placeholderTextColor={placeholderColor}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputWrapper: {
    height: 75,
    borderBottomWidth: 1,
    borderBottomColor: theme.COLOR.LIGHT_GREY,
    justifyContent: 'center',
    paddingHorizontal: theme.PADDING.MEDIUM,
    paddingVertical: theme.PADDING.SMALL,
  },
  input: {
    marginTop: Platform.OS === 'ios' ? theme.MARGIN.SMALL : 0,
    color: theme.COLOR.WHITE,
    paddingLeft: 4,
  },
  inputLabel: {
    fontSize: theme.FONT_SIZE.MEDIUM,
    fontWeight: theme.FONT_WEIGHT.LIGHT,
  },
});

export default MyTextInput;
