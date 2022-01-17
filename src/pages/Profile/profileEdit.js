import React, {useState} from 'react';
import {View, Text, Dimensions, StyleSheet, TextInput} from 'react-native';
import HeaderBack from '../../components/HeaderBack';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {
  BOLD_FONT,
  TITLE_COLOR,
  PRIMARY_FONT,
  WHITE,
  PRIMARY_COLOR,
} from '../../constant';
import firebase from '../../../firebase';

const profileEdit = ({navigation}) => {
  const [username2, setUsername2] = useState('');
  const [phone2, setPhone2] = useState('');

  const editProfile = () => {
    firebase
      .database()
      .ref('/users/' + firebase.auth().currentUser?.uid)
      .set({
        username: username2,
        phone: phone2,
      })
      .then(console.log(username2));
  };

  const getUserData = () => {
    firebase
      .database()
      .ref(`users/${firebase.auth().currentUser.uid}`)
      .once('value', function (snapshot) {
        setUsername2(snapshot.val().username);
        setPhone2(snapshot.val().phone);
      });
  };

  const [data, setData] = React.useState({
    name: '',
    email: '',
    phoneNumber: '',
  });

  return (
    <View style={{flex: 1}}>
      <HeaderBack navigation={navigation} title="Edit Profile" />

      <ScrollView>
        <View style={styles.input}>
          <Text style={[styles.text_footer, {marginTop: 8}]}>Name</Text>
          <TextInput
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={val => {
              setUsername2(val);
            }}
          />
        </View>
        <View style={styles.input}>
          <Text style={[styles.text_footer, {marginTop: 8}]}>Phone Number</Text>
          <TextInput
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={val => {
              setPhone2(val);
            }}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.button}>
          <TouchableOpacity
            onPress={() => {
              editProfile();
              navigation.goBack();
            }}>
            <View style={styles.buttonAdd}>
              <Text style={styles.buttonText}>Save</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
export default profileEdit;

const WindowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  input: {
    flexDirection: 'row',
    marginTop: 15,
    paddingBottom: 15,
  },
  text_footer: {
    fontFamily: PRIMARY_FONT,
    color: TITLE_COLOR,
    fontSize: 17,
    width: 100,
    paddingLeft: WindowWidth * 0.04,
  },
  textInput: {
    flex: 1,
    paddingLeft: WindowWidth * 0.04,
    paddingRight: WindowWidth * 0.04,
    marginLeft: WindowWidth * 0.04,
    marginRight: WindowWidth * 0.04,
    color: 'black',
    borderBottomColor: TITLE_COLOR,
    borderBottomWidth: 1,
    fontSize: 15,
    fontStyle: 'italic',
  },
  button: {
    alignItems: 'flex-end',
    paddingTop: 30,
    paddingRight: WindowWidth * 0.04,
    paddingBottom: 35,
  },
  budgetDetail: {
    paddingBottom: 15,
    alignItems: 'flex-end',
  },
  font1: {
    color: PRIMARY_COLOR,
    fontSize: 16,
    fontStyle: 'italic',
    paddingBottom: 5,
  },
  font2: {
    color: TITLE_COLOR,
    fontSize: 20,
    fontFamily: BOLD_FONT,
    paddingBottom: 5,
  },
  buttonAdd: {
    width: 120,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: TITLE_COLOR,
  },
  buttonText: {
    fontSize: 20,
    fontFamily: BOLD_FONT,
    color: WHITE,
  },
});
