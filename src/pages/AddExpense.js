import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import HeaderBack from '../components/HeaderBack';
import {BOLD_FONT, PRIMARY_COLOR, TITLE_COLOR} from '../constant';

const AddExpense = ({navigation}) => {
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <HeaderBack navigation={navigation} title={'Add Expense'} />
      <View style={form.container}>
        <Text style={styles.title}>Add Expense</Text>
        <View style={form.containerInput}>
          <Text style={form.inputLabel}>Date</Text>
          <TextInput style={form.inputText} />
        </View>
        <View style={form.containerInput}>
          <Text style={form.inputLabel}>Category</Text>
          <TextInput style={form.inputText} />
        </View>
        <View style={form.containerInput}>
          <Text style={form.inputLabel}>Amount</Text>
          <TextInput style={form.inputText} keyboardType="numeric" />
        </View>
        <View style={form.containerInput}>
          <Text style={form.inputLabel}>Note</Text>
          <TextInput
            style={form.inputBox}
            multiline
            numberOfLines={4}
            editable
            maxLength={40}
          />
        </View>
        <View style={{alignItems: 'flex-end', marginTop: 15}}>
          <TouchableOpacity style={styles.btnContainer}>
            <Text style={styles.btnText}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AddExpense;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  title: {
    fontFamily: BOLD_FONT,
    fontSize: 30,
    color: TITLE_COLOR,
  },
  btnContainer: {
    backgroundColor: PRIMARY_COLOR,
    width: 120,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  btnText: {
    color: 'white',
    fontSize: 20,
    fontFamily: BOLD_FONT,
  },
});

const form = StyleSheet.create({
  container: {
    marginHorizontal: windowWidth * 0.06,
  },
  containerInput: {
    flexDirection: 'row',
    marginVertical: windowHeight * 0.01,
  },
  inputLabel: {
    fontSize: 17,
    fontFamily: PRIMARY_COLOR,
    color: TITLE_COLOR,
    marginTop: 12,
    width: 100,
  },
  inputText: {
    borderBottomWidth: 1,
    width: 235,
    borderColor: TITLE_COLOR,
    color: TITLE_COLOR,
    height: 40,
  },
  inputBox: {
    borderWidth: 1,
    width: 235,
    borderColor: TITLE_COLOR,
    color: TITLE_COLOR,
  },
  btnAddNeeds: {
    paddingVertical: windowHeight * 0.02,
  },
});
