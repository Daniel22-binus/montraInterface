import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { MenuIcon, NotifActiveIcon } from '../assets';
import { BACKGROUND_COLOR } from '../constant';

const Header = ({navigation}) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity
        onPress={() => {
          navigation.openDrawer();
        }}>
        <View style={styles.menuIcon}>
          <MenuIcon />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Notifications');
        }}>
        <View style={styles.notifIcon}>
          <NotifActiveIcon />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  header: {
    backgroundColor: BACKGROUND_COLOR,
    flexDirection: 'row',
    paddingVertical: 10,
  },
  menuIcon: {
    marginTop: 6,
    marginLeft: 12,
  },
  notifIcon: {
    marginLeft: windowWidth * 0.8,
  },
});
