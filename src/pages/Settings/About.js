import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {color} from 'react-native-reanimated';
import HeaderBack from '../../components/HeaderBack';
import {
  BACKGROUND_COLOR,
  BOLD_FONT,
  PRIMARY_COLOR,
  PRIMARY_FONT,
  SECONDARY_COLOR,
  SOFT_COLOR,
  TITLE_COLOR,
  TITLE_FONT,
  WHITE,
} from '../../constant';

const About = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <HeaderBack navigation={navigation} title="About" />
      <View style={styles.container}>
        <Text style={styles.title}>About Us</Text>
        <View style={styles.outerBox}>
          <Text style={styles.outerFont}>About Montra</Text>
          <View style={styles.innerBox}>
            <ScrollView>
              <Text style={styles.innerFont}>
                Montra app is a personal financial management application. The
                use of this Montra application is to help users manage their
                finances every month. Users can control their spending based on
                the budget that has been made by themself. Budget category can
                create by user according to the user needs, user also can add
                expenses based on existing categories. We hope that the presence
                of the Montra application can help you manage your monthly
                finances effectively and efficiently.{' '}
              </Text>
              <Text style={styles.innerFont}>
                If there any suggestions for the application development, please
                contact us by E-mail. Thankyou for using our application.
              </Text>
            </ScrollView>
          </View>

          <Text style={styles.outerFont}>Contact us</Text>
          <View style={styles.innerBox}>
            <ScrollView>
              <View style={styles.contactContains}>
                <Text style={styles.contactFont}>E-mail </Text>
                <Text style={styles.innerFont}>
                  {' '}
                  montra.transaction@gmail.com
                </Text>
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    </View>
  );
};

export default About;

const WindowWidth = Dimensions.get('window').width;
const WindowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
  },
  title: {
    marginTop: 25,
    fontFamily: TITLE_FONT,
    color: TITLE_COLOR,
    fontSize: 30,
    textAlign: 'center',
  },
  outerBox: {
    backgroundColor: PRIMARY_COLOR,
    paddingVertical: 20, 
    paddingHorizontal: 20,
    marginVertical: 20, 
    margin: 20,
    borderRadius: 25,
  },
  innerBox: {
    backgroundColor: WHITE,
    margin: 10,
    padding: 15,
    marginBottom: 15,
    paddingHorizontal: 20,
    borderRadius: 25,
    // height: 215,
  },

  outerFont: {
    fontWeight: 'bold',
    color: WHITE,
    fontSize: 18,
    fontFamily:BOLD_FONT
  },

  innerFont: {
    textAlign: 'justify',
    color: TITLE_COLOR,
    fontFamily: PRIMARY_FONT
  },

  contactFont: {
    color: TITLE_COLOR,
    fontFamily:BOLD_FONT,
    fontSize: 15,
  },

  contactContains: {
    textAlign: 'justify',
    color: TITLE_COLOR,
    fontFamily: PRIMARY_FONT
  },
});
