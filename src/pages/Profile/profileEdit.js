import React from 'react';
import {View, Text, Dimensions, StyleSheet, TextInput} from 'react-native';
import HeaderBack from '../../components/HeaderBack';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {
  BOLD_FONT,
  TITLE_COLOR,
  PRIMARY_FONT,
  WHITE,
  PRIMARY_COLOR,
} from '../../constant';

const profileEdit = ({navigation}) => {
  const [data, setData] = React.useState({
    name: '', 
    email: '',
    phoneNumber: '',
  });

  const nameInputChange = val => {
    setData({
      ...data,
      name: val,
    });
  };
  const emailInputChange = val => {
    setData({
      ...data,
      email: val,
    });
  };
  const phoneNumberInputChange = val => {
    setData({
      ...data,
      phoneNumber: val,
    });
  };

  return (
    <View style={{flex: 1}}>
      <HeaderBack navigation={navigation} title="Edit Profile" />

      <ScrollView>
        <View style={styles.input}>
          <Text style={[styles.text_footer, {marginTop: 8}]}>Name</Text>
          <TextInput
            placeholder="User"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={val => nameInputChange(val)}
          />
        </View>
        <View style={styles.input}>
          <Text style={[styles.text_footer, {marginTop: 8}]}>Email</Text>
          <TextInput
            placeholder="user@gmail.com"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={val => emailInputChange(val)}
          />
        </View>
        <View style={styles.input}>
          <Text style={[styles.text_footer, {marginTop: 8}]}>Phone Number</Text>
          <TextInput
            placeholder="0877 0877 0877"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={val => phoneNumberInputChange(val)}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.button}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Profile')}>
            <View style={styles.buttonAdd}>
              <Text style={styles.buttonText}>Save</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
    // <View>
    //   <Text>chicken</Text>
    // </View>
  );
};
export default profileEdit;

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
  budgetDetail: {
    paddingBottom: 15,
    alignItems: 'flex-end',
  },
  font1: {
    color: PRIMARY_COLOR,
    fontSize: 16,
    fontStyle: 'italic',
    paddingBottom: 5,
  },
  font2: {
    color: TITLE_COLOR,
    fontSize: 20,
    fontFamily: BOLD_FONT,
    paddingBottom: 5,
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
