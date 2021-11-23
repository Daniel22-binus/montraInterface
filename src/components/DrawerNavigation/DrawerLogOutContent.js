import React from 'react';
import { useNavigation } from '@react-navigation/core'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  Dimensions,
} from 'react-native';
import {DrawerItem} from '@react-navigation/drawer';
import {
  HomeIcon,
  NotifNotActiveIcon,
  BudgetIcon,
  HistoryIcon,
  PlanningIcon,
  MonthPayIcon,
  SettingsIcon,
  LogoutIcon,
  WrongDefault,
} from '../../assets';
import {BOLD_FONT, TITLE_COLOR} from '../../constant';
import {auth} from '../../../firebase';

const DrawerLogOutContent = () => {
    
  const navigation = useNavigation();
  
  const handleLogOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace('Splash');
        // navigation.navigate("SignInScreen");
        console.log();
      })
      .catch(error => alert(error.message));
  };

  return (
    // <TouchableOpacity
    //   activeOpacity={1}
    //   underlayColor="#DDDDDD" onPress=
    //   {() => {
    //     navigation.navigate('Splash');
    //   }}
    //   >
    //   <View style={styles.container}>
    //     <LogoutIcon />
    //     <Text style={styles.item}>{title}</Text>
    //   </View>
    // </TouchableOpacity>
    <TouchableHighlight
      activeOpacity={1}
      underlayColor="#DDDDDD"
      onPress={handleLogOut}>
      <View style={styles.container}>
        <LogoutIcon />
        <Text style={styles.item}>Log Out</Text>
      </View>
    </TouchableHighlight>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default DrawerLogOutContent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 8,
    marginLeft: windowWidth * 0.05,
  },
  icon: {
    marginLeft: 5,
    width: windowWidth * 0.1,
    height: windowHeight * 0.054,
  },
  item: {
    fontSize: 16,
    fontFamily: BOLD_FONT,
    color: TITLE_COLOR,
    marginTop: 8,
    marginLeft: 7,
  },
});
