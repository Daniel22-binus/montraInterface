import React from 'react';
import {View, Text, Dimensions, StyleSheet, TextInput} from 'react-native';
import HeaderBack from '../../components/HeaderBack';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {BOLD_FONT, TITLE_COLOR, PRIMARY_FONT, WHITE, PRIMARY_COLOR} from '../../constant';

const BudgetAdd = ({navigation}) => {
  const [data, setData] = React.useState({
    budgetName: '',
    budgetLimit: '',
  });

  const budgetNameInputChange = val => {
    setData({
      ...data,
      budgetName: val,
    });
  };

  const budgetLimitInputChange = val => {
    setData({
      ...data,
      budgetLimit: val,
    });
  };

  return (
    <View style={{flex: 1}}>
      <HeaderBack navigation={navigation} title="Add New Budget" />

      <ScrollView>
        <View style={styles.input}>
          <Text style={[styles.text_footer, {marginTop: 8}]}>Budget Name</Text>
          <TextInput
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={val => budgetNameInputChange(val)}
          />
        </View>
        <View style={styles.input}>
          <Text style={[styles.text_footer, {marginTop: 8}]}>Budget Limit</Text>
          <TextInput
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={val => budgetLimitInputChange(val)}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.button}>
          <View style={styles.budgetDetail}>
            <Text style={styles.font1}>Total Budget in January</Text>
            <Text style={styles.font2}>RP 17.000.000</Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Budget')}>
            <View style={styles.buttonAdd}>
              <Text style={styles.buttonText}>Add</Text>
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
export default BudgetAdd;

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

  budgetDetail: {
    paddingBottom: 15,
    alignItems: "flex-end"
  },

  font1: {
      color: PRIMARY_COLOR,
      fontSize: 16,
      fontStyle: "italic",
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
