import React from 'react';
import {useState} from 'react';
import {
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

const settingsMain = ({navigation}) => {
  const isValidObjField = obj => {
    return Object.values(obj).every(value => value.trim());
  };

  const updateError = (error, stateUpdater) => {
    stateUpdater(error);
    setTimeout(() => {
      stateUpdater('');
    }, 2500);
  };

  const [data, setData] = useState({
    currentPassword: '',
    newPassword: '',
    confirm_newPassword: '',
  });

  const [error, setError] = useState('');
  const {currentPassword, newPassword, confirm_newPassword} = data;

  const handleOnChangeText = (value, fieldName) => {
    setData({...data, [fieldName]: value});
  };

  const isValidForm = () => {
    if (!isValidObjField(data))
      return updateError('All fields must be filled in', setError);
    if (!newPassword.trim() || newPassword.length < 8)
      return updateError('Password is less than 8 characters!', setError);
    if (newPassword !== confirm_newPassword)
      return updateError('Password does not match!', setError);

    return true;
  };

  const submitForm = () => {
    if (isValidForm()) {
      console.log(data);
      alert('Password has been changed.');
      navigation.navigate('Settings');
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
          {error ? <Text style={styles.errorText}>{error}</Text> : null}
          <FormInput
            value={currentPassword}
            onChangeText={value => handleOnChangeText(value, 'currentPassword')}
            label="Current Password "
            placeholder="Input your current password"
            autoCapitalize="none"
            secureTextEntry
          />

          <FormInput
            value={newPassword}
            onChangeText={value => handleOnChangeText(value, 'newPassword')}
            label="New Password"
            placeholder="Input your new password"
            autoCapitalize="none"
            secureTextEntry
          />

          <FormInput
            value={confirm_newPassword}
            onChangeText={value =>
              handleOnChangeText(value, 'confirm_newPassword')
            }
            label="Confirm New Password"
            placeholder="Input confirm new password"
            autoCapitalize="none"
            secureTextEntry
          />
        </View>

        <TouchableOpacity
          style={{alignItems: 'center', marginTop: 5}}
          onPress={submitForm}>
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
