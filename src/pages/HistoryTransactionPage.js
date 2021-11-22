import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import HeaderBack from '../components/HeaderBack';
import HistoryItem from '../components/HistoryItem';
import expenseHook from '../hooks/expenseHook';

const HistoryTransactionPage = ({navigation}) => {
  const [historyList] = expenseHook();

  return (
    <View style={styles.whiteBg}>
      <HeaderBack navigation={navigation} title="History Transaction" />

      {/* <Text>filter</Text> */}

      <ScrollView>
        {historyList.reverse().map(history => {
          return (
            <HistoryItem
              key={history.id}
              title={history.expensesDescription}
              date={history.date}
              rp={history.amount}
            />
          );
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
