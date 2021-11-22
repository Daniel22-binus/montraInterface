import React, {useState} from 'react';
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
import {BOLD_FONT, PRIMARY_COLOR, TITLE_COLOR} from '../../constant/index';
import PlanningAddNeeds from './PlanningAddNeeds';

const PlanningAdd = ({route, navigation}) => {
  const {getPlan, Header, FormAction, TitleBtn} = route.params;

  const [Plan, setPlan] = useState(getPlan);

  const inputTitleField = text => {
    setPlan({
      ...Plan,
      planningName: text,
    });
  };

  const inputDescriptionField = text => {
    setPlan({
      ...Plan,
      planningDescription: text,
    });
  };

  const inputNeedsArray = needs => {
    setPlan({
      ...Plan,
      needs: needs,
    });
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <HeaderBack navigation={navigation} title={TitleBtn + " Planning"} />
      <ScrollView>
        <View style={form.container}>
          <View style={form.containerInput}>
            <Text style={form.inputLabel}>Planning Name</Text>
            <TextInput
              style={form.inputText}
              value={Plan.planningName}
              onChangeText={text => inputTitleField(text)}
            />
          </View>
          <View style={form.containerInput}>
            <Text style={form.inputLabel}>Planning Description</Text>
            <TextInput
              style={form.inputBox}
              multiline
              numberOfLines={4}
              editable
              maxLength={40}
              value={Plan.planningDescription}
              onChangeText={text => inputDescriptionField(text)}
            />
          </View>
          <PlanningAddNeeds
            getNeed={Plan.needs}
            inputNeedsArray={inputNeedsArray}
          />

          <View style={{alignItems: 'flex-end', marginTop: 15}}>
            <TouchableOpacity
              style={styles.btnContainer}
              onPress={() => {
                FormAction(Plan);
                navigation.goBack();
              }}>
              <Text style={styles.btnText}>{TitleBtn}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default PlanningAdd;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  btnContainer: {
    backgroundColor: TITLE_COLOR,
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
    width: 100,
  },
  inputText: {
    borderBottomWidth: 1,
    width: 235,
    borderColor: TITLE_COLOR,
    color: TITLE_COLOR
  },
  inputBox: {
    borderWidth: 1,
    width: 235,
    borderColor: TITLE_COLOR,
    color: TITLE_COLOR
  },
  btnAddNeeds: {
    paddingVertical: windowHeight * 0.02,
  },
});
