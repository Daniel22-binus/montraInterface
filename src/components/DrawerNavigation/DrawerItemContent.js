import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {DrawerItem} from '@react-navigation/drawer';

const DrawerItemContent = ({title, navigation}) => {
  return (
    <DrawerItem
      label={title}
      onPress={() => {
        navigation.navigate(title);
      }}
    />
  );
};

export default DrawerItemContent;

const styles = StyleSheet.create({});
