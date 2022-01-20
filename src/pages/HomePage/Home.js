import React from 'react';
import {StyleSheet, View, useWindowDimensions} from 'react-native';
import {TabView, TabBar} from 'react-native-tab-view';
import HomeAll from './HomeAll';
import Header from '../../components/Header';
import HomeAnother from './HomeAnother';
import {BOLD_FONT, TITLE_COLOR} from '../../constant';
import expenseHook from '../../hooks/expenseHook';

const Home = ({navigation}) => {
  const listTab = [
    {key: 'first', title: 'All'},
    {key: 0, title: 'konsumsi'},
    {key: 1, title: 'Edukasi'},
    {key: 2, title: 'Transport'},
  ];

  const [historyList] = expenseHook();

  const renderScene = ({route}) => {
    if (route.key == 'first') return <HomeAll navigation={navigation} />;
    else if (route.key == 0)
      return (
        <HomeAnother
          navigation={navigation}
          historyList={historyList}
          budget={{
            id: 1,
            budgetCategory: 'Konsumsi',
            budgetLimit: 850000,
            budgetUse: 85000,
          }}
        />
      );
    else if (route.key == 1)
      return (
        <HomeAnother
          navigation={navigation}
          historyList={historyList}
          budget={{
            id: 2,
            budgetCategory: 'Edukasi',
            budgetLimit: 1100000,
            budgetUse: 1000000,
          }}
        />
      );
    else if (route.key == 2)
      return (
        <HomeAnother
          navigation={navigation}
          historyList={historyList}
          budget={{
            id: 3,
            budgetCategory: 'Konsumsi',
            budgetLimit: 1000000,
            budgetUse: 604000,
          }}
        />
      );
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
