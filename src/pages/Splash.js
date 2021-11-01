import React from 'react';
import {
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';
import {
  PRIMARY_COLOR,
  WHITE,
  SECONDARY_COLOR,
  PRIMARY_FONT,
  BOLD_FONT,
  TITLE_FONT,
  TITLE_COLOR,
} from '../constant/index';

const SplashScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Animatable.Image
          animation="bounceIn"
          duraton="1500"
          source={require('../assets/images/LogoMontra.png')}
          style={styles.logo}
          resizeMode="stretch"
        />
      </View>

      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <Text style={styles.title}>Keep your Financial Balance!</Text>
        <Text style={styles.text}>Sign in With Account</Text>

        <View style={styles.button}>
          <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}>
            <LinearGradient
              style={styles.signIn}
              colors={[PRIMARY_COLOR, SECONDARY_COLOR]}>
              <Text style={styles.textStarted}>Get Started</Text>
              <MaterialIcons name="navigate-next" color={WHITE} size={20} />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

export default SplashScreen;

const {height} = Dimensions.get('screen');
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY_COLOR,
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    backgroundColor: WHITE,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  logo: {
    width: height_logo,
    height: height_logo,
    borderRadius: 100,
  },
  title: {
    color: TITLE_COLOR,
    fontSize: 30,
    fontFamily: TITLE_FONT,
  },
  text: {
    color: 'grey',
    marginTop: 5,
    fontFamily: PRIMARY_FONT,
  },
  button: {
    alignItems: 'flex-end',
    marginTop: 30,
  },
  signIn: {
    width: 170,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    flexDirection: 'row',
  },
  textStarted: {
    color: 'white',
    fontFamily: BOLD_FONT,
    fontSize: 18,
  },
});
