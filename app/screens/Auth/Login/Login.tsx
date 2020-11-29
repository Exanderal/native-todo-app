import React, {useContext} from 'react';
import {
  Text,
  ImageBackground,
  View,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import {StyleSheet} from 'react-native';
import MyTextInput from '../../../components/shared/MyTextInput';
import AuthContext from '../../../context/AuthContext';
import {theme} from '../../../theme/theme';

const backgroundImage = require('../../../assets/login/bg.png');
const logoImage = require('../../../assets/login/mark.png');

interface LoginProps {}

const Login: React.FC<LoginProps> = ({}) => {
  const {login} = useContext(AuthContext);
  return (
    <ImageBackground source={backgroundImage} style={styles.container}>
      <View style={styles.logo}>
        <Image source={logoImage} style={styles.logoImage} />
        <Text style={styles.logoText}>Get Started!</Text>
      </View>
      <View style={styles.wrapper}>
        <KeyboardAvoidingView style={styles.form} behavior="padding">
          {/* TODO Make the keyboard on IOS to show inputs  */}
          <MyTextInput title="Username" />
          <MyTextInput title="Password" secure />
        </KeyboardAvoidingView>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={login} style={styles.button}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={[styles.button, {backgroundColor: 'transparent'}]}>
            <Text style={styles.buttonText}>
              Don't have an account? Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: theme.COLOR.PRIMARY,
  },
  wrapper: {
    flex: 1,
  },
  logo: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoImage: {
    width: 250,
    height: 250,
  },
  logoText: {
    fontSize: theme.FONT_SIZE.BIG,
    color: theme.COLOR.WHITE,
    marginTop: theme.MARGIN.BIG,
  },
  form: {
    flex: 1,
    backgroundColor: 'rgba(255, 255,255, .3)',
  },
  button: {
    flex: 1,
    backgroundColor: theme.COLOR.SECONDARY,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: theme.COLOR.WHITE,
    fontSize: theme.FONT_SIZE.MEDIUM,
  },
  buttonContainer: {
    flex: 1,
  },
});

export default Login;
