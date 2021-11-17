import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const historyHook = () => {
  const [historyList, setHistoryList] = useState([
      //ini hanya dummy
      //untuk budgetID
      //1 = konsumsi
      //2 = edukasi
      //3 = lain lain
    {
      id: 0,
      budgetId: 2,
      title: 'Bayar SPP bulan Januari',
      date: new Date('3 January 2021'),
      rp: 1000000,
    },
    {
      id: 1,
      budgetId: 1,
      title: 'Beli Xing Fu Tang',
      date: new Date('10 January 2021'),
      rp: 35000,
    },
    {
      id: 2,
      budgetId: 3,
      title: 'PLN',
      date: new Date('10 January 2021'),
      rp: 500000,
    },
    {
      id: 3,
      budgetId: 3,
      title: 'Isi Saldo MRR Card',
      date: new Date('13 January 2021'),
      rp: 100000,
    },
    {
      id: 4,
      budgetId: 1,
      title: 'Beli mcflurry rainbow',
      date: new Date('15 January 2021'),
      rp: 50000,
    },
  ]);

  return [historyList];
};

export default historyHook;

const styles = StyleSheet.create({});
