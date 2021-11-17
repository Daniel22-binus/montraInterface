import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import PieChartReact from '../../components/HomeComponent/PieChartReact';
import HistoryItem from '../../components/HistoryItem';
import {AddIcon} from '../../assets/icons';
import {BOLD_FONT, PRIMARY_COLOR, PRIMARY_FONT} from '../../constant';
import historyHook from '../../hooks/historyHook';

const HomeHeader = () => {
  return (
    <View style={{flexDirection: 'row', marginLeft: 10, marginVertical: 12}}>
      <View style={textTop.budgetContainer}>
        <Text style={textTop.budget}>your budget left:</Text>
        <Text style={textTop.rp}>Rp. 6.700.000</Text>
      </View>
      <View style={textTop.textcontainer}>
        <TouchableOpacity style={{flexDirection: 'row'}}>
          <Text style={textTop.textexpense}>Add Expense</Text>
          <AddIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const HomeAll = ({navigation}) => {
  const [historyList] = historyHook();
  let historyListShort = [];

  if (historyList.length > 3) {
    let length = historyList.length;
    historyListShort = historyList.slice(length - 3, length);
  } else {
    historyListShort = [...historyList];
  }

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <HomeHeader />
      <PieChartReact />
      <View>
        <Text style={styles.textTitle}>Expenses</Text>

        {historyListShort.reverse().map(history => (
          <HistoryItem
            key={history.id}
            title={history.title}
            date={history.date}
            rp={history.rp}
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
  addBtn: {},
});
