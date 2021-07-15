import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import PieChartReact from '../../components/HomeComponent/PieChartReact';
import HistoryItem from '../../components/HistoryItem';
import { AddIcon } from '../../assets/icons';

const Home = ({navigation}) => {
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <View style={{flexDirection: 'row', marginLeft: 10}}>
        <View>
          <Text>your budget left:</Text>
          <Text>Rp. 6.700.000</Text>
        </View>
        <View style={{flexDirection: 'row', marginLeft: 150}}>
          <Text style={{marginTop: 5}}>add expense</Text>
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

export default Home;

const styles = StyleSheet.create({
  textTitle: {
    fontWeight: 'bold',
    color: '#A067FC',
    fontSize: 22,
    marginLeft: 12,
    marginVertical: 3,
  },
  textDetails: {
    color: '#A067FC',
    textDecorationLine: 'underline',
    textAlign: 'center',
    marginTop: 12,
  },
});
