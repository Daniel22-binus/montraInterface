import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  BOLD_FONT,
  PRIMARY_COLOR,
  PRIMARY_FONT,
  SECONDARY_COLOR,
  TITLE_COLOR,
} from '../../constant';
import {DeleteIcon, Edit2Icon} from '../../assets/icons';
import PlanningNeeds from './PlanningNeeds';

const PlanningItem = () => {
  return (
    <LinearGradient
      start={{x: 0.5, y: 1.0}}
      end={{x: 1.0, y: 0.5}}
      style={styles.linearColor}
      colors={["#9ABCDD", "#CAD8D2"]}>
      <View style={styles.container}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.title}>Trip to Hawaii</Text>
          <TouchableOpacity style={{marginRight: 8}}>
            <Edit2Icon />
          </TouchableOpacity>
          <TouchableOpacity>
            <DeleteIcon />
          </TouchableOpacity>
        </View>

        <Text style={styles.description}>for 3 days and 2 night</Text>
        <Text style={styles.price}>Rp. 15.000.000</Text>
        <View style={styles.line} />

        <View style={styles.needsContainer}>
          <PlanningNeeds needsTitle="Plane Ticket Fee" state={false} />
          <PlanningNeeds needsTitle="Hotel" state={true}/>
          <PlanningNeeds needsTitle="Tourist Guide" state={false} />
          <PlanningNeeds needsTitle="Meal Cost" state={true} />
          <PlanningNeeds needsTitle="Souvenirs" state={false} />
        </View>
      </View>
    </LinearGradient>
  );
};

export default PlanningItem;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  linearColor: {
    borderRadius: 40,
    width: windowWidth * 0.75,
    height: windowHeight * 0.5,
    marginHorizontal: windowWidth * 0.05,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
  },
  container: {
    marginHorizontal: windowWidth * 0.05,
    marginVertical: windowHeight * 0.03,
    // borderStyle: 'solid',
    // borderWidth: 1,
    // borderColor: 'white',
  },
  line: {
    borderStyle: 'solid',
    borderBottomWidth: 2,
    // marginHorizontal: 3,
    borderColor: 'white',
  },
  title: {
    width: windowWidth * 0.5,
    fontFamily: BOLD_FONT,
    fontSize: 20,
    color: TITLE_COLOR,
    marginTop: -4,
  },
  description: {
    fontFamily: PRIMARY_FONT,
    color: TITLE_COLOR,
    fontSize: 18,
    marginLeft: windowWidth * 0.03,
    marginVertical: 2,
  },
  price: {
    fontFamily: BOLD_FONT,
    fontSize: 18,
    color: TITLE_COLOR,
    textAlign: 'right',
    marginVertical: 5,
  },
  needsContainer:{
    marginTop: 10,
  }
});
