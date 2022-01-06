import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import DrawerItemContent from './DrawerItemContent';
import {WrongDefault} from '../../assets';
import DrawerLogOutContent from './DrawerLogOutContent';
import {
  BACKGROUND_COLOR,
  BOLD_FONT,
  PRIMARY_COLOR,
  TITLE_COLOR,
} from '../../constant';
import firebase from 'firebase';

const DrawerContent = ({navigation}) => {
  
  return (
    <View style={styles.container}>
      <View style={userStyle.bg}>
        <Text style={userStyle.welcome}>Welcome,</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <View style={userStyle.container}>
            <Image style={userStyle.image} source={WrongDefault} />
            <View style={userStyle.userData}>
              <Text style={userStyle.text}>User</Text>
              <Text style={userStyle.text}>
                {firebase.auth().currentUser?.email}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <DrawerItemContent title="Home" navigation={navigation} />
      <DrawerItemContent title="Notifications" navigation={navigation} />
      <DrawerItemContent title="Budget" navigation={navigation} />
      <View style={styles.line} />
      <DrawerItemContent title="History Transaction" navigation={navigation} />
      <DrawerItemContent title="Planning" navigation={navigation} />
      <DrawerItemContent title="Monthly Payment" navigation={navigation} />
      <View style={styles.line} />
      <DrawerItemContent title="Settings" navigation={navigation} />
      <DrawerLogOutContent title="Logout" />
    </View>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
  },
  line: {
    borderStyle: 'solid',
    borderBottomWidth: 3,
    marginHorizontal: 8,
    borderColor: TITLE_COLOR,
  },
});

const userStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 12,
  },
  bg: {
    backgroundColor: PRIMARY_COLOR,
    borderTopRightRadius: 40,
  },
  welcome: {
    color: 'white',
    fontFamily: BOLD_FONT,
    marginVertical: 8,
    marginLeft: 10,
  },
  text: {
    color: 'white',
    fontFamily: BOLD_FONT,
  },
  image: {
    marginHorizontal: 12,
  },
  userData: {
    marginLeft: 14,
    alignItems: 'center',
  },
});