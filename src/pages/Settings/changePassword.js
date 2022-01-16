import React, {useReducer} from 'react';
import {useState} from 'react';
import {
  Alert,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FormInput from '../../components/FormInput';
import HeaderBack from '../../components/HeaderBack';
import {
  BACKGROUND_COLOR,
  BOLD_FONT,
  PRIMARY_FONT,
  TITLE_COLOR,
  WHITE,
} from '../../constant';
import firebase from 'firebase';

const settingsMain = ({navigation}) => {

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const reauthenticate = currentPassword => {
    var currentUser = firebase.auth().currentUser;
    var cred = firebase.auth.EmailAuthProvider.credential(
      currentUser.email,
      currentPassword,
    );
    return currentUser.reauthenticateWithCredential(cred);
  };

  const onChangePassword = () => {
    if(newPassword.length<8){
      alert('Password is less than 8 characters.')
    }
    if (newPassword !== confirmNewPassword) {
      alert('Password does not match.');
    } else {
      reauthenticate(currentPassword)
        .then(() => {
          var currentUser = firebase.auth().currentUser;
          currentUser
            .updatePassword(newPassword)
            .then(() => {
              alert('Password successfully changed');
              navigation.navigate('Settings');
            })
            .catch(error => {
              alert(error.message);
            });
        })
        .catch(error => {
          alert(error.message);
        });
    }
  };

  return (
    <View style={{flex: 1}}>
      <HeaderBack navigation={navigation} title="Change Password" />
      <View style={styles.container}>
        <View style={styles.upperWrapper}>
          <Text style={styles.upperText}>Change Password</Text>
          <Text style={styles.description}>
            Please input your current password and{'\n'}new password.
          </Text>
        </View>

        <View style={styles.fiturBox}>
          <FormInput
            value={currentPassword}
            label="Current Password"
            onChangeText={value => setCurrentPassword(value)}
            placeholder="Input your new password"
            autoCapitalize="none"
            secureTextEntry
          />
          <FormInput
            value={newPassword}
            onChangeText={value => setNewPassword(value)}
            placeholder="Input your new password"
            autoCapitalize="none"
            label="New Password"
            secureTextEntry
          />

          <FormInput
            value={confirmNewPassword}
            onChangeText={value => setConfirmNewPassword(value)}
            placeholder="Input confirm new password"
            autoCapitalize="none"
            label="Confirm New Password "
            secureTextEntry
          />
        </View>

        <TouchableOpacity
          style={{alignItems: 'center', marginTop: 5}}
          onPress={onChangePassword}>
          <View style={styles.saveBtn}>
            <Text style={styles.saveText}>Save</Text>
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
  upperWrapper: {
    marginTop: 20,
    marginHorizontal: WindowWidth * 0.056,
  },
  upperText: {
    color: TITLE_COLOR,
    fontFamily: BOLD_FONT,
    fontSize: 30,
  },
  description: {
    color: TITLE_COLOR,
    fontSize: 18,
    fontFamily: PRIMARY_FONT,
  },
  fiturBox: {
    backgroundColor: WHITE,
    marginVertical: WindowHeight / 29.5,
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 25,
    marginHorizontal: WindowWidth * 0.056,
  },
  errorText: {
    color: 'red',
    fontSize: 15,
    marginBottom: 10,
    textAlign: 'center',
  },
  saveBtn: {
    backgroundColor: TITLE_COLOR,
    borderRadius: 10,
  },
  saveText: {
    fontFamily: BOLD_FONT,
    fontSize: 20,
    marginHorizontal: 60,
    marginVertical: 8,
    color: WHITE,
  },
});
