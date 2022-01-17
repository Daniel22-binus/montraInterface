import React from 'react';
import {Text, StyleSheet, Dimensions} from 'react-native';
import {PieChart} from 'react-native-svg-charts';

const PieChartReact = () => {
  const data = [
    {
      key: 1,
      amount: 50,
      svg: {fill: '#600080'},
    },
    {
      key: 2,
      amount: 50,
      svg: {fill: '#9900cc'},
    },
    {
      key: 3,
      amount: 40,
      svg: {fill: '#c61aff'},
    },
    {
      key: 4,
      amount: 95,
      svg: {fill: '#d966ff'},
    },
    {
      key: 5,
      amount: 35,
      svg: {fill: '#ecb3ff'},
    },
  ];

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const stylePieComponent = (pieCentroid, height) => {
    return {
      top: pieCentroid[1] + height * 0.45,
      left: windowWidth / 2 + pieCentroid[0] - 10,
      fontSize: 24,
      position: 'absolute',
    };
  };

  const Labels = ({slices, height, width}) => {
    // console.log(slices)
    return slices.map((slice, index) => {
      const {labelCentroid, pieCentroid, data} = slice;
      // console.log('==============');
      // console.log(slice);
      return (
        <Text
          key={index}
          // x={pieCentroid[0]}
          // y={pieCentroid[1]}
          style={stylePieComponent(pieCentroid, height)}
          // fill={'white'}
          // textAnchor={'middle'}
          // alignmentBaseline={'middle'}
          // fontSize={24}
          // stroke={'black'}
          strokeWidth={0.2}>
          {data.amount}
        </Text>
      );
    });
  };

  return (
    <PieChart
      style={styles.container}
      data={data}
      valueAccessor={({item}) => item.amount}
      space={0}
      innerRadius={'60%'}
      outerRadius={'95%'}>
      <Text style={styles.text}>January</Text>
      <Labels height={styles.container.height} />
    </PieChart>
  );
};

export default PieChartReact;

const styles = StyleSheet.create({
  container: {
    height: 300,
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
