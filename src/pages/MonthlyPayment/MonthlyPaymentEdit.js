import React from 'react';
import {View, Text, Dimensions, StyleSheet, TextInput} from 'react-native';
import HeaderBack from '../../components/HeaderBack';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {BOLD_FONT, TITLE_COLOR, PRIMARY_FONT, WHITE} from '../../constant';

const MonthlyPaymentEdit = ({navigation}) => {
  const [data, setData] = React.useState({
    paymentName: '',
    fee: '',
    deadline: '',
  });

  const paymentNameInputChange = val => {
    setData({
      ...data,
      paymentName: val,
      check_usernameInputChange: true,
    });
  };

  const feeInputChange = val => {
    setData({
      ...data,
      fee: val,
      check_usernameInputChange: true,
    });
  };

  const deadlineInputChange = val => {
    setData({
      ...data,
      deadline: val,
      check_usernameInputChange: true,
    });
  };

  return (
    <View style={{flex: 1}}>
      <HeaderBack navigation={navigation} title="Edit Monthly Payment" />

      <ScrollView>
        <View style={styles.input}>
          <Text style={[styles.text_footer, {marginTop: 8}]}>Payment Name</Text>
          <TextInput
            placeholder="PLN’s Fee"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={val => paymentNameInputChange(val)}
          />
        </View>
        <View style={styles.input}>
          <Text style={[styles.text_footer, {marginTop: 8}]}>Fee</Text>
          <TextInput
            placeholder="1.000.000"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={val => feeInputChange(val)}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.input}>
          <Text style={[styles.text_footer, {marginTop: 8}]}>Deadline</Text>
          <TextInput
            placeholder="15"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={val => deadlineInputChange(val)}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.button}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Monthly Payment')}>
            <View style={styles.buttonAdd}>
              <Text style={styles.buttonText}>Save</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default MonthlyPaymentEdit;

const WindowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  input: {
    flexDirection: 'row',
    marginTop: 15,
    paddingBottom: 15,
  },
  text_footer: {
    fontFamily: PRIMARY_FONT,
    color: TITLE_COLOR,
    fontSize: 17,
    width: 100,
    paddingLeft: WindowWidth * 0.04,
  },
  textInput: {
    flex: 1,
    paddingLeft: WindowWidth * 0.04,
    paddingRight: WindowWidth * 0.04,
    marginLeft: WindowWidth * 0.04,
    marginRight: WindowWidth * 0.04,
    color: 'black',
    borderBottomColor: TITLE_COLOR,
    borderBottomWidth: 1,
  },
  button: {
    alignItems: 'flex-end',
    paddingTop: 30,
    paddingRight: WindowWidth * 0.04,
    paddingBottom: 35,
  },
  buttonAdd: {
    width: 120,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: TITLE_COLOR,
  },
  buttonText: {
    fontSize: 20,
    fontFamily: BOLD_FONT,
    color: WHITE,
  },
});
