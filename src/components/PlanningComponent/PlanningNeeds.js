import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {PRIMARY_FONT, TITLE_COLOR} from '../../constant';

const PlanningNeeds = ({needsTitle, state}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(state);
  return (
    <View style={styles.container}>
      <CheckBox
        disabled={false}
        value={toggleCheckBox}
        onValueChange={newValue => setToggleCheckBox(newValue)}
        tintColors={{true: TITLE_COLOR, false: TITLE_COLOR}}
      />
      <Text style={styles.title}>{needsTitle}</Text>
    </View>
  );
};

export default PlanningNeeds;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  title: {
    marginTop: 7,
    fontFamily: PRIMARY_FONT,
    fontSize: 18,
    color: TITLE_COLOR,
  },
});
