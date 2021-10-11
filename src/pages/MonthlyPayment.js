import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {Add1Icon, BackIcon} from '../assets';
import MonthlyPaymentItem from '../components/MonthlyPaymentItem';
import {BOLD_FONT, TITLE_COLOR} from '../constant';

const MonthlyPayment = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <View style={styles.upperNav}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <BackIcon style={styles.backIcon} />
        </TouchableOpacity>

        <View style={styles.monthlyPayment}>
          <Text style={styles.font}>Monthly Payment</Text>
        </View>
      </View>

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
          <TouchableOpacity>
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
  upperNav: {
    flexDirection: 'row',
    margin: 20,
  },
  backIcon: {
    marginTop: 4,
    color: TITLE_COLOR,
  },
  monthlyPayment: {
    marginLeft: 10,
  },
  font: {
    fontFamily: BOLD_FONT,
    fontSize: 18,
    color: TITLE_COLOR,
  },
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
    paddingBottom: WindowWidth*0.1,
  },
  announcement: {
    margin: 8,
  },
});
