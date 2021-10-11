import React from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TextInput,
  Button,
} from 'react-native';
import {Add1Icon, BackIcon} from '../../assets';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {
  BOLD_FONT,
  TITLE_COLOR,
  PRIMARY_COLOR,
  PRIMARY_FONT,
  SECONDARY_COLOR,
  WHITE,
} from '../../constant';

const MonthlyPaymentAdd = ({navigation}) => {
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
      <View style={styles.upperNav}>
        <TouchableOpacity onPress={() => navigation.navigate('Monthly Payment')}>
          <BackIcon style={styles.backIcon} />
        </TouchableOpacity>

        <View style={styles.monthlyPayment}>
          <Text style={styles.font}>Add new Monthly Payment</Text>
        </View>
        {/* <HeaderBack navigation={navigation} title="Monthly Payment" /> */}
      </View>
      <ScrollView>
        <View style={styles.input}>
          <Text style={[styles.text_footer, {marginTop: 8}]}>Payment Name</Text>
          <TextInput
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={val => paymentNameInputChange(val)}
          />
        </View>
        <View style={styles.input}>
          <Text style={[styles.text_footer, {marginTop: 8}]}>Fee</Text>
          <TextInput
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={val => feeInputChange(val)}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.input}>
          <Text style={[styles.text_footer, {marginTop: 8}]}>Deadline</Text>
          <TextInput
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
              <Text style={styles.buttonText}>Add</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default MonthlyPaymentAdd;

const WindowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  upperNav: {
    flexDirection: 'row',
    margin: 20,
  },
  backIcon: {
    marginTop: 4,
    color: TITLE_COLOR,
  },
  monthlyPayment: {
    marginLeft: 10,
  },
  font: {
    fontFamily: BOLD_FONT,
    fontSize: 18,
    color: TITLE_COLOR,
  },
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
