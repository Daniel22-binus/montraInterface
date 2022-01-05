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
            // styles.progressBarStyle,
            checkProgress(current, total),
            {transform: [{translateX: animatedValue}]},
          ]}
        />
      </View>
    </View>
  );
};

const checkProgress = (current, total) => {
  //limit 0.8
  let limit = total * 0.8;

  if (current > limit) {
    return styles.progressBarStyleLimit;
  } else if (current < limit) {
    return styles.progressBarStyle;
  }
};

export default ProgressBar;

const styles = StyleSheet.create({
  progressBoxStyle: {
    height: 20,
    backgroundColor: GRAY_COLOR,
    borderRadius: 20,
    overflow: 'hidden',
  },
  progressBarStyleLimit: {
    height: 20,
    borderRadius: 20,
    width: '100%',
    backgroundColor: 'red',
    position: 'absolute',
    left: 0,
    top: 0,
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
