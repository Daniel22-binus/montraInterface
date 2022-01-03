import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import {
  PRIMARY_COLOR,
  WHITE,
  SECONDARY_COLOR,
  GREEN_COLOR,
  TITLE_FONT,
  TITLE_COLOR,
  BOLD_FONT,
  PRIMARY_FONT,
  BACKGROUND_COLOR,
} from '../constant';

const WaitingPage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Animatable.Image
          animation="fadeInDownBig"
          style={styles.logoMontra}
          source={require('../assets/images/LogoMontra.png')}
        />
      </View>
      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <View>
          <Text style={styles.text_header}>Verify your email address </Text>
          <View style={styles.view_text}>
            <Text style={styles.text_email}>An email have been send to</Text>
            <Text style={styles.email}>user@gmail.com</Text>
          </View>
          <View style={styles.view_text}>
            <Text style={styles.text_email}>
              please check your e-mail to verify your account
            </Text>
          </View>
          <View style={styles.view_text}>
          <Text style={styles.resend_text}>
            didn’t receive verification email? please click the button below
          </Text>
          </View>
          <View style={styles.button}>
            <TouchableOpacity
              onPress={() => navigation.navigate('WaitingPage')}>
              <LinearGradient
                colors={[PRIMARY_COLOR, SECONDARY_COLOR]}
                style={styles.signIn}>
                <Text style={[styles.textSign, {color: WHITE}]}>Resend Email</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </Animatable.View>
    </View>
  );
};

export default WaitingPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
  },
  footer: {
    flex: 3.5,
    backgroundColor: WHITE,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 30,
    paddingTop: 50,
  },
  logoMontra: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 130,
    height: 130,
  },
  text_header: {
    textAlign: 'center',
    color: TITLE_COLOR,
    fontFamily: BOLD_FONT,
    fontSize: 30,
    paddingBottom: 5,
  },
  view_text: {
    alignItems: 'center',
    paddingTop: 20,
  },
  text_email: {
    fontFamily: PRIMARY_FONT,
    fontSize: 18,
    color: TITLE_COLOR,
    width: 301,
    textAlign: 'center',
  },
  email: {
    fontFamily: BOLD_FONT,
    fontSize: 18,
    color: TITLE_COLOR,
    width: 301,
    textAlign: 'center',
  },
  resend_text: {
    paddingTop: 30,
    width: 305,
    opacity: .40,
    fontSize: 15,
  },
  button: {
    alignItems: 'center',
    marginTop: 20,
  },
  signIn: {
    width: 170,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontFamily: BOLD_FONT,
  },
});
