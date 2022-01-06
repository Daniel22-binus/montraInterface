import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {
  BOLD_FONT,
  PRIMARY_FONT,
  TITLE_COLOR,
  DETAIL_COLOR,
  SECONDARY_COLOR,
} from '../constant';
import {PrintPrice} from '../logic/printPrice';
import printDate from '../logic/printDate';

const HistoryItem = props => {
  const {title, date, rp} = props;

  const DateDetail = () => {
    if (date != null) {

      return (
        <Text style={styles.date}>
          {printDate(date)}
        </Text>
      );
    }

    return null;
  };

  const RpDetail = () => {
    if (rp != null) {
      return <Text style={styles.rp}>-{PrintPrice(rp)}</Text>;
    }

    return null;
  };

  const TitleStyle = () => {
    if (rp != null) {
      return {
        fontSize: 17,
        width: windowWidth * 0.45,
        fontFamily: PRIMARY_FONT,
        color: TITLE_COLOR,
      };
    } else
      return {
        fontSize: 17,
        // width: windowWidth * 0.45,
        fontFamily: PRIMARY_FONT,
        color: 'black',
      };
  };

  return (
    <View>
      <TouchableOpacity style={styles.container}>
        <View>
          <Text style={TitleStyle()}>{title}</Text>
          <DateDetail />
        </View>
        <RpDetail />
      </TouchableOpacity>
      <View style={styles.line} />
    </View>
  );
};
export default HistoryItem;

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 8,
    marginVertical: 5,
  },
  title: {
    fontSize: 17,
    width: windowWidth * 0.45,
    fontFamily: PRIMARY_FONT,
    color: TITLE_COLOR,
  },
  date: {
    marginVertical: 7,
    fontSize: 15,
    color: DETAIL_COLOR,
    fontFamily: PRIMARY_FONT,
  },
  rp: {
    color: 'red',
    right: windowWidth * -0.23,
    fontFamily: BOLD_FONT,
  },
  line: {
    borderStyle: 'solid',
    borderBottomWidth: 3,
    marginHorizontal: 8,
    borderColor: SECONDARY_COLOR,
  },
});
