import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { BOLD_FONT, SECONDARY_COLOR } from '../../constant';

const ProfileJoinedDate = ({date}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.fontDate}>{date}</Text>
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
    fontFamily: BOLD_FONT,
    fontStyle: 'italic',
    color: SECONDARY_COLOR,
    textAlign: 'right',
    // width: 200,
    // paddingRight: 100,
  },
});
