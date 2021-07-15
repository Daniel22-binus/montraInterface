import React from 'react';
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
import {HomeIcon, NotificationsIcon, BudgetIcon,
HistoryIcon, PlanningIcon, MonthPayIcon,
SettingsIcon, LogoutIcon,
WrongDefault} from '../../assets';
import { BOLD_FONT } from '../../constant';


const DrawerItemContent = ({title, navigation}) => {
  const Icon = () => {
    if (title === 'Home') return HomeIcon;
    if (title === 'Notifications') return NotificationsIcon;
    if (title === 'Budget') return BudgetIcon;

    if (title === 'History Transaction') return HistoryIcon;
    if (title === 'Planning') return PlanningIcon;
    if (title === 'Monthly Payment') return MonthPayIcon;

    if (title === 'Settings') return SettingsIcon;
    if (title === 'Logout') return LogoutIcon;

    return WrongDefault;
  };

  return (
    // <DrawerItem
    //     label={title}
    //     onPress={() => {
    //       navigation.navigate(title);
    //     }}
    //   />

    <TouchableHighlight
    activeOpacity={1}
    underlayColor="#DDDDDD"
      onPress={() => {
        navigation.navigate(title);
      }}>
      <View style={styles.container}>
        <Image style={styles.icon} source={Icon()} />
        <Text style={styles.item}>{title}</Text>
      </View>
    </TouchableHighlight>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default DrawerItemContent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 6,
  },
  icon: {
    marginLeft: 5,
    width: windowWidth * 0.1,
    height: windowHeight * 0.054,
  },
  item: {
    fontSize: 16,
    fontFamily: BOLD_FONT,
    color: 'white',
    marginTop: 8,
    marginLeft: 7,
  },
});
