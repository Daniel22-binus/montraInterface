import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../pages/Home';
import Notification from '../pages/Notification';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const MainApp = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Notifications" component={Notification} />
    </Drawer.Navigator>
  )
}

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="MainApp">
      <Stack.Screen
      name="MainApp"
      component={MainApp}
      />
    </Stack.Navigator>
  );
};

export default Router;

const styles = StyleSheet.create({});
