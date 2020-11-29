import React, {useContext} from 'react';
import {View, StyleSheet, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MyButton from '../../../components/shared/MyButton';
import MyTextInput from '../../../components/shared/MyTextInput';
import AuthContext from '../../../context/AuthContext';
import {theme} from '../../../theme/theme';

const image = require('../../../assets/signUp/img.png');

interface SignUpProps {}

const SignUp: React.FC<SignUpProps> = ({}) => {
  const {signUp} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.imageContent}>
          <Icon
            name="add"
            size={40}
            color={theme.COLOR.PRIMARY}
            style={styles.icon}
          />
        </View>
      </ImageBackground>
      <View style={styles.form}>
        <MyTextInput title="Name" />
        <MyTextInput title="Email" />
        <MyTextInput title="Password" />
        <MyTextInput title="Birthday" />
      </View>
      <MyButton
        title={<Icon name="check" size={34} style={styles.icon} />}
        onPress={() => {
          signUp();
        }}
        backgroundColor={theme.COLOR.SECONDARY}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.COLOR.PRIMARY,
  },
  imageContent: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    flex: 2,
  },
  icon: {
    fontWeight: '100',
  },
});

export default SignUp;
