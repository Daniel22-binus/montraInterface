import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const ForgetPasswordScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Forget Password Screen</Text>
      <Button title="Click here" onPress={() => alert('Button Clciked')} />
    </View>
  );
};

export default ForgetPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
