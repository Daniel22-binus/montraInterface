import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const HistoryItem = props => {
  const {title, date, rp} = props;

  return (
    <View>
      <TouchableOpacity style={styles.container}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.date}>{date}</Text>
        </View>
        <Text style={styles.rp}>-Rp. {rp}</Text>
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
  },
  date: {
      marginVertical: 7,
      fontSize: 15,
      color: '#8E8E93'
  },
  rp: {
    color: 'red',
    right: windowWidth * -0.24,
    fontWeight: 'bold',
  },
  line: {
    borderStyle: 'solid',
    borderBottomWidth: 3,
    marginHorizontal: 8,
  },
});
