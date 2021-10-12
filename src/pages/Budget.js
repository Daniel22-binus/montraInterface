import React, {useCallback, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import HeaderBack from '../components/HeaderBack';
import MonthPicker from 'react-native-month-year-picker';
import {format} from 'date-fns';
import {
  BOLD_FONT,
  GRAY_COLOR,
  PRIMARY_FONT,
  TITLE_COLOR,
} from '../constant/index';
import {ArrowDownIcon} from '../assets/icons';

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
    </View>
  );
};

export default Budget;

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
    flexDirection: 'row',
    backgroundColor: GRAY_COLOR,
    elevation: 6,
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
});
