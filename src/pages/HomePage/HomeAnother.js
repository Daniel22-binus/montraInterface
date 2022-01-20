import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {HomeHeader} from './HomeAll';
import {ProgressCircle} from 'react-native-svg-charts';
import {BOLD_FONT, PRIMARY_COLOR, PRIMARY_FONT} from '../../constant';
import HistoryItem from '../../components/HistoryItem';

const HomeAnother = ({navigation, budget, historyList}) => {
  const sisa = budget.budgetLimit - budget.budgetUse;
  const persen = budget.budgetUse / budget.budgetLimit;

  const checkColor = () => {
    if (persen > 0.8) {
      return 'rgb(220, 0, 0)';
    }

    return 'rgb(134, 65, 244)';
  };

  let flag = 0;

  const persentase = () => {
    let result = parseInt(persen * 100);

    return result + '%';
  };

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <HomeHeader navigation={navigation} sisa={sisa} />
      <ProgressCircle
        style={circleStyle.circle}
        progress={persen}
        progressColor={checkColor()}>
        <View style={circleStyle.containerText}>
          <Text style={circleStyle.textTitle}>{persentase()}</Text>
        </View>
      </ProgressCircle>
      <View>
        <Text style={styles.textTitle}>Expenses</Text>
        {historyList.reverse().map(history => {
          if (history.budgetId == budget.id && flag < 3) {
            flag += 1;
            return (
              <HistoryItem
                key={history.id}
                title={history.expensesDescription}
                date={history.date}
                rp={history.amount}
              />
            );
          }
        })}
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
