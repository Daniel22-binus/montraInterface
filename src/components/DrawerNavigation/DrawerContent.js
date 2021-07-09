import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import DrawerItemContent from './DrawerItemContent';

const DrawerContent = ({navigation}) => {
  return (
    <View>
      <DrawerItemContent title="Home" navigation={navigation} />
      <DrawerItemContent title="Notifications" navigation={navigation} />
      <DrawerItemContent title="Budget" navigation={navigation} />
    </View>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({});
