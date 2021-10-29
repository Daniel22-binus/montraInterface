import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import HeaderBack from '../../components/HeaderBack';
import {BOLD_FONT, PRIMARY_FONT, TITLE_COLOR} from '../../constant';
import PlanningItem from '../../components/PlanningComponent/PlanningItem';
import {Add1Icon} from '../../assets/icons';
import planningHook from '../../hooks/planningHook';

const Planning = ({navigation}) => {
  const [
    planningList,
    addPlanItem,
    editPlanItem,
    deletePlanItem,
    setStateNeed,
  ] = planningHook();

  return (
    <View style={styles.container}>
      <HeaderBack navigation={navigation} title="Planning" />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Hai, </Text>
        <Text style={styles.userTitle}>User &#128400;</Text>
      </View>
      <Text style={styles.title2}>here’s your ongoing planning</Text>

      <View style={{marginTop: 25}}>
        <ScrollView horizontal={true}>
          {planningList.results.map(planning => (
            <PlanningItem
              key={planning.id}
              planning={planning}
              editPlanItem={editPlanItem}
              deletePlanItem={deletePlanItem}
              setStateNeed={setStateNeed}
              navigation={navigation}
            />
          ))}

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('PlanningAdd', {
                getPlan: {
                  id: 0,
                  title: '',
                  description: '',
                  needs: [
                    {id: '', needName: '', needPrice: '', needState: false},
                  ],
                },
                FormAction: addPlanItem,
                TitleBtn: 'Add',
              });
            }}>
            <View style={addBtnStyle.addBorder}>
              <View style={addBtnStyle.containerImg}>
                <Add1Icon />
                <Text style={addBtnStyle.text}>Add Planning</Text>
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <TouchableOpacity
        onPress={() => {
          planningList.results.map(plan => {
            console.log(plan);
          });
        }}>
        <Text>Print</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Planning;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  titleContainer: {
    flexDirection: 'row',
    marginLeft: windowWidth * 0.03,
  },
  title: {
    fontFamily: PRIMARY_FONT,
    fontSize: 22,
    color: TITLE_COLOR,
  },
  userTitle: {
    fontFamily: BOLD_FONT,
    fontSize: 22,
    color: TITLE_COLOR,
  },
  title2: {
    fontFamily: PRIMARY_FONT,
    fontSize: 20,
    color: TITLE_COLOR,
    marginLeft: windowWidth * 0.03,
  },
});

const addBtnStyle = StyleSheet.create({
  addBorder: {
    //size
    width: windowWidth * 0.75,
    height: windowHeight * 0.5,
    marginHorizontal: windowWidth * 0.05,

    //shadow
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,

    //border
    borderRadius: 40,
    borderColor: TITLE_COLOR,
    borderStyle: 'solid',
    borderWidth: 5,
    backgroundColor: 'white',
  },
  containerImg: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  text: {
    fontFamily: BOLD_FONT,
    color: TITLE_COLOR,
    fontSize: 14,
  },
});
