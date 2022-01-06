import React from 'react';
import {StyleSheet, View, useWindowDimensions} from 'react-native';
import {TabView, TabBar} from 'react-native-tab-view';
import HomeAll from './HomeAll';
import Header from '../../components/Header';
import HomeAnother from './HomeAnother';
import {BOLD_FONT, TITLE_COLOR, REGULAR_FONT} from '../../constant';

const Home = ({navigation}) => {
  const SecondRoute = () => (
    <View style={{flex: 1, backgroundColor: '#673ab7'}} />
  );

  const renderScene = ({route}) => {
    switch (route.key) {
      case 'first':
        return <HomeAll navigation={navigation} />;
      case 'second':
        return <SecondRoute />;
      case 'third':
        return <HomeAnother navigation={navigation} />;
    }
  };

  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'All'},
    {key: 'second', title: '1234567890'},
    {key: 'third', title: 'konsumsi'},
  ]);

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
