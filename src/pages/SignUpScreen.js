import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  TextInput,
  StatusBar,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';
import {
  PRIMARY_COLOR,
  WHITE,
  SECONDARY_COLOR,
  GREEN_COLOR,
  TITLE_COLOR,
  BOLD_FONT,
  PRIMARY_FONT,
  BACKGROUND_COLOR,
} from '../constant';
import {auth} from '../../firebase';
import firebase from 'firebase';

const SignUpScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    if (password != confirmPassword) {
      alert("Passwords don't match");
    } else {
      auth
        .createUserWithEmailAndPassword(email.toString().trim(), password)
        .then(result => {
          firebase.database().ref('users/'+firebase.auth().currentUser?.uid)
            .set({
              username,
              phone,
              email,
            });
          console.log(result);
          navigation.navigate('SignInScreen');
        })
        .catch(error => alert(error.message));
    }
  };

  const [data, setData] = React.useState({
    username: '',
    email: '',
    phone: '',
    password: '',
    confirm_password: '',
    check_usernameInputChange: false,
    check_textInputChange: false,
    check_phoneInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
  });

  const usernameInputChange = val => {
    if (val.length === '') {
      setData({
        ...data,
        username: val,
        check_usernameInputChange: false,
      });
      alert('User name cannot be empty');
    } else {
      setData({
        ...data,
        username: val,
        check_usernameInputChange: true,
      });
    }
  };

  const phoneInputChange = val => {
    if (val.length != 0) {
      setData({
        ...data,
        phone: val,
        check_phoneInputChange: true,
      });
    } else {
      setData({
        ...data,
        phone: val,
        check_phoneInputChange: false,
      });
    }
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const updateConfirmSecureTextEntry = () => {
    setData({
      ...data,
      confirm_secureTextEntry: !data.confirm_secureTextEntry,
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={PRIMARY_COLOR} barStyle="light-content" />

      <View style={styles.header}>
        <Animatable.Image
          animation="fadeInDownBig"
          style={styles.logoMontra}
          source={require('../assets/images/LogoMontra.png')}
        />
      </View>

      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <View>
          <Text style={styles.text_header}>Register! </Text>
        </View>
        <ScrollView>
          <Text style={[styles.text_footer, {marginTop: 8}]}>Username</Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color={TITLE_COLOR} size={20} />
            <TextInput
              placeholder="Your Username"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={text => setUsername(text)}
              // onChangeText={(username) => this.setState({username})}
            />
            {data.check_usernameInputChange ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="green" size={20} />
              </Animatable.View>
            ) : null}
          </View>

          <Text style={[styles.text_footer, , {marginTop: 8}]}>E-mail</Text>
          <View style={styles.action}>
            <FontAwesome name="envelope" color={TITLE_COLOR} size={20} />
            <TextInput
              placeholder="Your E-mail"
              style={styles.textInput}
              autoCapitalize="none"
              value={email}
              onChangeText={text => setEmail(text)}
              // onChangeText={(email) => this.setState({email})}
            />
            {data.check_textInputChange ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="green" size={20} />
              </Animatable.View>
            ) : null}
          </View>

          <Text style={[styles.text_footer, , {marginTop: 8}]}>
            Phone Number
          </Text>
          <View style={styles.action}>
            <FontAwesome name="mobile" color={TITLE_COLOR} size={20} />
            <TextInput
              placeholder="Your Phone Number"
              style={styles.textInput}
              autoCapitalize="none"
              keyboardType='numeric'
              onChangeText={text => setPhone(text)}
              // onChangeText={(phone) => this.setState({phone})}
            />
            {data.check_phoneInputChange ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="green" size={20} />
              </Animatable.View>
            ) : null}
          </View>

          <Text style={[styles.text_footer, {marginTop: 8}]}>Password</Text>
          <View style={styles.action}>
            {/* <Feather name="lock" color={TITLE_COLOR} size={20} /> */}
            <FontAwesome name="lock" color={TITLE_COLOR} size={20} />
            <TextInput
              placeholder="Your Password"
              style={styles.textInput}
              autoCapitalize="none"
              secureTextEntry={data.secureTextEntry ? true : false}
              value={password}
              onChangeText={text => setPassword(text)}
              // onChangeText={(password) => this.setState({password})}
            />
            <TouchableOpacity onPress={updateSecureTextEntry}>
              {data.secureTextEntry ? (
                <Feather name="eye-off" color="grey" size={20} />
              ) : (
                <Feather name="eye" color="grey" size={20} />
              )}
            </TouchableOpacity>
          </View>

          <Text style={[styles.text_footer, {marginTop: 8}]}>
            Confirm Password
          </Text>
          <View style={styles.action}>
            {/* <Feather name="lock" color={TITLE_COLOR} size={20} /> */}
            <FontAwesome name="lock" color={TITLE_COLOR} size={20} />
            <TextInput
              placeholder="Confirm Your Password"
              style={styles.textInput}
              autoCapitalize="none"
              secureTextEntry={data.confirm_secureTextEntry ? true : false}
              onChangeText={text => setConfirmPassword(text)}
              // onChangeText={(confirmPassword) => this.setState({confirmPassword})}
            />
            <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
              {data.confirm_secureTextEntry ? (
                <Feather name="eye-off" color="grey" size={20} />
              ) : (
                <Feather name="eye" color="grey" size={20} />
              )}
            </TouchableOpacity>
          </View>

          <View style={styles.button}>
            {/* <TouchableOpacity onPress={() => navigation.navigate('WaitingPage')}> */}
            {/* tambahan auth */}
            {/* <TouchableOpacity onPress={() => register()}> */}
            <TouchableOpacity onPress={handleRegister}>
              <LinearGradient
                colors={[PRIMARY_COLOR, SECONDARY_COLOR]}
                style={styles.signIn}>
                <Text style={[styles.textSign, {color: WHITE}]}>Sign Up</Text>
              </LinearGradient>
            </TouchableOpacity>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingTop: 7,
              }}>
              <Text style={{fontFamily: PRIMARY_FONT}}>
                Already have account?{' '}
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('SignInScreen')}>
                <Text
                  style={{
                    color: GREEN_COLOR,
                    fontFamily: PRIMARY_FONT,
                  }}>
                  {' '}
                  SignIn Here!
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </Animatable.View>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 30,
    paddingTop: 50,
  },
  footer: {
    flex: 3.5,
    backgroundColor: WHITE,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    textAlign: 'center',
    color: TITLE_COLOR,
    fontFamily: BOLD_FONT,
    fontSize: 30,
    paddingBottom: 5,
  },
  text_footer: {
    fontFamily: PRIMARY_FONT,
    color: TITLE_COLOR,
    fontSize: 15,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  button: {
    alignItems: 'center',
    marginTop: 20,
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontFamily: BOLD_FONT,
  },
  logoMontra: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 170,
    height: 170,
  },
});
