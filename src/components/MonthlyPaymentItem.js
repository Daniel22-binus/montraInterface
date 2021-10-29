import React, {useState} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {Edit2Icon, DeleteIcon} from '../assets';
import {
  BACKGROUND_COLOR,
  SECONDARY_COLOR,
  BOLD_FONT,
  TITLE_COLOR,
  PRIMARY_FONT,
} from '../constant';
import LinearGradient from 'react-native-linear-gradient';
import {
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native-gesture-handler';
import CheckBox from '@react-native-community/checkbox';
import { useNavigation } from '@react-navigation/native';

const MonthlyPaymentItem = ({title, budget, deadline}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.linear}
        colors={[BACKGROUND_COLOR, SECONDARY_COLOR]}
        start={{x: 1, y: 0}}
        end={{x: 0, y: 1}}>
        <View style={styles.upperStyle}>
          <Text style={styles.font1}>{title}</Text>
          <View style={styles.icons}>
            <TouchableOpacity
              style={styles.oneIcon}
              onPress={() => navigation.navigate('MonthlyPaymentEdit')}
              >
              <Edit2Icon />
            </TouchableOpacity>
            <TouchableOpacity style={styles.oneIcon}>
              <DeleteIcon />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.descWrapper}>
          <Text style={styles.font1}>{budget}</Text>
          <Text style={styles.font2}>{deadline}</Text>
        </View>

        <View style={styles.checkBox}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={newValue => setToggleCheckBox(newValue)}
            tintColors={{true: TITLE_COLOR, false: TITLE_COLOR}}
          />
        </View>
      </LinearGradient>
    </View>
  );
};

export default MonthlyPaymentItem;

const WindowWidth = Dimensions.get('window').width;
const WindowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    paddingVertical: WindowHeight * 0.015,
    alignItems: 'center',
  },
  linear: {
    width: WindowWidth * 0.88,
    height: 130,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 15,
  },
  upperStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  font1: {
    fontFamily: BOLD_FONT,
    color: TITLE_COLOR,
    fontSize: 20,
  },
  icons: {
    flexDirection: 'row',
    position: 'relative',
  },
  oneIcon: {
    marginLeft: 10,
  },
  font2: {
    fontFamily: PRIMARY_FONT,
    color: TITLE_COLOR,
    fontSize: 15,
  },
  descWrapper: {
    marginLeft: 15,
  },
  checkBox: {
    alignItems: 'flex-end',
  },
});