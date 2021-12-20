import React, {useState} from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {Add1Icon} from '../../assets';
import MonthlyPaymentItem from '../../components/MonthlyPaymentItem';
import {BOLD_FONT, TITLE_COLOR} from '../../constant';
import HeaderBack from '../../components/HeaderBack';
import monthlyHook from '../../hooks/monthlyHook';

const MonthlyPayment = ({navigation}) => {
  const [monthlyList, addMonthly, editMonthly, deleteMonthly, setStateNeed] =
    monthlyHook();

  return (
    <View style={{flex: 1}}>
      <HeaderBack navigation={navigation} title="Monthly Payment" />
      <ScrollView>
        {monthlyList.results.map((Monthly,index) => (
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
            onPress={() => { navigation.navigate('MonthlyAddEdit',{
              getMonthly:{
                id:0,
                title:'',
                budget:'',
                deadline:''
              },
              Header:'Add New Monthly Payment',
              FormAction:addMonthly,
              TitleBtn:'Add'
            })}}>
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
