import React from 'react';
import {StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import HomeAll from './HomeAll';

const Home = ({navigation}) => {

  const SecondRoute = () => (
    <View style={{flex: 1, backgroundColor: '#673ab7'}} />
  );

  const renderScene = SceneMap({
    first: HomeAll,
    second: SecondRoute,
  });

  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'All'},
    {key: 'second', title: 'Second'},
  ]);

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
    />
  );
};

export default Home;

const styles = StyleSheet.create({});
