import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import PieChartReact from '../../components/HomeComponent/PieChartReact';
import HistoryItem from '../../components/HistoryItem';
import {AddIcon} from '../../assets/icons';
import {BOLD_FONT, PRIMARY_COLOR, PRIMARY_FONT} from '../../constant';
import expenseHook from '../../hooks/expenseHook';
import {PrintPrice} from '../../logic/printPrice';

const HomeHeader = ({navigation, sisa}) => {
  return (
    <View style={{flexDirection: 'row', marginLeft: 10, marginVertical: 12}}>
      <View style={textTop.budgetContainer}>
        <Text style={textTop.budget}>your budget left:</Text>
        <Text style={textTop.rp}>{PrintPrice(sisa)}</Text>
      </View>
      <View style={textTop.textcontainer}>
        <TouchableOpacity
          style={{flexDirection: 'row'}}
          onPress={() => {
            navigation.navigate('AddExpense');
          }}>
          <Text style={textTop.textexpense}>Add Expense</Text>
          <AddIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const HomeAll = ({navigation}) => {
  const [historyList] = expenseHook();
  let historyListShort = [];

  if (historyList.length > 3) {
    let length = historyList.length;
    historyListShort = historyList.slice(length - 3, length);
  } else {
    historyListShort = [...historyList];
  }

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <HomeHeader navigation={navigation} sisa={1261000} />
      <PieChartReact />

      <View>
        <View style={stylePie.superContainer}>
          <View style={stylePie.container}>
            <View style={colorPie('#c61aff')} />
            <Text> Konsumsi</Text>
          </View>
          <View style={stylePie.container}>
            <View style={colorPie('#0f420a')} />
            <Text> Edukasi</Text>
          </View>
          <View style={stylePie.container}>
            <View style={colorPie('#7cd9b4')} />
            <Text> Transport</Text>
          </View>
        </View>
        <Text style={styles.textTitle}>Expenses</Text>

        <ScrollView>
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
        </ScrollView>
      </View>
    </View>
  );
};

export default HomeAll;
export {HomeHeader};

const windowWidth = Dimensions.get('window').width;

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

const textTop = StyleSheet.create({
  budget: {
    fontStyle: 'italic',
  },
  rp: {
    fontFamily: BOLD_FONT,
    fontSize: 17,
    marginLeft: 12,
  },
  budgetContainer: {
    flex: 1,
  },
  textcontainer: {
    marginTop: 4,
    flex: 1,
    alignItems: 'flex-end',
    marginRight: windowWidth * 0.032,
  },
  textexpense: {
    fontFamily: 'Inter-Regular',
    fontStyle: 'italic',
    marginRight: 7,
  },
});

const stylePie = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  superContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
});

const colorPie = color => {
  return {
    borderRadius: 40,
    borderColor: color,
    borderStyle: 'solid',
    borderWidth: 5,
    width: windowWidth * 0.01,
    height: windowWidth * 0.01,
  };
};
