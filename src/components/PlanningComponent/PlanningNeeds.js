import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {PRIMARY_FONT, TITLE_COLOR} from '../../constant';

const PlanningNeeds = ({need, indexPlan, setStateNeed}) => {
  return (
    <View style={styles.container}>
      <CheckBox
        disabled={false}
        value={need.needState}
        onValueChange={newValue => setStateNeed(indexPlan, need.id, newValue)}
        tintColors={{true: TITLE_COLOR, false: TITLE_COLOR}}
      />
      <Text style={styles.title}>{need.needName}</Text>
    </View>
  );
};

export default PlanningNeeds;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  title: {
    marginTop: 3,
    fontFamily: PRIMARY_FONT,
    fontSize: 18,
    color: TITLE_COLOR,
  },
});
