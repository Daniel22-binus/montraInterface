import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {PRIMARY_FONT, TITLE_COLOR} from '../constant';

const FormInput = props => {
  const {placeholder, label} = props;
  return (
    <View>
      <Text style={styles.text}>{label}</Text>
      <View style={styles.action}>
        <TextInput
          {...props}
          placeholder={placeholder}
          style={styles.textInput}
        />
      </View>
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  text: {
    color: TITLE_COLOR,
    fontSize: 17,
    fontFamily: PRIMARY_FONT,
  },
  action: {
    flexDirection: 'row',
    marginVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
  },
  textInput: {
    flex: 1,
    marginTop: -10,
    fontSize: 15,
  },
});
