import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {theme} from '../../../theme/theme';

const imgBg = require('../../../assets/home/bg.png');

interface HomeProps {}

const Home: React.FC<HomeProps> = ({}) => {
  return (
    <ImageBackground source={imgBg} style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Good Morning!</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.contentCircle}>
          <Text style={styles.circleText}>16</Text>
          <Text style={styles.circleParagraph}>TUE</Text>
          <View style={styles.innerCircle}>
            <Text style={styles.innerCircleText}>8</Text>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>FEBRUARY 2020</Text>
        <Icon
          name="keyboard-arrow-down"
          size={34}
          color={theme.COLOR.DARK_GREY}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.COLOR.BACKGROUND_GREY,
  },
  header: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: theme.FONT_SIZE.BIG * 1.25,
    fontWeight: '300',
    color: theme.COLOR.DARK_GREY,
  },
  content: {
    flex: 4,
    alignItems: 'center',
  },
  contentCircle: {
    backgroundColor: theme.COLOR.PRIMARY,
    width: Dimensions.get('window').width / 2,
    height: Dimensions.get('window').width / 2,
    borderRadius: Dimensions.get('window').width / 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerCircle: {
    position: 'absolute',
    top: 15,
    right: 15,
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: theme.COLOR.SECONDARY,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerCircleText: {
    color: theme.COLOR.WHITE,
  },
  circleText: {
    color: theme.COLOR.WHITE,
    fontSize: theme.FONT_SIZE.BIG * 3,
  },
  circleParagraph: {
    color: theme.COLOR.WHITE,
  },
  footer: {
    alignItems: 'center',
    paddingVertical: theme.PADDING.MEDIUM,
  },
  footerText: {
    fontWeight: theme.FONT_WEIGHT.LIGHT,
    fontSize: theme.FONT_SIZE.MEDIUM,
  },
});
export default Home;
