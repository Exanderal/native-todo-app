import React, {useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  Dimensions,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerContentComponentProps,
  DrawerItemList,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {theme} from '../../../theme/theme';
import Navigation from '../../../screens/Main/Navigation';
import AuthContext from '../../../context/AuthContext';

const imgBg = require('../../../assets/navigation/img.png');
const avatar = require('../../../assets/navbar/avatar.png');

const DrawerContent: React.FC<DrawerContentComponentProps> = (props) => {
  const {logout} = useContext(AuthContext);
  return (
    <ImageBackground source={imgBg} style={styles.container}>
      <DrawerContentScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.header}>
          <Icon
            name="close"
            color={theme.COLOR.LIGHT_GREY}
            size={34}
            onPress={props.navigation.closeDrawer}
          />
          <Image source={avatar} />
        </View>
        <View style={styles.navbar}>
          <DrawerItemList
            {...props}
            activeBackgroundColor={theme.COLOR.PRIMARY}
            activeTintColor={theme.COLOR.DARK_GREY}
            itemStyle={styles.navItem}
            labelStyle={styles.navLabel}
          />
        </View>
        <View style={styles.footer}>
          <View style={styles.footerIconWrapper}>
            <DrawerItem
              style={{
                alignSelf: 'flex-end',
              }}
              icon={() => (
                <Icon
                  name="settings"
                  color={theme.COLOR.LIGHT_GREY}
                  size={34}
                  style={{alignSelf: 'center', marginRight: 5}}
                />
              )}
              label=""
              onPress={() => {}}
            />
            <Text style={styles.footerText}>SETTINGS</Text>
          </View>
          <View style={styles.footerIconWrapper}>
            <DrawerItem
              style={{
                alignSelf: 'flex-end',
              }}
              icon={() => (
                <Icon
                  name="exit-to-app"
                  color={theme.COLOR.LIGHT_GREY}
                  size={34}
                  style={{alignSelf: 'center', marginRight: 5}}
                />
              )}
              label=""
              onPress={logout}
            />
            <Text style={styles.footerText}>LOG OUT</Text>
          </View>
        </View>
      </DrawerContentScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: '10%',
  },
  navbar: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  navItem: {},
  navLabel: {
    color: theme.COLOR.WHITE,
    fontSize: theme.FONT_SIZE.MEDIUM,
    alignSelf: 'center',
    paddingLeft: 20,
    fontWeight: theme.FONT_WEIGHT.LIGHT,
  },
  footer: {
    paddingVertical: 20,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerText: {
    color: theme.COLOR.LIGHT_GREY,
  },
  footerIconWrapper: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
export default DrawerContent;
