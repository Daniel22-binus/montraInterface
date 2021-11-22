import React ,{useState} from 'react';
import {View, Text, Dimensions, StyleSheet, TextInput} from 'react-native';
import HeaderBack from '../../components/HeaderBack';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {BOLD_FONT, TITLE_COLOR, PRIMARY_FONT, WHITE} from '../../constant';

const MonthlyPaymentAdd = ({route, navigation}) => {
  const {getMonthly, Header,FormAction, TitleBtn} = route.params;
  const [Monthly, setMonthly] = useState(getMonthly);

  const paymentTitleInputChange = text => {
    setMonthly({
      ...Monthly,
      paymentName: text,
    });
  };

  const budgetInputChange = text => {
    setMonthly({
      ...Monthly,
      paymentFee: text,
    });
  };

  const deadlineInputChange = text => {
    setMonthly({
      ...Monthly,
      paymentDeadline: text,
    });
  };

  return (
    <View style={{flex: 1}}>
      <HeaderBack navigation={navigation} title={Header}/>

      <ScrollView>
        <View style={styles.input}>
          <Text style={[styles.text_footer, {marginTop: 8}]}>Payment Name</Text>
          <TextInput
            style={styles.textInput}
            autoCapitalize="none"
            value={Monthly.paymentName}
            onChangeText={text => paymentTitleInputChange(text)}
          />
        </View>
        <View style={styles.input}>
          <Text style={[styles.text_footer, {marginTop: 8}]}>Fee</Text>
          <TextInput
            style={styles.textInput}
            value={Monthly.paymentFee}
            onChangeText={text => budgetInputChange(text)}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.input}>
          <Text style={[styles.text_footer, {marginTop: 8}]}>Deadline</Text>
          <TextInput
            style={styles.textInput}
            value={Monthly.paymentDeadline}
            onChangeText={text => deadlineInputChange(text)}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.button}>
          <TouchableOpacity
            onPress={() => {
              FormAction(Monthly);
              navigation.goBack();
            }}>
            <View style={styles.buttonAdd}>
              <Text style={styles.buttonText}>{TitleBtn}</Text>
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
    fontSize: 15,
    fontStyle: 'italic',
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
