import React from 'react';
import {StyleSheet} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../pages/HomePage/Home';
import Notification from '../pages/Notification';
import Splash from '../pages/Splash';
import SignInScreen from '../pages/SignInScreen';
import SignUpScreen from '../pages/SignUpScreen';
import Planning from '../pages/PlanningPage/Planning';
import PlanningAdd from '../pages/PlanningPage/PlanningAdd';
import DrawerContent from '../components/DrawerNavigation/DrawerContent';
import MonthlyPayment from '../pages/MonthlyPayment/MonthlyPayment';
import MonthlyAddEdit from '../pages/MonthlyPayment/MonthlyAddEdit';
import WaitingPage from '../pages/WaitingPage';
import Budget from '../pages/Budget/Budget';
import BudgetAddEdit from '../pages/Budget/BudgetAddEdit';
import HistoryTransactionPage from '../pages/HistoryTransactionPage';
import Profile from '../pages/Profile/Profile';
import profileEdit from '../pages/Profile/profileEdit';
import AddExpense from '../pages/AddExpense';
import changePassword from '../pages/Settings/changePassword';
import Settings from '../pages/Settings/settingsMain';
import About from '../pages/Settings/About';

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
      <Drawer.Screen
        name="History Transaction"
        component={HistoryTransactionPage}
      />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Settings" component={Settings} />
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
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="BudgetAddEdit"
        component={BudgetAddEdit}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="MonthlyAddEdit"
        component={MonthlyAddEdit}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="WaitingPage"
        component={WaitingPage}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="profileEdit"
        component={profileEdit}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="About"
        component={About}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Change Password"
        component={changePassword}
        options={{headerShown: false}}
      />

      {PlanningPage()}
      <Stack.Screen
        name="AddExpense"
        component={AddExpense}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const PlanningPage = () => {
  return (
    <>
      <Stack.Screen
        name="PlanningAdd"
        component={PlanningAdd}
        options={{headerShown: false}}
      />
    </>
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
