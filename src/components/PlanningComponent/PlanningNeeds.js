import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { TITLE_COLOR } from '../../constant';

const PlanningNeeds = ({needsTitle}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
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
    },
});
