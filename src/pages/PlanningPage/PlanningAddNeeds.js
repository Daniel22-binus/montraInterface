import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {PRIMARY_COLOR, TITLE_COLOR} from '../../constant/index';
import {AddIcon, DeleteIcon} from '../../assets/icons';
import {TextInput} from 'react-native-gesture-handler';

const PlanningAddNeeds = ({getNeed, inputNeedsArray}) => {
  const [needsList, setNeedsList] = useState(getNeed);

  const addCustomField = () => {
    const newList = [...needsList];
    newList.push({id: '', needName: '', needPrice: '', needState: false});
    setNeedsList(newList);
    inputNeedsArray(newList);
  };

  const deleteField = key => {
    const newList = [...needsList];
    newList.splice(key, 1);
    setNeedsList(newList);
    inputNeedsArray(newList);
  };

  const inputNameField = (text, key) => {
    const newList = [...needsList];
    newList[key].needName = text;
    newList[key].id = key;
    setNeedsList(newList);
    inputNeedsArray(newList);
  };

  const inputPriceField = (price, key) => {
    const newList = [...needsList];
    newList[key].needPrice = parseInt(price, 10);
    newList[key].id = key;
    setNeedsList(newList);
    inputNeedsArray(newList);
  };

  return (
    <View>
      <View style={form.containerInput}>
        <Text style={form.inputLabel}>Planning Needs</Text>
        <TouchableOpacity style={form.btnAddNeeds} onPress={addCustomField}>
          <AddIcon />
        </TouchableOpacity>
      </View>

      {needsList.map((need, key) => (
        <View key={key} style={styles.container}>
          <TextInput
            style={styles.inputName}
            placeholder={'Need Name'}
            value={need.needName}
            onChangeText={text => {
              inputNameField(text, key);
            }}
          />
          <TextInput
            style={styles.inputPrice}
            placeholder="Price"
            value={need.needPrice+""}
            onChangeText={price => {
              inputPriceField(price, key);
            }}
            keyboardType="numeric"
          />
          <TouchableOpacity
            onPress={() => {
              deleteField(key);
            }}>
            <DeleteIcon style={styles.deleteIcon} />
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

export default PlanningAddNeeds;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  inputName: {
    borderBottomWidth: 1,
    width: windowWidth * 0.4,
    marginRight: 12,
    borderColor: TITLE_COLOR,
  },
  inputPrice: {
    borderBottomWidth: 1,
    width: windowWidth * 0.3,
    marginHorizontal: 12,
    borderColor: TITLE_COLOR,
  },
  deleteIcon: {
    marginTop: 24,
  },
});

const form = StyleSheet.create({
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
  btnAddNeeds: {
    // paddingVertical: windowHeight * 0.02,
    paddingVertical: 15,
  },
});
