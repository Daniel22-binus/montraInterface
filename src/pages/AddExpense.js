import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import HeaderBack from '../components/HeaderBack';
import {BOLD_FONT, PRIMARY_COLOR, TITLE_COLOR} from '../constant';
import DatePickerModal from '../components/DatePickerModal';
import printDate from '../logic/printDate';

const AddExpense = ({navigation}) => {
  const [selectedCategory, setSelectedCategory] = useState();
  const [date, setDate] = useState(new Date());
  const [newExpense, setNewExpense] = useState({
    id: 0,
    budgetId: 0,
    expensesDescription: '',
    date: new Date(),
    amount: 0,
  });

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <HeaderBack navigation={navigation} title={'Add Expense'} />
      <View style={form.container}>
        <Text style={styles.title}>Add Expense</Text>
        <View style={form.containerInput}>
          <Text style={form.inputLabel}>Date</Text>
          <View style={form.containerInputBorderBottom}>
            <TextInput
              style={form.inputDate}
              value={printDate(date)}
              editable={false}
            />
            <DatePickerModal
              style={form.modalDate}
              getDate={date}
              getSetDate={setDate}
            />
          </View>
        </View>
        <View style={form.containerInput}>
          <Text style={form.inputLabel}>Category</Text>
          <Picker
            selectedValue={selectedCategory}
            onValueChange={(itemValue, itemIndex) => {
              setSelectedCategory(itemValue);
            }}
            dropdownIconColor={TITLE_COLOR}
            style={selectionBox.pickerContainer}
            itemStyle={selectionBox.pickerItem}>
            <Picker.Item label="Konsumsi" value={1} />
            <Picker.Item label="Edukasi" value={2} />
            <Picker.Item label="Lain - lain" value={3} />
          </Picker>
        </View>
        <View style={form.containerInput}>
          <Text style={form.inputLabel}>Amount</Text>
          <TextInput style={form.inputText} keyboardType="numeric" />
        </View>
        <View style={form.containerInput}>
          <Text style={form.inputLabel}>Note</Text>
          <TextInput
            style={form.inputBox}
            multiline
            numberOfLines={4}
            editable
            maxLength={40}
          />
        </View>
        <View style={{alignItems: 'flex-end', marginTop: 15}}>
          <TouchableOpacity style={styles.btnContainer}>
            <Text style={styles.btnText}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AddExpense;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  title: {
    fontFamily: BOLD_FONT,
    fontSize: 30,
    color: TITLE_COLOR,
  },
  btnContainer: {
    backgroundColor: PRIMARY_COLOR,
    width: 120,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  btnText: {
    color: 'white',
    fontSize: 20,
    fontFamily: BOLD_FONT,
  },
});

const selectionBox = StyleSheet.create({
  pickerContainer: {
    width: 235,
  },
  pickerItem: {
    backgroundColor: 'red',
  },
});

const form = StyleSheet.create({
  container: {
    marginHorizontal: windowWidth * 0.06,
  },
  containerInput: {
    flexDirection: 'row',
    marginVertical: windowHeight * 0.01,
  },
  containerInputBorderBottom: {
    flexDirection: 'row',
    marginVertical: windowHeight * 0.01,
    borderBottomWidth: 1,
    borderColor: TITLE_COLOR,
  },
  inputLabel: {
    fontSize: 17,
    fontFamily: PRIMARY_COLOR,
    color: TITLE_COLOR,
    marginTop: 12,
    width: 100,
  },
  inputText: {
    borderBottomWidth: 1,
    width: 235,
    borderColor: TITLE_COLOR,
    color: TITLE_COLOR,
    height: 40,
  },
  inputDate: {
    width: 210,
    color: TITLE_COLOR,
    height: 40,
  },
  modalDate: {
    marginTop: 10,
    marginLeft: 0,
    marginRight: 10,
  },
  inputBox: {
    borderWidth: 1,
    width: 235,
    borderColor: TITLE_COLOR,
    color: TITLE_COLOR,
  },
  btnAddNeeds: {
    paddingVertical: windowHeight * 0.02,
  },
});
