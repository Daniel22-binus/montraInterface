import {useState} from 'react';
import {StyleSheet} from 'react-native';
import firebase from '../../firebase';
import printDate, {getMonthPick} from '../logic/printDate';

const profileHook = () => {
  const [profileData, setProfileData] = useState({
    results: [],
  });

  let path = '/user/' + firebase.auth().currentUser?.uid;
  
  const getProfile = async date => {
    firebase
    .database()
    .ref(`users/${firebase.auth().currentUser.uid}`)
    .once('value', function (snapshot) {
      console.log(snapshot.val());
      setProfileData({
        results: snapshot.val(),
      });
    });
  };

//   const editProfile = userFirebase => {
//     firebase
//       .database()
//       .ref(`users/${firebase.auth().currentUser.uid}`)
//     //   .set(Budget)
//     //   .then(() => {
//     //     getBudget(month);
//     //     alert('Successfully edited Budget.');
//     //   })
//     //   .catch(error => {
//     //     alert(error);
//     //   });
//   };
  
  return [getProfile];
};

export default profileHook;

const styles = StyleSheet.create({});
