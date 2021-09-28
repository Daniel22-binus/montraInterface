import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import Header from '../components/Header';
import HistoryItem from '../components/HistoryItem';

const Notification = ({navigation}) => {
  return (
    <View>
      <Header navigation={navigation} />
      <View>
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
      </View>
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({});
