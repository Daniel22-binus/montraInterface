import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {Edit2Icon, DeleteIcon} from '../../assets';
import {
  BACKGROUND_COLOR,
  SECONDARY_COLOR,
  BOLD_FONT,
  TITLE_COLOR,
  PRIMARY_FONT,
} from '../../constant';
import LinearGradient from 'react-native-linear-gradient';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ProgressBar from '../../components/BudgetComponent/ProgressBar';
import { useNavigation } from '@react-navigation/native';

const BudgetItem = ({title, budget, budgetUse}) => {
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
              onPress={() => navigation.navigate('BudgetEdit')}
            >
              <Edit2Icon />
            </TouchableOpacity>
            <TouchableOpacity style={styles.oneIcon}>
              <DeleteIcon />
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.font2}>Rp. {budget.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</Text>
        <ProgressBar current={[budgetUse]} total={[budget]} />
        <Text style={styles.font3}>Rp. {budgetUse.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</Text>
      </LinearGradient>
    </View>
  );
};

export default BudgetItem;

const WindowWidth = Dimensions.get('window').width;
const WindowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    paddingVertical: WindowHeight * 0.015,
    alignItems: 'center',
  },
  linear: {
    width: WindowWidth * 0.88,
    height: 120,
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
    fontFamily: PRIMARY_FONT,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: TITLE_COLOR,
    fontSize: 18,
  },
  font2: {
    fontFamily: BOLD_FONT,
    color: TITLE_COLOR,
    fontSize: 18,
    textAlign: 'right',
  },
  font3: {
    fontFamily: BOLD_FONT,
    color: TITLE_COLOR,
    fontSize: 13,
  },
  icons: {
    flexDirection: 'row',
    position: 'relative',
  },
  oneIcon: {
    marginLeft: 10,
  },
  checkBox: {
    alignItems: 'flex-end',
  },
});
