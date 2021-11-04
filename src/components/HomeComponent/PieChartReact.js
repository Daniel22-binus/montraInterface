import React from 'react';
import {Text, StyleSheet, Dimensions} from 'react-native';
import {PieChart} from 'react-native-svg-charts';
import {GREEN_COLOR, PRIMARY_COLOR} from '../../constant';

const PieChartReact = () => {
  const data = [50, 10, 40, 95, 85, 91, 35, 53, 24, 50];
  const randomColor = (index) => {
    if (index % 2 == 0) {
      return PRIMARY_COLOR;
    } else {
      return GREEN_COLOR;
    }
  };

  const pieData = data
    .filter(value => value > 0)
    .map((value, index) => ({
      value,
      svg: {
        fill: randomColor(index),
        onPress: () => console.log('press', index, 'and value', value),
      },
      key: `pie-${index}`,
    }));

  return (
    <PieChart
      style={styles.container}
      data={pieData}
      space={0}
      innerRadius={'60%'}
      outerRadius={'95%'}>
      <Text style={styles.text}>January</Text>
    </PieChart>
  );
};

export default PieChartReact;

const styles = StyleSheet.create({
  container: {
    height: 200,
    marginVertical: 12,
    backgroundColor: 'white',
  },
  text: {
    color: 'red',
    top: 85,
    textAlign: 'center',
    fontSize: 18,
  },
});
