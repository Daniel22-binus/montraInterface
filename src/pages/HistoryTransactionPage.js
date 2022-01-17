import React, {useState, useCallback} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import HeaderBack from '../components/HeaderBack';
import HistoryItem from '../components/HistoryItem';
import expenseHook from '../hooks/ExpenseHook/expenseHook';
import {useFocusEffect} from '@react-navigation/native';
import {objectToList} from '../logic/firebaseFunction';
import MonthPick from '../components/BudgetComponent/MonthPick';
import budgetHook from '../hooks/budgetHook';
import {Picker} from '@react-native-picker/picker';
import {TITLE_COLOR} from '../constant';

const HistoryTransactionPage = ({navigation}) => {
  const [expenseList, getExpense] = expenseHook();
  const [budgetList, getBudget] = budgetHook();
  const [date, setDate] = useState(new Date());
  const [pick, setPick] = useState(-1);

  useFocusEffect(
    useCallback(() => {
      getExpense(date);
      getBudget(date);
    }, []),
  );

  return (
    <View style={styles.whiteBg}>
      <HeaderBack navigation={navigation} title="History Transaction" />
      <MonthPick
        date={date}
        setDate={setDate}
        getBudget={getExpense}
        secondGet={getBudget}
      />

      <Picker
        selectedValue={pick}
        onValueChange={(itemValue, itemIndex) => {
          setPick(itemValue);
        }}
        dropdownIconColor={TITLE_COLOR}
        style={selectionBox.pickerContainer}
        itemStyle={selectionBox.pickerItem}>
        <Picker.Item label="All Budget" value={-1} />

        {objectToList(budgetList.results).map(Budget => (
          <Picker.Item
            key={Budget}
            label={budgetList.results[Budget].budgetCategory}
            value={budgetList.results[Budget].id}
          />
        ))}
      </Picker>

      <ScrollView>
        {objectToList(expenseList.results)
          // .filter((expense) => {expenseList.results[expense].budgetId == pick })
          .reverse()
          .map(expense => {
            if (pick == -1 || expenseList.results[expense].budgetId == pick) {
              return (
                <HistoryItem
                  key={expense}
                  title={expenseList.results[expense].expensesDescription}
                  date={expenseList.results[expense].date}
                  rp={expenseList.results[expense].amount}
                />
              );
            }
          })}
      </ScrollView>
    </View>
  );
};

export default HistoryTransactionPage;

const styles = StyleSheet.create({
  whiteBg: {
    flex: 1,
    backgroundColor: 'white',
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
