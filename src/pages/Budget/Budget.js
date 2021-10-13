import React, {useCallback, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import HeaderBack from '../../components/HeaderBack';
import MonthPicker from 'react-native-month-year-picker';
import {format} from 'date-fns';
import {
  BOLD_FONT,
  GRAY_COLOR,
  PRIMARY_FONT,
  TITLE_COLOR,
  SECONDARY_COLOR,
  BACKGROUND_COLOR,
} from '../../constant/index';
import {ArrowDownIcon, Add1Icon} from '../../assets/icons';
import BudgetItem from '../../components/BudgetComponent/BudgetItem';
import {ScrollView} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

const Budget = ({navigation}) => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const showPicker = useCallback(value => setShow(value), []);

  const onValueChange = useCallback(
    (event, newDate) => {
      const selectedDate = newDate || date;

      showPicker(false);
      setDate(selectedDate);
    },
    [date, showPicker],
  );

  return (
    <View style={{flex: 1}}>
      <HeaderBack navigation={navigation} title="Budget" />
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.fontMonth}> Month: </Text>

        <View style={styles.monthPickerBorder}>
          <Text style={styles.fontMonthPicker}>
            {format(date, 'MMMM yyyy')}
          </Text>
          <TouchableOpacity onPress={() => showPicker(true)}>
            <ArrowDownIcon style={styles.fontIcon} />
          </TouchableOpacity>
          {show && <MonthPicker onChange={onValueChange} value={date} />}
        </View>
      </View>

      <ScrollView style={styles.container}>
        <LinearGradient
          style={styles.linear}
          colors={[SECONDARY_COLOR, BACKGROUND_COLOR]}
          start={{x: 1, y: 0}}
          end={{x: 0, y: 1}}>
          <Text style={styles.title}> Total Budget</Text>
          <Text style={styles.TotBudget}>Rp. 17.000.000</Text>
          {/* tempat bar */}
          <Text style={{color: 'red', fontSize: 20, fontStyle: "bold"}}>
            ini tempat bar
          </Text>
          <Text style={styles.TotBudgetUse}>Rp. 10.300.000</Text>
        </LinearGradient>

        <View
          style={{
            paddingTop: 15,
            marginBottom: 5,
            borderBottomWidth: 2,
            borderBottomColor: TITLE_COLOR,
          }}>
          <Text style={[styles.title, {fontWeight: 'bold', fontSize: 18}]}>
            Category Budget
          </Text>
        </View>

        <BudgetItem
          title="Education"
          budget="Rp. 10.000.000"
          budgetUse="5.500.000"
        />
        <BudgetItem
          title="Food and Beverage"
          budget="Rp. 5.000.000"
          budgetUse="4.600.000"
        />
        <BudgetItem
          title="Transportation"
          budget="Rp. 1.000.000"
          budgetUse="50.000"
        />

        <View style={styles.addNew}>
          <TouchableOpacity
            onPress={() => navigation.navigate('MonthlyPaymentAdd')}>
            <Add1Icon />
          </TouchableOpacity>
          <Text style={styles.miniFont}>add new Monthly Payment</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Budget;

const WindowHeight = Dimensions.get('window').height;
const WindowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  fontMonth: {
    fontFamily: BOLD_FONT,
    fontSize: 20,
    color: TITLE_COLOR,
    marginLeft: WindowWidth * 0.045,
    marginRight: WindowWidth * 0.015,
  },

  monthPickerBorder: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: GRAY_COLOR,
    elevation: 6,
    width: 170,
    height: 28,
    marginBottom: 8,

    // shadowColor: '#470000',
    // shadowOffset: {width: 0, height: 1},
    // shadowOpacity: 0.2,
    // elevation: 1,

    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,

    // elevation: 5,

    // shadowColor: 'black',
    // shadowOffset: {width: 0, height: 10},
    // shadowOpacity: 0.5,
    // elevation: 1

    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 4.84,

    // elevation: 5,

    // borderWidth: 2,
    // borderRadius: 0,
    // borderColor: GRAY_COLOR,
    // // borderTopWidth: 0,
    // // borderLeftWidth:0,
    // // borderRightWidth: 0,
    // // borderBottomWidth:0,

    // borderTopWidth: 1,
    // borderLeftWidth:1,
    // borderRightWidth: 1,
    // shadowColor: 'black',
    // shadowOffset: { width: 0, height: 2 },
    // // shadowOpacity: 0.5,
    // shadowRadius: 5,
    // // elevation: 16,

    overflow: 'hidden',

    // shadowColor: '#000',
    // // shadowColor: 'black',
    // shadowOffset: { width: 170, height: 50 },
    // shadowOpacity:  0.4,
    // shadowRadius: 3,
    // elevation: 5,

    // borderTopWidth: 1.5,
    // borderLeftWidth: 1.5,
    // borderColor: '#DBD5D8',
  },

  fontMonthPicker: {
    fontFamily: PRIMARY_FONT,
    fontSize: 15,
    color: TITLE_COLOR,
    textAlignVertical: 'center',
    marginLeft: WindowWidth * 0.02,
    marginRight: WindowWidth * 0.05,
  },

  fontIcon: {
    marginTop: WindowWidth * 0.01,
    marginRight: WindowWidth * 0.02,
  },

  container: {
    paddingVertical: WindowHeight * 0.015,
    paddingHorizontal: WindowWidth * 0.06,
    // alignItems: 'center',
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

  title: {
    fontFamily: PRIMARY_FONT,
    color: TITLE_COLOR,
    fontSize: 15,
    fontStyle: "italic",
  },

  TotBudget: {
    fontFamily: BOLD_FONT,
    color: TITLE_COLOR,
    fontSize: 18,
    textAlign: 'left',
    marginLeft: WindowWidth * 0.08,
  },

  TotBudgetUse: {
    fontFamily: BOLD_FONT,
    color: TITLE_COLOR,
    fontSize: 15,
  },
  
  addNew: {
    alignItems: 'center',
    marginTop: 20,
  },

  miniFont: {
    fontFamily: BOLD_FONT,
    fontSize: 12,
    color: TITLE_COLOR,
    paddingTop: 5,
    paddingBottom: 30,
  },

  announcement: {
    margin: 8,
  },
});
