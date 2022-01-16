import React, {useState, useRef, useEffect} from 'react';
import {Animated, StyleSheet, View} from 'react-native';
import {GRAY_COLOR, PROGRESSBAR_COLOR} from '../../constant';

const ProgressBar = ({current, total}) => {
  const [width, setWidth] = useState(0);
  const animatedValue = useRef(new Animated.Value(-1000)).current;
  const reactive = useRef(new Animated.Value(-1000)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: reactive,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, []);

  useEffect(() => {
    reactive.setValue(-width + (width * current) / total);
  }, [current, width]);

  return (
    <View style={{marginBottom: 5}}>
      <View
        onLayout={e => {
          const newWidth = e.nativeEvent.layout.width;
          setWidth(newWidth);
        }}
        style={styles.progressBoxStyle}>
        <Animated.View
          style={[
            styles.progressBarStyle,
            {transform: [{translateX: animatedValue}]},
          ]}
        />
      </View>
    </View>
  );
};

export default ProgressBar;

const styles = StyleSheet.create({
  progressBoxStyle: {
    height: 20,
    backgroundColor: GRAY_COLOR,
    borderRadius: 20,
    overflow: 'hidden',
  },
  progressBarStyle: {
    height: 20,
    borderRadius: 20,
    width: '100%',
    backgroundColor: PROGRESSBAR_COLOR,
    position: 'absolute',
    left: 0,
    top: 0,
  },
});
