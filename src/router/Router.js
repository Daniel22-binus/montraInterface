import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../pages/HomePage/Home';
import Notification from '../pages/Notification';
import Splash from '../pages/Splash';
import SignInScreen from '../pages/SignInScreen';
import ForgetPasswordScreen from '../pages/ForgetPassword';
import SignUpScreen from '../pages/SignUpScreen';
import Budget from '../pages/Budget';
import Planning from '../pages/Planning';
import DrawerContent from '../components/DrawerNavigation/DrawerContent';
import MonthlyPayment from '../pages/MonthlyPayment/MonthlyPayment';
import MonthlyPaymentAdd from '../pages/MonthlyPayment/MonthlyPaymentAdd';
import MonthlyPaymentEdit from '../pages/MonthlyPayment/MonthlyPaymentEdit';

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
      <Drawer.Screen name="Monthly Payment" component={MonthlyPayment} />
      <Drawer.Screen name="Planning" component={Planning} />
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

      <Stack.Screen
        name="MonthlyPaymentAdd"
        component={MonthlyPaymentAdd}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MonthlyPaymentEdit"
        component={MonthlyPaymentEdit}
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
  },
});
