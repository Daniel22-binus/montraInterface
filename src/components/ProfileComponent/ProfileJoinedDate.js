import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { BOLD_FONT, PRIMARY_FONT, SECONDARY_COLOR, SOFT_COLOR } from '../../constant';
import printDate from '../../logic/printDate';
import firebase from 'firebase';

const ProfileJoinedDate = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.fontDate}>{printDate(firebase.auth().currentUser?.metadata.creationTime)}</Text>
    </View>
  );
};

export default ProfileJoinedDate;

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
  },
  fontDate: {
    fontSize: 18,
    fontFamily: PRIMARY_FONT,
    fontStyle: 'italic',
    color: SOFT_COLOR,
    textAlign: 'right',
  },
});
