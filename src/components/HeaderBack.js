import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {BackIcon} from '../assets/icons';
import {BOLD_FONT, TITLE_COLOR} from '../constant';

const HeaderBack = ({navigation, title}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <View style={styles.icon}>
          <BackIcon />
          {/* <Text> &#11013; </Text> */}
        </View>
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default HeaderBack;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 18,
    marginBottom: 18,
  },
  icon: {
    marginTop: 3,
    marginHorizontal: 12,
  },
  title: {
    fontFamily: BOLD_FONT,
    color: TITLE_COLOR,
    fontSize: 18,
  },
});
