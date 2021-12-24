import React, {useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import DrawerItemContent from './DrawerItemContent';
import DrawerLogOutContent from './DrawerLogOutContent';
import {WrongDefault} from '../../assets'
import { BACKGROUND_COLOR, BOLD_FONT, PRIMARY_COLOR, TITLE_COLOR } from '../../constant';
import firebase from 'firebase';
import { auth } from '../../../firebase';

const DrawerContent = ({navigation}) => {
  // const [users, setUsers] = useState([])

//   const username = (username) => {
//     firebase.firestore()
//         .collection("users")
//         .doc(firebase.auth().currentUser.uid)
//         .set({username})
// }
  // const username = firebase.firestore().collection('users').doc(id).get()
  // const username = firebase.firestore().collection('users').get().then((snapshot) => {
  //   getInfo(snapshot.docs('username'))
  // })
  // const username = firebase.auth().currentUser?.email

  // componentDidMount(){
  //   console.log('mounted')
  //   firebase.firestore().collection('users')
  //   .get()
  //   .then(snapshot => {
  //     const users = []
  //     snapshot.forEach(doc => {
  //       const data  = doc.data()
  //       users.push(data)
  //     })
  //     this.setState({users : users})
  //   })
  //   .catch(error => console.log(error))

  return (
    <View style={styles.container}>
      <View style={userStyle.bg}>
        <Text style={userStyle.welcome}>Welcome,</Text>
        <View style={userStyle.container}>
          <Image style={userStyle.image} source={WrongDefault}/>
          <View style={userStyle.userData}>
            <Text style={userStyle.text}>User</Text>
            {/* <Text style={userStyle.text}>{username}</Text> */}
            {/* <Text style={userStyle.text}>{firebase.firestore().collection("users").doc(firebase.auth().currentUser.uid).get().then()}</Text> */}
            <Text style={userStyle.text}>{firebase.auth().currentUser?.email}</Text>
          </View>
        </View>
      </View>
      <DrawerItemContent title="Home" navigation={navigation} />
      <DrawerItemContent title="Notifications" navigation={navigation} />
      <DrawerItemContent title="Budget" navigation={navigation} />
      <View style={styles.line}/>
      <DrawerItemContent title="History Transaction" navigation={navigation} />
      <DrawerItemContent title="Planning" navigation={navigation} />
      <DrawerItemContent title="Monthly Payment" navigation={navigation} />
      <View style={styles.line}/>
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
      borderColor: TITLE_COLOR
      // borderColor: "#6E14FF"
    }
});

const userStyle = StyleSheet.create({
  container:{
    flexDirection: "row",
    marginVertical: 12,
  },
  bg: {
    backgroundColor: PRIMARY_COLOR,
    borderTopRightRadius: 40,
  },
  welcome: {
    color: "white",
    fontFamily: BOLD_FONT,
    marginVertical: 8,
    marginLeft: 10,
  },
  text:{
    color: "white",
    fontFamily: BOLD_FONT,
  },
  image: {
    marginHorizontal: 12,
  },
  userData: {
    marginLeft: 14,
    alignItems: 'center'
  },
})
