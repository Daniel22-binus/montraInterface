import React, {useCallback} from 'react';
import {StyleSheet, View, useWindowDimensions} from 'react-native';
import {TabView, TabBar} from 'react-native-tab-view';
import HomeAll from './HomeAll';
import Header from '../../components/Header';
import HomeAnother from './HomeAnother';
import {BOLD_FONT, TITLE_COLOR, REGULAR_FONT} from '../../constant';
import PieChartReact from '../../components/HomeComponent/PieChartReact';
import budgetHook from '../../hooks/budgetHook';
import {useFocusEffect} from '@react-navigation/native';
import {objectToList} from '../../logic/firebaseFunction';

const Home = ({navigation}) => {
  const [budgetList, getBudget] = budgetHook();

  const listTab = [{key: 'first', title: 'All'}, {key:'second', title: '1234567890'}];

  useFocusEffect(
    useCallback(() => {
      getBudget(new Date());
      // addTab();
    }, []),
  );

  const addTab = () => {
    objectToList(budgetList.results).map(i => {
      let Budget = budgetList.results[i];
      listTab.push({
        key: Budget.id,
        title: Budget.budgetCategory,
      });
    });
    listTab.push({
      key: 9,
      title: '1234567890',
    });
    console.log(listTab);
  };

  const SecondRoute = () => (
    <View style={{flex: 1, backgroundColor: '#673ab7'}}>
      <PieChartReact />
    </View>
  );

  const renderScene = ({route}) => {
    if (route.key == 'first') return <HomeAll navigation={navigation} />;
    if (route.key == 'second') return <SecondRoute />;

    objectToList(budgetList.results).map(Budget => {
      if (route.key == budgetList.results[Budget].id) {
        return <HomeAnother navigation={navigation} />;
      }
    });
  };

  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState(listTab);

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={TabBarStyles.indicatorStyle}
      labelStyle={{fontFamily: BOLD_FONT}}
      style={TabBarStyles.tabContainer}
      inactiveColor={'white'}
      activeColor={TITLE_COLOR}
      scrollEnabled={true}
      tabStyle={TabBarStyles.tabStyle}
      bounces={true}
    />
  );

  return (
    <>
      <Header navigation={navigation} />
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
        renderTabBar={renderTabBar}
      />
    </>
  );
};

export default Home;

const TabBarStyles = StyleSheet.create({
  tabStyle: {
    width: 120,
  },
  tabContainer: {
    backgroundColor: TITLE_COLOR,
  },
  indicatorStyle: {
    backgroundColor: 'white',
    height: 48,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
});
