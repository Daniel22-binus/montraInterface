import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {PRIMARY_FONT, TITLE_COLOR} from '../../constant';
import {PrintPrice} from '../../logic/printPrice';

const PlanningNeeds = ({need, indexPlan, setStateNeed}) => {
  return (
    <>
      <View style={styles.container}>
        <CheckBox
          disabled={false}
          value={need.needState}
          onValueChange={newValue => setStateNeed(indexPlan, need.id, newValue)}
          tintColors={{true: TITLE_COLOR, false: TITLE_COLOR}}
        />
        <Text style={styles.title}>{need.needName}</Text>
      </View>
      <Text style={styles.rp}>{PrintPrice(need.needPrice)}</Text>
    </>
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
  rp: {
    marginTop: 1,
    fontFamily: PRIMARY_FONT,
    fontSize: 18,
    color: TITLE_COLOR,
    marginLeft: 52,
  },
});
