import React, {useContext} from 'react';
import {
  Text,
  ImageBackground,
  View,
  Image,
  KeyboardAvoidingView,
} from 'react-native';
import {StyleSheet} from 'react-native';
import MyButton from '../../../components/shared/MyButton';
import MyTextInput from '../../../components/shared/MyTextInput';
import AuthContext from '../../../context/AuthContext';
import {AuthStackNavProps} from '../../../navigations/AuthStack/AuthStackTypes';
import {theme} from '../../../theme/theme';

const backgroundImage = require('../../../assets/login/bg.png');
const logoImage = require('../../../assets/login/mark.png');

const Login: React.FC<AuthStackNavProps<'Login'>> = ({navigation}) => {
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
          <MyButton
            title="Sign In"
            onPress={login}
            backgroundColor={theme.COLOR.SECONDARY}
          />
          <MyButton
            title="Don't have an account? Sign up"
            onPress={() => {
              navigation.navigate('SignUp');
            }}
          />
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
  buttonContainer: {
    flex: 1,
  },
});

export default Login;
