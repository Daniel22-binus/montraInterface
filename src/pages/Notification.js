import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Header from '../components/Header';
import HistoryItem from '../components/HistoryItem';
import {
  BACKGROUND_COLOR,
  ITALIC_FONT,
  PRIMARY_FONT,
  TITLE_COLOR,
} from '../constant';

const Notification = ({navigation}) => {
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <Header navigation={navigation} notif="active" />
      <View style={styles.bg} />
      <View style={styles.container}>
        <View style={{marginTop: windowHeight * 0.01}}>
          <Text style={styles.titleNotif}>Notification</Text>
          <View style={styles.line} />
          <TouchableOpacity>
            <Text style={styles.textClear}>Clear All Notification </Text>
          </TouchableOpacity>
        </View>

        <View>
          <HistoryItem
            title="Beli mcflurry rainbow"
            date="15 January 2021"
            rp="50.000"
          />
          <HistoryItem
            title="isi saldo mrt card"
            date="3 January 2021"
            rp="100.000"
          />
          <HistoryItem
            title="Bayar uang sekolah bulan january"
            date="1 January 2021"
            rp="1.000.000"
          />
        </View>
      </View>
    </View>
  );
};

export default Notification;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    marginTop: windowHeight * -0.05,
  },
  bg: {
    backgroundColor: BACKGROUND_COLOR,
    width: windowWidth,
    height: windowHeight * 0.05,
  },
  titleNotif: {
    marginLeft: 10,
    fontSize: 18,
    fontFamily: PRIMARY_FONT,
    marginVertical: 7,
  },
  line: {
    borderStyle: 'solid',
    borderBottomWidth: 3,
    marginHorizontal: 8,
    borderColor: TITLE_COLOR,
  },
  textClear: {
    marginLeft: windowWidth * 0.63,
    fontFamily: PRIMARY_FONT,
    fontSize: 15,
    fontStyle: 'italic',
    textDecorationLine: 'underline',
    color: BACKGROUND_COLOR,
    marginVertical: 5
  },
});
