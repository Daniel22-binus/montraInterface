import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import ImagePicker from 'react-native-image-crop-picker';
import HeaderBack from '../../components/HeaderBack';
import {
  BACKGROUND_COLOR,
  BOLD_FONT,
  PRIMARY_COLOR,
  PRIMARY_FONT,
  SOFT_COLOR,
  TITLE_COLOR,
  WHITE,
} from '../../constant';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import ProfileJoinedDate from '../../components/ProfileComponent/ProfileJoinedDate';
import firebase from '../../../firebase';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { useFocusEffect } from '@react-navigation/native';

const EditProfileScreen = ({navigation}) => {
  const [image, setImage] = useState('https://ui-avatars.com/api/?name="user"');

  useFocusEffect(
    useCallback(() => {
      getUserData();
    }, [])
  );

  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');

  const getUserData = () => {
    firebase
      .database()
      .ref(`users/${firebase.auth().currentUser.uid}`)
      .once('value', function (snapshot) {
        setUsername(snapshot.val().username);
        setPhone(snapshot.val().phone);
      }); 
    }
    
  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
      cropping: true,
      compressImageQuality: 0.7,
    }).then(image => {
      setImage(image.path);
      console.log(image);
      bs.current.snapTo(1);
    });
  };

  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.7,
    }).then(image => {
      setImage(image.path);
      console.log(image);
      bs.current.snapTo(1);
    });
  };

  renderInner = () => (
    <View style={styles.panel}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.panelTitle}>Upload Photo</Text>
        <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
      </View>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={takePhotoFromCamera}>
        <Text style={styles.panelButtonTitle}>Take Photo</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={choosePhotoFromLibrary}>
        <Text style={styles.panelButtonTitle}>Choose From Library</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={() => bs.current.snapTo(1)}>
        <Text style={styles.panelButtonTitle}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );

  renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );

  bs = React.createRef();
  fall = new Animated.Value(1);

  return (
    <View style={{flex: 1}}>
      <HeaderBack navigation={navigation} title="Profile" />
      <View style={styles.container}>
        <BottomSheet
          ref={bs}
          snapPoints={[330, 0]}
          renderContent={renderInner}
          renderHeader={renderHeader}
          initialSnap={1}
          callbackNode={fall}
          enabledGestureInteraction={true}
        />

        <View style={styles.title}>
          <Text style={styles.titleFont}>Profile</Text>
          <FontAwesome
            onPress={() => navigation.navigate('profileEdit')}
            name="edit"
            color={TITLE_COLOR}
            size={25}
            style={styles.editIcon}
          />
        </View>

        <View style={styles.profile}>
          <Image
            style={styles.profilePhoto}
            source={{
              uri: image,
            }}
          />
          <Text style={styles.nameFont}>{username}</Text>
          <Text style={styles.profileFont}>
            {firebase.auth().currentUser.email}
          </Text>
          <Text style={styles.profileFont}>{phone}</Text>
        </View>
        <View style={styles.containerInsideBox}>
          <View style={styles.fiturBox}>
            <TouchableOpacity
              onPress={() => bs.current.snapTo(0)}
              style={[styles.button, {paddingBottom: 15}]}>
              <FontAwesome name="camera" color={TITLE_COLOR} size={30} />
              <Text style={styles.buttonName}>Change Profile Picture</Text>
            </TouchableOpacity>

            <View>
              <View style={styles.button}>
                <FontAwesome name="calendar" color={TITLE_COLOR} size={30} />
                <Text style={styles.buttonName}>Joined Date</Text>
              </View>
              <ProfileJoinedDate />
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
    </View>
  );
};

export default EditProfileScreen;

const WindowWidth = Dimensions.get('window').width;
const WindowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
  },

  title: {
    paddingBottom: 5,
    marginTop: 5,
  },

  titleFont: {
    fontFamily: BOLD_FONT,
    color: TITLE_COLOR,
    fontSize: 30,
    textAlign: 'center',
  },

  editIcon: {
    paddingRight: WindowWidth / 18,
    position: 'absolute',
    right: 0,
    marginTop: 8,
  },

  profile: {
    alignItems: 'center',
  },

  profilePhoto: {
    width: 100,
    height: 100,
    borderRadius: 50,
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

  panel: {
    padding: 20,
    backgroundColor: WHITE,
    paddingTop: 20,
  },

  header: {
    backgroundColor: WHITE,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  panelHeader: {
    alignItems: 'center',
  },

  panelHandle: {
    width: 45,
    height: 5,
    borderRadius: 4,
    backgroundColor: PRIMARY_COLOR,
    marginBottom: 10,
  },

  panelTitle: {
    fontSize: 27,
    height: 35,
    color: PRIMARY_COLOR,
    fontFamily: BOLD_FONT,
  },

  panelSubtitle: {
    fontSize: 14,
    fontFamily: PRIMARY_FONT,
    color: SOFT_COLOR,
    height: 30,
    marginBottom: 10,
  },

  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: PRIMARY_COLOR,
    alignItems: 'center',
    marginVertical: 7,
  },

  panelButtonTitle: {
    fontSize: 17,
    color: WHITE,
    fontFamily: BOLD_FONT,
  },
});
