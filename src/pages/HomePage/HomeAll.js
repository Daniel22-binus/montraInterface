import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Dimensions} from 'react-native';
import PieChartReact from '../../components/HomeComponent/PieChartReact';
import HistoryItem from '../../components/HistoryItem';
import {AddIcon} from '../../assets/icons';
import {BOLD_FONT, PRIMARY_COLOR, PRIMARY_FONT} from '../../constant';

const HomeAll = () => {
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <View style={{flexDirection: 'row', marginLeft: 10, marginVertical: 12,}}>
        <View>
          <Text style={textTop.budget}>your budget left:</Text>
          <Text style={textTop.rp}>Rp. 6.700.000</Text>
        </View>
        <View style={textTop.textcontainer}>
          <Text style={textTop.textexpense}>add expense</Text>
          <AddIcon />
        </View>
      </View>
      <PieChartReact />
      <View>
        <Text style={styles.textTitle}>Expenses</Text>
        <HistoryItem
          title="Beli mcflurry rainbow"
          date="15 January 2021"
          rp="50.000"
        />
        <HistoryItem
          title="isi saldo mrt card"
          date="3 January 2021"
          rp="100.000"
        />
        <HistoryItem
          title="Bayar uang sekolah bulan january"
          date="1 January 2021"
          rp="1.000.000"
        />

        <TouchableOpacity>
          <View>
            <Text style={styles.textDetails}>see details.</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeAll;

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
    color: '#A067FC',
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
  textcontainer: {
    flexDirection: 'row', 
    marginLeft: windowWidth * 0.32,
  },
  textexpense: {
    marginTop: 6,
    fontFamily: 'Inter-Regular',
    fontStyle: 'italic',
    marginRight: 7,
  },
  addBtn: {},
});
