import React from 'react';
import {StyleSheet, View, useWindowDimensions} from 'react-native';
import {TabView} from 'react-native-tab-view';
import HomeAll from './HomeAll';
import Header from '../../components/Header';
import HomeAnother from './HomeAnother';

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
        return <HomeAnother navigation={navigation} /> ;
    }
  };

  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'All'},
    {key: 'second', title: 'empty'},
    {key: 'third', title: 'konsumsi'},
  ]);

  return (
    <>
      <Header navigation={navigation} />
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
      />
    </>
  );
};

export default Home;

const styles = StyleSheet.create();
