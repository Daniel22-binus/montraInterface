import React, {useCallback} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {HomeHeader} from './HomeAll';
import {ProgressCircle} from 'react-native-svg-charts';
import {BOLD_FONT, PRIMARY_COLOR, PRIMARY_FONT} from '../../constant';
import HistoryItem from '../../components/HistoryItem';
import {useFocusEffect} from '@react-navigation/native';
import expenseHook from '../../hooks/ExpenseHook/expenseHook';
import {objectToList} from '../../logic/firebaseFunction';
import Header from '../../components/Header';
import budgetHook from '../../hooks/budgetHook';

const HomeTemp = ({navigation}) => {
  const [expenseList, getExpense] = expenseHook();
  const [budgetList, getBudget] = budgetHook();

  let JumlahBudget = 1;
  let currentBudget = 0;

  useFocusEffect(
    useCallback(() => {
      getExpense(new Date());
      getBudget(new Date());
    }, []),
  );

  const hitung = () => {
    objectToList(budgetList.results).map(need => {
      let temp = budgetList.results[need].budgetLimit;
      JumlahBudget = JumlahBudget + parseInt(temp, 10);
      if (budgetList.results[need].budgetUse == '') {
        currentBudget += 0;
      } else {
        let temp2 = budgetList.results[need].budgetUse;
        currentBudget = currentBudget + parseInt(temp2, 10);
      }
    });
    JumlahBudget -= 1;
  };
  hitung();

  const checkColor = persen => {
    if (persen > 0.8) {
      return 'rgb(220, 0, 0)';
    }

    return 'rgb(134, 65, 244)';
  };

  let flag = 0;

  const persentase = () => {
    if (currentBudget == 0) return '0%';

    let persen = currentBudget / JumlahBudget;
    let result = parseInt(persen * 100);

    return result + '%';
  };

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <Header navigation={navigation} />
      <HomeHeader navigation={navigation} sisa={JumlahBudget - currentBudget} />
      <ProgressCircle
        style={circleStyle.circle}
        progress={currentBudget / JumlahBudget}
        progressColor={checkColor(currentBudget / JumlahBudget)}>
        <View style={circleStyle.containerText}>
          <Text style={circleStyle.textTitle}>{persentase()}</Text>
        </View>
      </ProgressCircle>
      <View>
        <Text style={styles.textTitle}>Expenses</Text>
        {objectToList(expenseList.results)
          .reverse()
          .map(expense => {
            if (flag < 3) {
              flag += 1;
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

export default HomeTemp;

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
