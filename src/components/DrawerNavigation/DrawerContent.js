
import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import DrawerItemContent from './DrawerItemContent';
import {WrongDefault} from '../../assets';
import DrawerLogOutContent from './DrawerLogOutContent';
import {
  BACKGROUND_COLOR,
  BOLD_FONT,
  PRIMARY_COLOR,
  TITLE_COLOR,
} from '../../constant';
import firebase from 'firebase';

import {auth} from '../../../firebase';

const DrawerContent = ({ navigation }) => {
  //array
  const [username, setUsername] = useState('');

  //get username
  // const Usernamee = firebase
  //   .firestore()
  //   .collection('users')
  //   .doc(firebase.auth().currentUser.uid)
  //   .get()
  //   .then(doc => {
  //     setUsername(doc.data().username);
      
  //     // if (doc.exists) {
  //     //       console.log('Document data:', doc.data());
  //     //     } else {
  //     //       // doc.data() //will be undefined in this case
  //     //       console.log('No such document!');
  //     //     }
  //     // if (doc && doc.exists) {
  //     //   console.log(doc.id, '=>', doc.data().username);
  //     // }else{
  //     //   console.log('no data');
  //     // }
  //   })
  //   .catch(error => {
  //     console.log('Error getting document:', error);
  //   });

  //get all user data
  // const UserUID = firebase
  // .firestore()
  // .collection('users')
  // .doc(firebase.auth().currentUser.uid)
  // .get()
  // .then(doc => {
  //   if (doc.exists) {
  //     console.log('Document data:', doc.data());
  //   } else {
  //     // doc.data() will be undefined in this case
  //     console.log('No such document!');
  //   }
  // })
  // .catch(error => {
  //   console.log('Error getting document:', error);
  // });

  // const monthly = ref
  // .doc(firebase.auth().currentUser.uid)
  // .collection('MonthlyPayment')
  // .doc('DIAcT8ZCU0Qh0c0333M5')
  // .get()
  // .then(doc => {
  //   if (doc.exists) {
  //     console.log('Doc Data: ', doc.data());
  //   } else {
  //     console.log('doc g ada');
  //   }
  // });

  return (
    <View style={styles.container}>
      <View style={userStyle.bg}>
        <Text style={userStyle.welcome}>Welcome,</Text>

        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <View style={userStyle.container}>
            <Image style={userStyle.image} source={WrongDefault} />
            <View style={userStyle.userData}>

              <Text style={userStyle.text}>User</Text>
              <Text style={userStyle.text}>user@gmail.com</Text>
              {/* <Text style={userStyle.text}>{username}</Text> */}
              {/* <Text style={userStyle.text}>{firebase.firestore().collection("users").doc(firebase.auth().currentUser.uid).get().then()}</Text> */}

              <Text style={userStyle.text}>
                {firebase.auth().currentUser?.email}
              </Text>
            </View>
          </View>


        </TouchableOpacity>
      </View>
      <DrawerItemContent title="Home" navigation={navigation} />
      <DrawerItemContent title="Notifications" navigation={navigation} />
      <DrawerItemContent title="Budget" navigation={navigation} />
      <View style={styles.line} />
      <DrawerItemContent title="History Transaction" navigation={navigation} />
      <DrawerItemContent title="Planning" navigation={navigation} />
      <DrawerItemContent title="Monthly Payment" navigation={navigation} />
      <View style={styles.line} />
      <DrawerItemContent title="Settings" navigation={navigation} />
      <DrawerLogOutContent title="Logout" />
    </View>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
  },
  line: {
    borderStyle: 'solid',
    borderBottomWidth: 3,
    marginHorizontal: 8,
    borderColor: TITLE_COLOR,
    // borderColor: "#6E14FF"
  },
});

const userStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 12,
  },
  bg: {
    backgroundColor: PRIMARY_COLOR,
    borderTopRightRadius: 40,
  },
  welcome: {
    color: 'white',
    fontFamily: BOLD_FONT,
    marginVertical: 8,
    marginLeft: 10,
  },
  text: {
    color: 'white',
    fontFamily: BOLD_FONT,
  },
  image: {
    marginHorizontal: 12,
  },
  userData: {
    marginLeft: 14,
    alignItems: 'center',
  },
});
