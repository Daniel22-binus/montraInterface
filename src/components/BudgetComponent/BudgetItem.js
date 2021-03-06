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
import {PrintPrice, printStringPrice} from '../../logic/printPrice';

const BudgetItem = ({
  navigation,
  Budget,
  deleteBudget,
  editBudget,
  budgetList,
}) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.linear}
        colors={[BACKGROUND_COLOR, SECONDARY_COLOR]}
        start={{x: 1, y: 0}}
        end={{x: 0, y: 1}}>
        <View style={styles.upperStyle}>
          <Text style={styles.font1}>{budgetList[Budget].budgetCategory}</Text>
          <View style={styles.icons}>
            <TouchableOpacity
              style={styles.oneIcon}
              onPress={() => {
                let tempBudget = budgetList[Budget];
                tempBudget.budgetMonth = new Date(tempBudget.budgetMonth);

                navigation.navigate('BudgetAddEdit', {
                  getBudget: tempBudget,
                  keyFirebase: Budget,
                  Header: 'Edit Budget',
                  Button: 'Edit',
                  FormAction: editBudget,
                });
              }}>
              <Edit2Icon />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.oneIcon}
              onPress={() =>
                deleteBudget(
                  budgetList[Budget].id,
                  budgetList[Budget].budgetMonth,
                )
              }>
              <DeleteIcon />
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.font2}>
          {PrintPrice(budgetList[Budget].budgetLimit)}
        </Text>
        {/* expenses */}
        <ProgressBar
          current={budgetList[Budget].budgetUse}
          total={budgetList[Budget].budgetLimit}
        />
        <Text style={styles.font3}>{printStringPrice(budgetList[Budget].budgetUse)}</Text>
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
