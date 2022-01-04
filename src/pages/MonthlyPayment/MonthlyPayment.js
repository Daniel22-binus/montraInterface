import React, {useCallback, useEffect, useState} from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {Add1Icon} from '../../assets';
import MonthlyPaymentItem from '../../components/MonthlyPaymentItem';
import {BOLD_FONT, TITLE_COLOR} from '../../constant';
import HeaderBack from '../../components/HeaderBack';
import monthlyHook from '../../hooks/monthlyHook';
import firebase from 'firebase';
import {useFocusEffect} from '@react-navigation/native';

const MonthlyPayment = ({navigation}) => {
  const [monthlyList, addMonthly, editMonthly, deleteMonthly, setStateNeed] =
    monthlyHook();

  const [monthlyID, setMonthlyID] = useState('');
  const [monthlyName, setMonthlyName] = useState('');
  const [monthlyFee, setMonthlyFee] = useState('');
  const [monthlyDeadline, setMonthlyDeadline] = useState('');
  const [data, setData] = useState('');

  const [id, setId] = useState('');
  useFocusEffect(
    useCallback(()=>{
      firebase
  .firestore()
  .collection('users')
  .doc(firebase.auth().currentUser.uid)
  .collection('MonthlyPayment')
  .get()
  .then(collection => {
    let Monthly_Payment_Name = collection.docs.map(doc => {
      const name2 = doc.data().paymentName
      return {name2}
    });
    setMonthlyName(Monthly_Payment_Name)
    console.log('name: ', monthlyName)
  })

  .catch(error => {
    console.log('Error getting document:', error);
  });
    },[])
  )
  
  useFocusEffect(
    useCallback(()=>{
      firebase
  .firestore()
  .collection('users')
  .doc(firebase.auth().currentUser.uid)
  .collection('MonthlyPayment')
  .get()
  .then(collection => {
    let Monthly_Payment_Fee = collection.docs.map(doc => {
      const fee = doc.data().fee
      return {fee}
    });
    setMonthlyFee(Monthly_Payment_Fee)
    console.log('fee: ', monthlyFee)
  })

  .catch(error => {
    console.log('Error getting document:', error);
  });
    },[])
  )


  useFocusEffect(
    useCallback(()=>{
      firebase
  .firestore()
  .collection('users')
  .doc(firebase.auth().currentUser.uid)
  .collection('MonthlyPayment')
  .get()
  .then(collection => {
    let Monthly_Payment_Deadline = collection.docs.map(doc => {
      const deadline = doc.data().deadline
      return {deadline}
    });
    setMonthlyDeadline(Monthly_Payment_Deadline)
    console.log('deadline: ', monthlyDeadline)
  })

  .catch(error => {
    console.log('Error getting document:', error);
  });
    },[])
  )

  // console.log(monthlyName)
  console.log(monthlyFee)
  console.log(monthlyDeadline)
  // useFocusEffect(
  //   useCallback(() => {
  //     firebase
  //       .firestore()
  //       .collection('users')
  //       .doc(firebase.auth().currentUser.uid)
  //       .collection('MonthlyPayment')
  //       .get()
  //       .then(collection => {
  //         const name = [];
  //         const fee = [];
  //         const deadline = [];
  //         const m_ID = []
  //         const dataArr = [];
  //         const idArr = [];
  //         // let ayam = collection.docs.map(doc => {
  //         //   // dataArr.push(doc.data())
  //         //   // idArr.push(doc.id)

  //         //   const chicken = doc.data()

  //         //   const name = doc.data().paymentName
  //         //   const fee = doc.data().fee
  //         //   const deadline = doc.data().deadline

  //         //   // console.log(doc.id, ' => ', doc.data())

  //         //   // return {id, ...data};

  //         //   return {name, fee, deadline}
  //         // });
  //         // // setData(dataArr);
  //         // // setId(idArr)

  //         // setMonthlyID(ayam);

  //         // console.log(monthlyID)

  //         // console.log("This one: ", data)
  //         // console.log('ini data: ', monthlyID)

  //         collection.forEach(doc => {
  //           name.push(doc.data().paymentName);
  //           fee.push(doc.data().fee);
  //           deadline.push(doc.data().deadline);
  //           m_ID.push(doc.id);
  //           // console.log('woi', doc.id);
  //         });

  //         setMonthlyName(name);
  //         setMonthlyFee(fee);
  //         setMonthlyDeadline(deadline);

  //         // setMonthlyID(m_ID)
  //         // console.log(m_ID)
  //         // console.log(monthlyFee)
  //       })

  //       .catch(error => {
  //         console.log('Error getting document:', error);
  //       });
  //   }, []),
  // );

  return (
    <View style={{flex: 1}}>
      <HeaderBack navigation={navigation} title="Monthly Payment" />
      <ScrollView>
        {/* <Text>{monthlyName}</Text> */}
        {/* <Text>{monthlyFee}</Text>
        <Text>{monthlyDeadline}</Text> */}

        <MonthlyPaymentItem
          // data={monthlyID}
          // namee={monthlyName}
          // namee={monthlyName}
          // fee={monthlyFee}
          // deadline={monthlyDeadline}
        />
        <Text>{monthlyID.paymentName}</Text>
        {monthlyList.results.map((Monthly, index) => (
          <MonthlyPaymentItem
            key={index}
            Monthly={Monthly}
            editMonthly={editMonthly}
            deleteMonthly={deleteMonthly}
            setStateNeed={setStateNeed}
            navigation={navigation}
          />
        ))}

        <View style={styles.addNew}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('MonthlyAddEdit', {
                getMonthly: {
                  id: 0,
                  title: '',
                  budget: '',
                  deadline: '',
                },
                Header: 'Add New Monthly Payment',
                FormAction: addMonthly,
                TitleBtn: 'Add',
              });
            }}>
            <Add1Icon />
          </TouchableOpacity>
          <Text style={styles.miniFont}>add new Monthly Payment</Text>
          <View style={styles.announcement}>
            <Text style={styles.miniFont2}>
              will be refresh every day-30 of the month
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default MonthlyPayment;

const WindowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  addNew: {
    alignItems: 'center',
    marginTop: 20,
  },
  miniFont: {
    fontFamily: BOLD_FONT,
    fontSize: 12,
    color: TITLE_COLOR,
  },
  miniFont2: {
    fontFamily: BOLD_FONT,
    fontSize: 15,
    color: TITLE_COLOR,
    paddingBottom: WindowWidth * 0.1,
  },
  announcement: {
    margin: 8,
  },
});
