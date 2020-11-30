import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {theme} from '../../../../theme/theme';

interface HeaderProps {
  onPress: () => void;
}

const Header: React.FC<HeaderProps> = ({onPress}) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.headerText}>Walkthrough</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  headerText: {
    fontSize: theme.FONT_SIZE.MEDIUM,
    fontWeight: theme.FONT_WEIGHT.LIGHT,
    marginBottom: 2,
    marginLeft: theme.MARGIN.SMALL,
  },
});

export default Header;
