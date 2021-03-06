import React, {useState, useEffect} from 'react';
import {
  TextInput,
  StyleSheet,
  Text,
  View,
  Platform,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';
import {
  WHITE,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  GREEN_COLOR,
  BOLD_FONT,
  PRIMARY_FONT,
  TITLE_FONT,
  TITLE_COLOR,
  BACKGROUND_COLOR,
} from '../constant/index';
import {auth} from '../../firebase';

const SignInScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogIn = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(result => {
        console.log(result);
        navigation.navigate('MainApp');
      })

      .catch(error => alert(error.message));
  };

  const forgetPassword = () => {
    auth
      .sendPasswordResetEmail(email)
      .then(() => {
        alert('Reset Password has been sent to ' + email);
      })
      .catch(e => {
        alert(e.message);
      });
  };

  const [data, setData] = useState({
    email: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
  });

  const textInputChange = a => {
    if (a.length !== 0) {
      setData({
        ...data,
        email: a,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        email: a,
        check_textInputChange: false,
      });
    }
  };

  const passwordToggle = a => {
    setData({
      ...data,
      password: a,
    });
  };

  const updateSecurePasswordEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInDownBig" style={styles.header}>
        <View style={{flexDirection: 'row'}}>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.text_header}>Welcome to Montra!</Text>
          </View>
          <Image
            source={require('../assets/images/LogoMontra.png')}
            style={styles.logo}
            resizeMode="cover"
          />
        </View>
      </Animatable.View>

      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <Text style={styles.text_login}>Login Here!</Text>
        <Text style={styles.text_userPassword}>E-mail</Text>

        <View style={styles.action}>
          <FontAwesome name="envelope" color={TITLE_COLOR} size={20} />
          <TextInput
            placeholder="input your E-mail"
            style={styles.textInput}
            autoCapitalize="none"
            value={email}
            onChangeText={text => setEmail(text)}
          />
          {data.check_textInputChange ? (
            <Animatable.View animation="bounceIn">
              <Feather name="check-circle" color="purple" size={20} />
            </Animatable.View>
          ) : null}
        </View>

        <Text style={styles.text_userPassword}>Password</Text>
        <View style={styles.action}>
          <FontAwesome name="lock" color={TITLE_COLOR} size={20} />
          <TextInput
            placeholder="input your password"
            secureTextEntry={data.secureTextEntry ? true : false}
            style={styles.textInput}
            autoCapitalize="none"
            value={password}
            onChangeText={text => setPassword(text)}
          />
          <TouchableOpacity onPress={updateSecurePasswordEntry}>
            {data.secureTextEntry ? (
              <Feather name="eye-off" color="grey" size={20} />
            ) : (
              <Feather name="eye" color="grey" size={20} />
            )}
          </TouchableOpacity>
        </View>

        <View style={{alignItems: 'flex-end'}}>
          <TouchableOpacity
            onPress={forgetPassword}>
            <Text style={{color: 'red', fontFamily: PRIMARY_FONT}}>
              forget password?
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.button}>
          <TouchableOpacity onPress={handleLogIn}>
            <LinearGradient
              colors={[PRIMARY_COLOR, SECONDARY_COLOR]}
              style={styles.signIn}>
              <Text style={styles.textSignIn}>Login</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        <View style={styles.textSignUp}>
          <Text>Don't have account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
            <Text style={{color: GREEN_COLOR}}>Create new Account here</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

export default SignInScreen;

const {height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
  },
  logo: {
    width: 120,
    height: 120,
    justifyContent: 'flex-end',
    marginLeft: 20,
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
    paddingVertical: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: WHITE,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    width: 185,
    height: 120, 
    paddingTop: height *0.025,
    color: WHITE,
    fontSize: 30,
    fontFamily: TITLE_FONT,
  },
  text_login: {
    fontSize: 30,
    color: TITLE_COLOR,
    fontFamily: BOLD_FONT,
  },
  text_userPassword: {
    color: TITLE_COLOR,
    fontSize: 18,
    marginTop: 20,
    fontFamily: PRIMARY_FONT,
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
    color: PRIMARY_COLOR,
    fontFamily: PRIMARY_FONT,
  },
  button: {
    alignItems: 'center',
    marginTop: 32,
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSignIn: {
    fontSize: 20,
    color: WHITE,
    fontFamily: BOLD_FONT,
  },
  textSignUp: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    fontFamily: PRIMARY_FONT,
  },
});
