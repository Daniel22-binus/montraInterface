import React, { useCallback } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Add1Icon } from '../../assets';
import MonthlyPaymentItem from '../../components/MonthlyPaymentItem';
import { BOLD_FONT, TITLE_COLOR } from '../../constant';
import HeaderBack from '../../components/HeaderBack';
import monthlyHook from '../../hooks/monthlyHook';
import { useFocusEffect } from '@react-navigation/native';
import { objectToList } from '../../logic/firebaseFunction';

const MonthlyPayment = ({ navigation }) => {
  const [monthlyList, getMonthly, addMonthly, editMonthly, deleteMonthly, setState] =
    monthlyHook();

  useFocusEffect(
    useCallback(() => {
      getMonthly();
    }, [])
  );

  console.log(monthlyList);

  return (
    <View style={{ flex: 1 }}>
      <HeaderBack navigation={navigation} title="Monthly Payment" />
      <ScrollView>
        {objectToList(monthlyList.results).map(Monthly => (
          <MonthlyPaymentItem
            key={monthlyList.results[Monthly].id}
            monthlyList={monthlyList.results}
            Monthly={Monthly}
            editMonthly={editMonthly}
            deleteMonthly={deleteMonthly}
            setState={setState}
            navigation={navigation}
          />
        ))}

        <View style={styles.addNew}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('MonthlyAddEdit', {
                getMonthly: {
                  id:0,
                  paymentName: '',
                  paymentFee: '',
                  paymentDeadline: '',
                  paymentState:false,
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