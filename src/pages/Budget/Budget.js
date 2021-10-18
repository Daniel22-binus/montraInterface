import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import HeaderBack from '../../components/HeaderBack';
import {
  BOLD_FONT,
  PRIMARY_FONT,
  TITLE_COLOR,
} from '../../constant/index';
import {Add1Icon} from '../../assets/icons';
import BudgetItem from '../../components/BudgetComponent/BudgetItem';
import {ScrollView} from 'react-native-gesture-handler';
import MonthPick from '../../components/BudgetComponent/MonthPick';
import TotalBudget from '../../components/BudgetComponent/TotalBudget';

const Budget = ({navigation}) => {

  return (
    <View style={{flex: 1}}>
      <HeaderBack navigation={navigation} title="Budget" />
      <MonthPick />
      <View style={styles.container}>
        <TotalBudget totalBudget="17000000" currentUse="10300000" />

        <View
          style={{
            paddingTop: 15,
            marginBottom: 5,
            borderBottomWidth: 2,
            borderBottomColor: TITLE_COLOR,
          }}>
          <Text
            style={[
              styles.title,
              {fontWeight: 'bold', fontSize: 18, marginBottom: 3},
            ]}>
            Category Budget
          </Text>
        </View>

        <ScrollView>
          <BudgetItem title="Education" budget="10000000" budgetUse="5500000" />
          <BudgetItem
            title="Food and Beverage"
            budget="5000000"
            budgetUse="2500000"
          />
          <BudgetItem
            title="Transportation"
            budget="1000000"
            budgetUse="50000"
          />

          <View style={styles.addNew}>
            <TouchableOpacity
              onPress={() => navigation.navigate('MonthlyPaymentAdd')}>
              <Add1Icon />
            </TouchableOpacity>
            <Text style={styles.miniFont}>add new Monthly Payment</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Budget;

const WindowHeight = Dimensions.get('window').height;
const WindowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    paddingVertical: WindowHeight * 0.015,
    paddingHorizontal: WindowWidth * 0.06,
    flex: 1,
  },

  title: {
    fontFamily: PRIMARY_FONT,
    color: TITLE_COLOR,
    fontSize: 15,
    fontStyle: 'italic',
  },

  barFont: {
    marginVertical: 6,
  },
  addNew: {
    alignItems: 'center',
    marginTop: 20,
  },

  miniFont: {
    fontFamily: BOLD_FONT,
    fontSize: 12,
    color: TITLE_COLOR,
    paddingTop: 5,
    paddingBottom: 30,
  },

  announcement: {
    margin: 8,
  },
});
