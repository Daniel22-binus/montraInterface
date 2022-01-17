import React, {useCallback, useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import MonthPicker from 'react-native-month-year-picker';
import {ArrowDownIcon} from '../../assets';
import {BOLD_FONT, GRAY_COLOR, PRIMARY_FONT, TITLE_COLOR} from '../../constant';
import {format} from 'date-fns';

const MonthPick = ({date, setDate, getBudget, secondGet}) => {
  const [show, setShow] = useState(false);

  const showPicker = useCallback(value => setShow(value), []);

  const onValueChange = useCallback(
    (event, newDate) => {
      const selectedDate = newDate || date;

      showPicker(false);
      setDate(selectedDate);

      if (getBudget) {
        getBudget(selectedDate);
        if (secondGet) {
          secondGet(selectedDate);
        }
      }
    },
    [date, showPicker],
  );

  return (
    <View style={{flexDirection: 'row'}}>
      <Text style={styles.fontMonth}> Month: </Text>

      <View style={styles.monthPickerBorder}>
        <Text style={styles.fontMonthPicker}>{format(date, 'MMMM yyyy')}</Text>
        <TouchableOpacity onPress={() => showPicker(true)}>
          <ArrowDownIcon style={styles.fontIcon} />
        </TouchableOpacity>
        {show && <MonthPicker onChange={onValueChange} value={date} />}
      </View>
    </View>
  );
};

export default MonthPick;

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
    width: 170,
    height: 28,
    marginBottom: 8,
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
