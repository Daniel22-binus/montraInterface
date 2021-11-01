import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {Add1Icon} from '../../assets';
import MonthlyPaymentItem from '../../components/MonthlyPaymentItem';
import {BOLD_FONT, TITLE_COLOR} from '../../constant';
import HeaderBack from '../../components/HeaderBack';

const MonthlyPayment = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <HeaderBack navigation={navigation} title="Monthly Payment" />
      <ScrollView>
        <MonthlyPaymentItem
          title="PLN’s Fee"
          budget="Rp. 1.000.000"
          deadline="deadline : 5th of the month"
        />
        <MonthlyPaymentItem
          title="Wifi’s Fee"
          budget="Rp. 400.000"
          deadline="deadline : 15th of the month"
        />
        <MonthlyPaymentItem
          title="School's Fee"
          budget="Rp. 600.000"
          deadline="deadline : 3rd of the month"
        />
        <MonthlyPaymentItem
          title="Tuition's Fee"
          budget="Rp. 500.000"
          deadline="deadline : 4th of the month"
        />

        <View style={styles.addNew}>
          <TouchableOpacity
            onPress={() => navigation.navigate('MonthlyPaymentAdd')}>
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
