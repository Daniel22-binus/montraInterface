import React, {useCallback} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Header from '../components/Header';
import HistoryItem from '../components/HistoryItem';
import {BACKGROUND_COLOR, PRIMARY_FONT, TITLE_COLOR} from '../constant';
import notificationHook from '../hooks/notificationHook';
import {useFocusEffect} from '@react-navigation/native';
import {objectToList} from '../logic/firebaseFunction';

const Notification = ({navigation}) => {
  const [notifList, getNotif, addNotif, deleteNotif, deleteAllNotif] =
    notificationHook();

  useFocusEffect(
    useCallback(() => {
      getNotif();
    }, []),
  );

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <Header navigation={navigation} notif="active" />
      <View style={styles.bg} />
      <View style={styles.container}>
        <View style={{marginTop: windowHeight * 0.01}}>
          <Text style={styles.titleNotif}>Notification</Text>
          <View style={styles.line} />
          <TouchableOpacity onPress={() => deleteAllNotif()}>
            <Text style={styles.textClear}>Clear All Notification </Text>
          </TouchableOpacity>
        </View>

        <View>
          {/* <HistoryItem title="Your ‘Food & Beverage’ Budget almost exceeds the limit " />
          <HistoryItem title="Successfully added new Budget ‘Transportation’" />
          <HistoryItem title="Successfully added new Budget ‘Education’" />
          <HistoryItem title="Don’t forget to pay your PLN’s fee and check in Monthly Payment!" /> */}

          {objectToList(notifList.results).map(Notif => (
            <HistoryItem
              key={Notif}
              title={notifList.results[Notif].description}
            />
          ))}
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
    marginVertical: 5,
  },
});
