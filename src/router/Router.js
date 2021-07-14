import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../pages/Home';
import Notification from '../pages/Notification';
import Splash from '../pages/Splash';
import SignInScreen from "../pages/SignInScreen"
import ForgetPasswordScreen from "../pages/ForgetPassword"
import SignUpScreen from "../pages/SignUpScreen"
import Budget from '../pages/Budget';
import DrawerContent from '../components/DrawerNavigation/DrawerContent';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const MainApp = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={props => <DrawerContent {...props} />}
      drawerStyle={styles.navigatorContainer}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Notifications" component={Notification} />
      <Drawer.Screen name="Budget" component={Budget} />
    </Drawer.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignInScreen"
        component={SignInScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ForgetPasswordScreen"
        component={ForgetPasswordScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;

const styles = StyleSheet.create({
  navigatorContainer: {
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    opacity: 0.9,
  }
});
