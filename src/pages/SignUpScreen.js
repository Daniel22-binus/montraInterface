import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const SignUpScreen = () => {
  return (
    <View style={styles.container}>
      <Text>SignUp Screen</Text>
      <Button title="Click here" onPress={() => alert('Button Clciked')} />
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
