import React, {useCallback} from 'react';
import {Dimensions, StyleSheet, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  BACKGROUND_COLOR,
  BOLD_FONT,
  PRIMARY_FONT,
  SECONDARY_COLOR,
  TITLE_COLOR,
} from '../../constant';
import {PrintPrice} from '../../logic/printPrice';
import ProgressBar from './ProgressBar';
import {objectToList} from '../../logic/firebaseFunction';

const TotalBudget = ({budgetList}) => {
  let JumlahBudget = 1;
  let currentBudget = 0;

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
  // JumlahBudget -= 1
}
hitung()
console.log('======================')
console.log(JumlahBudget.toString())

  return (
    <LinearGradient
      style={styles.linear}
      colors={[SECONDARY_COLOR, BACKGROUND_COLOR]}
      start={{x: 1, y: 0}}
      end={{x: 0, y: 1}}>
      <Text style={styles.title}> Total Budget</Text>
      <Text style={styles.TotBudget}>{PrintPrice(JumlahBudget-1)}</Text>

      <ProgressBar current={currentBudget} total={JumlahBudget}/>
      <Text style={styles.TotBudgetUse}>{PrintPrice(currentBudget)}</Text>
    </LinearGradient>
  );
};

export default TotalBudget;

const WindowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  linear: {
    width: WindowWidth * 0.88,
    height: 130,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 15,
  },
  title: {
    fontFamily: PRIMARY_FONT,
    color: TITLE_COLOR,
    fontSize: 15,
    fontStyle: 'italic',
  },

  TotBudget: {
    fontFamily: BOLD_FONT,
    color: TITLE_COLOR,
    fontSize: 18,
    textAlign: 'left',
    marginLeft: WindowWidth * 0.08,
    marginBottom: 5,
  },

  TotBudgetUse: {
    fontFamily: BOLD_FONT,
    color: TITLE_COLOR,
    fontSize: 15,
  },
});
