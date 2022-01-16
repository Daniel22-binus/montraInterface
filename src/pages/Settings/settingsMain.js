import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {AboutUs, ChangePassword, Profile} from '../../assets/icons';
import HeaderBack from '../../components/HeaderBack';
import {BACKGROUND_COLOR, BOLD_FONT, TITLE_COLOR, WHITE} from '../../constant';
import firebase from 'firebase';

const settingsMain = ({navigation}) => {

  const handleLogOut = () => {
    firebase.auth()
      .signOut()
      .then(() => {
        navigation.replace('Splash');
        console.log();
      })
      .catch(error => alert(error.message));
  };

  return (
    <View style={{flex: 1}}>
      <HeaderBack navigation={navigation} title="Settings" />
      <View style={styles.container}>
        <View style={styles.fiturBox}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Profile')}>
            <Profile />
            <Text style={styles.settingsText}>Profile</Text>
          </TouchableOpacity>

          <View style={styles.line} />

          <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Change Password')}>
            <ChangePassword />
            <Text style={styles.settingsText}>Change Password</Text>
          </TouchableOpacity>

          <View style={styles.line} />

          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('About')}>
            <AboutUs />
            <Text style={styles.settingsText}>About</Text>
          </TouchableOpacity>
        </View>

          <TouchableOpacity style={{alignItems: 'center'}} onPress={handleLogOut}>
            <View style={styles.logoutBtn}>
              <Text style={styles.logoutText}>Log Out</Text>
            </View>
          </TouchableOpacity>

      </View>
    </View>
  );
};

export default settingsMain;

const WindowWidth = Dimensions.get('window').width;
const WindowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
  },
  fiturBox: {
    backgroundColor: WHITE,
    marginVertical: WindowHeight / 29.5,
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 8,
    marginHorizontal: WindowWidth * 0.056,
  },
  button: {
    flexDirection: 'row',
    margin: 15,
  },
  settingsText: {
    fontFamily: BOLD_FONT,
    fontSize: 16,
    color: TITLE_COLOR,
    marginHorizontal: 20,
    marginVertical:5
  },
  line: {
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderColor: TITLE_COLOR,
  },
  logoutBtn: {
    backgroundColor: TITLE_COLOR,
    borderRadius: 10,
  },
  logoutText: {
    fontFamily: BOLD_FONT,
    fontSize: 20,
    marginHorizontal: 60,
    marginVertical: 8,
    color: WHITE,
  },
});
