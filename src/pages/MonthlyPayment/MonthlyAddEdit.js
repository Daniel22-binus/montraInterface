import React, {useEffect, useState} from 'react';
import {View, Text, Dimensions, StyleSheet, TextInput} from 'react-native';
import HeaderBack from '../../components/HeaderBack';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {BOLD_FONT, TITLE_COLOR, PRIMARY_FONT, WHITE} from '../../constant';
import {auth} from '../../../firebase';
// import {db} from '../../../firebase';
import firebase from 'firebase';

const MonthlyPaymentAdd = ({route, navigation}) => {
  const {getMonthly, Header, FormAction, TitleBtn} = route.params;
  const [Monthly, setMonthly] = useState(getMonthly);

  const [paymentName, setPaymentName] = useState('');
  const [fee, setFee] = useState('');
  const [deadline, setDeadline] = useState('');

  // let userID = firebase.auth().currentUser?.uid;
  // let dbMonthlyPayment = firebase.firestore().collection('MonthlyPayment');

  const handleAddMonthlyPayment = async () => {
      if (paymentName === '') {
        alert('Please fill your payment name');
      } else if (fee === '') {
        alert('Please fill your fee');
      } else if (deadline === '') {
        alert('please fill your deadline');
      } 
      else {
        let myUID = firebase.auth().currentUser.uid
        console.log(`my UID ${myUID}`)
        // firebase.firestore().settings({experimentalForceLongPolling: true});
        firebase
          .firestore()
          .collection('users')
          .doc(firebase.auth().currentUser?.uid)
          .collection('MonthlyPayment').doc()
          .set(
            {
              paymentName,
              fee,
              deadline,
            },
            {merge: false},
          )
          .then(() => {
            console.log(`.set() completed successfully!`);
          })
          .catch(ex => {
            console.error(`EXCEPTION!!  ${ex.message}`);
            throw ex;
          });
        navigation.navigate('Monthly Payment');
      }
    
  };

  // const handleAddMonthlyPayment = () => {
  //   if (paymentName === '') {
  //     alert('Please fill your payment name');
  //   } else if (fee === '') {
  //     alert('Please fill your fee');
  //   } else if (deadline === '') {
  //     alert('please fill your deadline');
  //   } else {
  //     let db = firebase.firestore();
  //     // let db = firebase.firestore().settings({ experimentalForceLongPolling: true })
  //     let auth = firebase.auth();
  //     let myUid = auth.currentUser?.uid; // currentUser could be null or undefined!
  //     //  console.log(`myUid is ${myUid}`);

  //     if (myUid) {
  //       // if we have a non-null value
  //       let docRef = db.collection('MonthlyPayment').doc(myUid);

  //       docRef
  //         .set({
  //           paymentName,
  //           fee,
  //           deadline,
  //         })
  //         .then(() => {
  //           console.log(`.set() completed successfully!`);
  //         })
  //         .catch(ex => {
  //           console.error(`EXCEPTION!!  ${ex.message}`);
  //           throw ex;
  //         });

  //       navigation.navigate('Monthly Payment');
  //     }
  //   }
  // };

  const paymentTitleInputChange = text => {
    setMonthly({
      ...Monthly,
      title: text,
    });
  };

  const budgetInputChange = text => {
    setMonthly({
      ...Monthly,
      budget: text,
    });
  };

  const deadlineInputChange = text => {
    setMonthly({
      ...Monthly,
      deadline: text,
    });
  };

  return (
    <View style={{flex: 1}}>
      <HeaderBack navigation={navigation} title={Header} />

      <ScrollView>
        <View style={styles.input}>
          <Text style={[styles.text_footer, {marginTop: 8}]}>Payment Name</Text>
          <TextInput
            style={styles.textInput}
            autoCapitalize="none"
            // value={Monthly.title}
            // onChangeText={text => paymentTitleInputChange(text)}
            onChangeText={text => setPaymentName(text)}
          />
        </View>
        <View style={styles.input}>
          <Text style={[styles.text_footer, {marginTop: 8}]}>Fee</Text>
          <TextInput
            style={styles.textInput}
            // value={Monthly.budget}
            // onChangeText={text => budgetInputChange(text)}
            onChangeText={text => setFee(text)}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.input}>
          <Text style={[styles.text_footer, {marginTop: 8}]}>Deadline</Text>
          <TextInput
            style={styles.textInput}
            // value={Monthly.deadline}
            // onChangeText={text => deadlineInputChange(text)}
            onChangeText={text => setDeadline(text)}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.button}>
          <TouchableOpacity
            // onPress={() => {
            //   FormAction(Monthly);
            //   navigation.goBack();
            // }}>
            onPress={handleAddMonthlyPayment}>
            {/* onPress={handleClick}> */}
            <View style={styles.buttonAdd}>
              <Text style={styles.buttonText}>{TitleBtn}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default MonthlyPaymentAdd;

const WindowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  input: {
    flexDirection: 'row',
    marginTop: 15,
    paddingBottom: 15,
  },
  text_footer: {
    fontFamily: PRIMARY_FONT,
    color: TITLE_COLOR,
    fontSize: 17,
    width: 100,
    paddingLeft: WindowWidth * 0.04,
  },
  textInput: {
    flex: 1,
    paddingLeft: WindowWidth * 0.04,
    paddingRight: WindowWidth * 0.04,
    marginLeft: WindowWidth * 0.04,
    marginRight: WindowWidth * 0.04,
    color: 'black',
    borderBottomColor: TITLE_COLOR,
    borderBottomWidth: 1,
  },
  button: {
    alignItems: 'flex-end',
    paddingTop: 30,
    paddingRight: WindowWidth * 0.04,
    paddingBottom: 35,
  },
  buttonAdd: {
    width: 120,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: TITLE_COLOR,
  },
  buttonText: {
    fontSize: 20,
    fontFamily: BOLD_FONT,
    color: WHITE,
  },
});
