import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {HomeHeader} from './HomeAll';
import {ProgressCircle} from 'react-native-svg-charts';
import {BOLD_FONT, PRIMARY_COLOR, PRIMARY_FONT} from '../../constant';
import expenseHook from '../../hooks/expenseHook';
import HistoryItem from '../../components/HistoryItem';

const HomeAnother = ({navigation}) => {
  const [historyList] = expenseHook();
  let tempHist = historyList.filter(data => {
    return data.budgetId == 1;
  });
  let historyListShort = [];

  if (tempHist.length > 3) {
    let length = tempHist.length;
    historyListShort = tempHist.slice(length - 3, 3);
  } else {
    historyListShort = tempHist;
  }

  return (
    <View>
      <HomeHeader navigation={navigation} />
      <ProgressCircle
        style={circleStyle.circle}
        progress={0.7}
        progressColor={'rgb(134, 65, 244)'}>
        <View style={circleStyle.containerText}>
          <Text style={circleStyle.textTitle}>70%</Text>
        </View>
      </ProgressCircle>
      <View>
        <Text style={styles.textTitle}>Expenses</Text>
        {historyListShort.reverse().map(history => (
          <HistoryItem
            key={history.id}
            title={history.expensesDescription}
            date={history.date}
            rp={history.amount}
          />
        ))}
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('History Transaction');
          }}>
          <View>
            <Text style={styles.textDetails}>see details.</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeAnother;

const styles = StyleSheet.create({
  textTitle: {
    color: PRIMARY_COLOR,
    fontSize: 22,
    marginLeft: 12,
    marginVertical: 3,
    fontFamily: BOLD_FONT,
  },
  textDetails: {
    color: PRIMARY_COLOR,
    textDecorationLine: 'underline',
    textAlign: 'center',
    marginTop: 12,
    fontFamily: PRIMARY_FONT,
  },
});
const circleStyle = StyleSheet.create({
  circle: {
    height: 200,
  },
  containerText: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textTitle: {
    fontFamily: BOLD_FONT,
    fontSize: 27,
  },
});
