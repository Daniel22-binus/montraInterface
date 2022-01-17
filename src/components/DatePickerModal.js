import React, {useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {CalendarIcon} from '../assets/icons';

const DatePickerModal = ({getDate, getSetDate, style}) => {
  const [open, setOpen] = useState(false);

  return (
    <View style={style}>
      <TouchableOpacity
        onPress={() => {
          setOpen(true);
        }}>
        <CalendarIcon />
      </TouchableOpacity>
      <DatePicker
        modal
        open={open}
        date={getDate}
        mode="date"
        onConfirm={newDate => {
          setOpen(false);
          getSetDate(newDate);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </View>
  );
};

export default DatePickerModal;
