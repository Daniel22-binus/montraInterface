import React from 'react';
import {View, Text, StyleSheet, Dimensions, ScrollView} from 'react-native';
import HeaderBack from '../components/HeaderBack';
import {BOLD_FONT, PRIMARY_FONT, TITLE_COLOR} from '../constant';

const Planning = ({navigation}) => {
  return (
    <View style={styles.container}>
      <HeaderBack navigation={navigation} title="Planning" />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Hai, </Text>
        <Text style={styles.userTitle}>User &#128400;</Text>
      </View>
      <Text style={styles.title2}>here’s your ongoing planning</Text>

      <View>
        <ScrollView horizontal={true}></ScrollView>
      </View>
    </View>
  );
};

export default Planning;

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  titleContainer: {
    flexDirection: 'row',
    marginLeft: windowWidth * 0.03,
  },
  title: {
    fontFamily: PRIMARY_FONT,
    fontSize: 22,
    color: TITLE_COLOR,
  },
  userTitle: {
    fontFamily: BOLD_FONT,
    fontSize: 22,
    color: TITLE_COLOR,
  },
  title2: {
    fontFamily: PRIMARY_FONT,
    fontSize: 20,
    color: TITLE_COLOR,
    marginLeft: windowWidth * 0.03,
  },
});
