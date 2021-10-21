import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {
  BACKGROUND_COLOR,
  BOLD_FONT,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  TITLE_COLOR,
  WHITE,
} from '../../constant';
import ProfileContent from '../../components/ProfileComponent/ProfileContent';
import ProfileJoinedDate from '../../components/ProfileComponent/ProfileJoinedDate';
import HeaderBack from '../../components/HeaderBack';
import {WrongDefault} from '../../assets';
import {ScrollView} from 'react-native-gesture-handler';

const WindowWidth = Dimensions.get('window').width;
const WindowHeight = Dimensions.get('window').height;
const Profile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <HeaderBack navigation={navigation} title="Profile" />

      <View style={styles.title}>
        <Text style={styles.titleFont}> Profile</Text>
        <FontAwesome
          onPress={() => navigation.navigate('profileEdit')}
          name="edit"
          color={TITLE_COLOR}
          size={25}
          style={styles.editIcon}
        />
      </View>

      <View style={styles.profile}>
        <Image style={styles.profilePhoto} source={WrongDefault} />
        {/* <ProfileContent
        //   image=""
          name="User"
          email="user@gmail.com"
          phone="0877 0877 0877"
        /> */}
        <Text style={styles.nameFont}>User</Text>
        <Text style={styles.profileFont}>user@gmail.com</Text>
        <Text style={styles.profileFont}>0877 0877 0877</Text>
      </View>
      <View style={styles.containerInsideBox}>
        <View style={styles.fiturBox}>
          <TouchableOpacity style={[styles.button, {paddingBottom: 15}]}>
            <FontAwesome name="camera" color={TITLE_COLOR} size={30} />
            <Text style={styles.buttonName}>Change Profile Picture</Text>
          </TouchableOpacity>

          <View>
            <View style={styles.button}>
              <FontAwesome name="calendar" color={TITLE_COLOR} size={30} />
              <Text style={styles.buttonName}>Joined Date</Text>
            </View>
            {/* <ProfileJoinedDate date="28 December 2020" /> */}
            <Text style={styles.fontDate}>28 December 2020</Text>
          </View>
        </View>
        <View style={styles.fiturBox}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Splash')}
            style={styles.button}>
            <Feather name="log-out" color={TITLE_COLOR} size={30} />
            <Text style={styles.buttonName}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
  },

  title: {
    paddingBottom: 5,
    alignItems: 'center',
  },

  titleFont: {
    fontFamily: BOLD_FONT,
    color: TITLE_COLOR,
    fontSize: 30,
    textAlign: 'center',
    alignItems: 'center',
  },

  editIcon: {
    paddingRight: WindowWidth / 35,
    position: 'absolute',
    right: 0,
  },

  profile: {
    alignItems: 'center',
  },

  profilePhoto: {
    width: 100,
    height: 100,
  },

  nameFont: {
    fontSize: 20,
    fontFamily: BOLD_FONT,
    color: TITLE_COLOR,
  },

  profileFont: {
    fontSize: 19,
    color: TITLE_COLOR,
  },

  containerInsideBox: {
    backgroundColor: PRIMARY_COLOR,
    paddingTop: 25,
    paddingHorizontal: 25,
    marginTop: WindowHeight / 29.5,
    marginLeft: 17,
    marginRight: 17,
    borderRadius: 25,
  },

  fiturBox: {
    backgroundColor: WHITE,
    borderRadius: 25,
    padding: 20,
    marginBottom: 30,
  },

  button: {
    flexDirection: 'row',
    position: 'relative',
    alignItems: 'center',
  },

  buttonName: {
    color: TITLE_COLOR,
    fontFamily: BOLD_FONT,
    fontSize: 16,
    paddingLeft: 15,
  },

  fontDate: {
    fontSize: 18,
    fontFamily: BOLD_FONT,
    fontStyle: 'italic',
    color: SECONDARY_COLOR,
    textAlign: 'right',
  },
});
