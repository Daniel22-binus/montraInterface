import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import HeaderBack from '../../components/HeaderBack';
import {PRIMARY_COLOR, TITLE_COLOR} from '../../constant/index';
import PlanningAddNeeds from './PlanningAddNeeds';

const PlanningAdd = ({navigation}) => {
  return (
    <View>
      <HeaderBack navigation={navigation} title="Add New Planning" />
      <ScrollView>
        <View style={form.container}>
          <View style={form.containerInput}>
            <Text style={form.inputLabel}>Planning Name</Text>
            <TextInput style={form.inputText} />
          </View>
          <View style={form.containerInput}>
            <Text style={form.inputLabel}>Planning Description</Text>
            <TextInput
              style={form.inputBox}
              multiline
              numberOfLines={4}
              editable
              maxLength={40}
            />
          </View>
          <PlanningAddNeeds />

        </View>
      </ScrollView>
    </View>
  );
};

export default PlanningAdd;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({});
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
    width: 100,
  },
  inputText: {
    borderBottomWidth: 1,
    width: 235,
    borderColor: TITLE_COLOR,
  },
  inputBox: {
    borderWidth: 1,
    width: 235,
    borderColor: TITLE_COLOR,
  },
  btnAddNeeds: {
    paddingVertical: windowHeight * 0.02,
  }
});
