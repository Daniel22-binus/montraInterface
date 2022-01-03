import React, {useState, useEffect} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {Edit2Icon, DeleteIcon} from '../assets';
import {
  BACKGROUND_COLOR,
  SECONDARY_COLOR,
  BOLD_FONT,
  TITLE_COLOR,
  PRIMARY_FONT,
} from '../constant';
import LinearGradient from 'react-native-linear-gradient';
import {TouchableOpacity} from 'react-native-gesture-handler';
import CheckBox from '@react-native-community/checkbox';
import {useNavigation} from '@react-navigation/native';
import {PrintPrice} from '../logic/printPrice';
import firebase from 'firebase';

const MonthlyPaymentItem = ({Monthly, editMonthly, deleteMonthly}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const navigation = useNavigation();

  // //cara 1
  // const monthly = firebase
  //   .firestore()
  //   .collection('users')
  //   .doc(firebase.auth().currentUser.uid)
  //   .collection('MonthlyPayment')
  //   .get()
  //   .then(doc => {
  //     if (doc.exists) {
  //       console.log('Document data:', doc.data());
  //     } else {
  //       // doc.data() will be undefined in this case
  //       console.log('No such document! - monthly');
  //     }
  //   })
  //   .catch(error => {
  //     console.log('Error getting document:', error);
  //   });

  // //cara2
  const [monthlyID, setMonthlyID] = useState('');
  const [monthlyName, setMonthlyName] = useState('');
  const [monthlyFee, setMonthlyFee] = useState('');
  const [monthlyDeadline, setMonthlyDeadline] = useState('');

  // useEffect(() => {
  //   const MonthlyQuerySnapshot = firebase
  //     .firestore()
  //     .collection('users')
  //     .doc(firebase.auth().currentUser.uid)
  //     .collection('MonthlyPayment')
  //     .get()
  //     .then(querySnapshot => {
  //       querySnapshot.forEach(doc => {
  //         console.log('console:  ' + doc.data().paymentName);
  //         // console.log(doc.data().fee);
  //         // console.log(doc.data().deadline);
  //         // setMonthlyName(doc.data().paymentName)
  //         // console.log(monthlyName)
  //       })
  //     })

  // }, [])

  //this one
  const monthlyQuerySnapshot = firebase
    .firestore()
    .collection('users')
    .doc(firebase.auth().currentUser.uid)
    .collection('MonthlyPayment')
    .get()
    .then(collection => {
      // const a = [];
      // const b = [];
      // const c = [];
      collection.forEach(doc => {
        // console.log(doc.data().paymentName);
        // a.push(doc.data().paymentName);
        // b.push(doc.data().fee);
        // c.push(doc.data().deadline);
        // console.log(a, 'ini a');
        // console.log(b, 'ini b');
        // console.log(c, 'ini c');
        console.log('payment Name: ', doc.data().paymentName);
        // setMonthlyName(doc.data().paymentName)
        // console.log('chicken')
      });
    })
    .catch(error => {
      console.log('Error getting document:', error);
    });

  //     // snapshot.forEach(doc => {
  //     //   // console.log(`${doc.id} => ${doc.data()}`);
  //     //   if(doc.id != null){
  //     //     console.log(doc.id)
  //         // console.log(`${doc.id}`, '你好')
  //         // console.log(snapshot)
  //         // console.log(`${doc.data().paymentName}`)
  //         // setMonthlyName(doc.data().paymentName)

  //       // }
  //       // console.log(doc.id);
  //       // setMonthlyID(doc.id)
  //       // .then(snapshot => setUserDetails(snapshot.data()))
  //       // if (querySnapshot.size() >= 0) {
  //       //   console.log(doc.data());
  //       // }
  //     // });

  // //     // setmonthlyData(doc.data())
  // //     // if (querySnapshot.exists) {
  // //     //   querySnapshot.forEach(doc => {
  // //     //     console.log('Monthly data:', doc.data());
  // //     //   });
  // //     // } else {
  // //     //   // doc.data() will be undefined in this case
  // //     //   console.log('No such document! - monthly');
  // //     // }

  // const monthlyQuerySnapshot = firebase
  //   .firestore()
  //   .collection('users')
  //   .doc(firebase.auth().currentUser.uid)
  //   .collection('MonthlyPayment')
  //   .onSnapshot((snapshot) => {
  //     snapshot.docs.map((doc) => {

  //     })
  //   })

  // //cara 3
  // const monthlyEachData = firebase
  // .firestore()
  // .collection('users')
  // .doc(firebase.auth().currentUser.uid)
  // .collection('MonthlyPayment')
  // .get()
  // .then(querySnapshot => {
  // })
  // .catch(error => {
  //   console.log('Error getting document:', error);
  // });

  //cara 4
  // const getAllMonthlyPayment = () =>
  //   firebase
  //     .firestore()
  //     .collection('users')
  //     .doc(firebase.auth().currentUser.uid)
  //     .collection('MonthlyPayment')
  //     .get();

  // // const Monthly_ = await firebase.getAllMonthlyPayment()

  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.linear}
        colors={[BACKGROUND_COLOR, SECONDARY_COLOR]}
        start={{x: 1, y: 0}}
        end={{x: 0, y: 1}}>
        <View style={styles.upperStyle}>
          <Text style={styles.font1}>{Monthly.title}</Text>
          <View style={styles.icons}>
            <TouchableOpacity
              style={styles.oneIcon}
              onPress={() => {
                navigation.navigate('MonthlyAddEdit', {
                  getMonthly: Monthly,
                  Header: 'Edit Monthly Payment',
                  FormAction: editMonthly,
                  TitleBtn: 'Edit',
                });
              }}>
              <Edit2Icon />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.oneIcon}
              onPress={() => deleteMonthly(Monthly.id)}>
              <DeleteIcon />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.descWrapper}>
          <Text style={styles.font1}>{PrintPrice(Monthly.budget)}</Text>
          <Text style={styles.font2}>
            deadline: day-{Monthly.deadline} of the month
          </Text>
        </View>

        <View style={styles.checkBox}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={newValue => setToggleCheckBox(newValue)}
            tintColors={{true: TITLE_COLOR, false: TITLE_COLOR}}
          />
        </View>
      </LinearGradient>
    </View>
  );
};

export default MonthlyPaymentItem;

const WindowWidth = Dimensions.get('window').width;
const WindowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    paddingVertical: WindowHeight * 0.015,
    alignItems: 'center',
  },
  linear: {
    width: WindowWidth * 0.88,
    height: 130,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 15,
  },
  upperStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  font1: {
    fontFamily: BOLD_FONT,
    color: TITLE_COLOR,
    fontSize: 20,
  },
  icons: {
    flexDirection: 'row',
    position: 'relative',
  },
  oneIcon: {
    marginLeft: 10,
  },
  font2: {
    fontFamily: PRIMARY_FONT,
    color: TITLE_COLOR,
    fontSize: 15,
  },
  descWrapper: {
    marginLeft: 15,
  },
  checkBox: {
    alignItems: 'flex-end',
  },
});
