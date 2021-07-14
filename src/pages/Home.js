import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import PieChartReact from '../components/HomeComponent/PieChartReact';

const Home = ({navigation}) => {
  return (
    <View>
      <PieChartReact />
      <Button
          onPress={() => navigation.navigate('Notifications')}
          title="Go to notifications"
        />
        <Text>Daniel</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
