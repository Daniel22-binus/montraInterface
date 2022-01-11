import React, {useCallback} from 'react';
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
import newExpenseHook from '../hooks/ExpenseHook/newExpenseHook';
import budgetHook from '../hooks/budgetHook';
import {useFocusEffect} from '@react-navigation/native';
import {objectToList} from '../logic/firebaseFunction';
import expenseHook from '../hooks/ExpenseHook/expenseHook';

const AddExpense = ({navigation}) => {
  const [
    newExpense,
    inputBudgetIdField,
    inputDescriptionField,
    inputDateField,
    inputAmountField,
  ] = newExpenseHook();

  const [budgetList, getBudget, addBudget, editBudget, deleteBudget] =
    budgetHook();
  const [expenseList, getExpense, AddNewExpense] = expenseHook();

  useFocusEffect(
    useCallback(() => {
      getBudget(new Date());
      getExpense(new Date());
    }, []),
  );

  const addBudgetUse = () => {
    let budgetId = newExpense.budgetId;
    let addAmount = newExpense.amount;
    objectToList(budgetList.results).map(BudgetVal => {
      let temp = budgetList.results[BudgetVal];
      if (temp.id == budgetId) {
        let amount = 0;
        if (temp.budgetUse == '') {
          amount = 0;
        } else {
          amount = parseInt(temp.budgetUse);
        }
        amount += addAmount;
        temp.budgetUse = amount.toString();
        let BudgetFirebase = {
          keyFirebase: BudgetVal,
          Budget: temp,
        };
        editBudget(BudgetFirebase);
        return;
      }
    });
  };

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
              value={printDate(newExpense.date)}
              editable={false}
            />
            <DatePickerModal
              style={form.modalDate}
              getDate={newExpense.date}
              getSetDate={inputDateField}
            />
          </View>
        </View>
        <View style={form.containerInput}>
          <Text style={form.inputLabel}>Category</Text>
          <View style={{borderBottomWidth: 1, borderColor: TITLE_COLOR}}>
            <Picker
              selectedValue={newExpense.budgetId}
              onValueChange={(itemValue, itemIndex) => {
                if (itemValue != -1) inputBudgetIdField(itemValue);
              }}
              dropdownIconColor={TITLE_COLOR}
              style={selectionBox.pickerContainer}
              itemStyle={selectionBox.pickerItem}>
              <Picker.Item label="Select Budget" value={-1} />

              {objectToList(budgetList.results).map(Budget => (
                <Picker.Item
                  key={Budget}
                  label={budgetList.results[Budget].budgetCategory}
                  value={budgetList.results[Budget].id}
                />
              ))}
            </Picker>
          </View>
        </View>
        <View style={form.containerInput}>
          <Text style={form.inputLabel}>Amount</Text>
          <TextInput
            style={form.inputText}
            keyboardType="numeric"
            onChangeText={text => {
              inputAmountField(text);
            }}
          />
        </View>
        <View style={form.containerInput}>
          <Text style={form.inputLabel}>Note</Text>
          <TextInput
            style={form.inputBox}
            multiline
            numberOfLines={4}
            editable
            maxLength={40}
            onChangeText={text => {
              inputDescriptionField(text);
            }}
          />
        </View>
        <View style={{alignItems: 'flex-end', marginTop: 15}}>
          <TouchableOpacity
            style={styles.btnContainer}
            onPress={() => {
              let flag = AddNewExpense(newExpense);
              if (flag == true) {
                addBudgetUse();
                navigation.goBack();
              }
            }}>
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
