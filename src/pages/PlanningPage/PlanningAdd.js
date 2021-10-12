import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import HeaderBack from '../../components/HeaderBack';

const PlanningAdd = ({navigation}) => {
  return (
    <View>
      <HeaderBack navigation={navigation} title="Add New Planning" />
      <View>
          <Text>Nih Jalan</Text>
      </View>
    </View>
  );
};

export default PlanningAdd;

const styles = StyleSheet.create({});
