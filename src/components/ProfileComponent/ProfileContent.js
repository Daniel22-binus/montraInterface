import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {BOLD_FONT, TITLE_COLOR} from '../../constant';
import {WrongDefault} from '../../assets';

const ProfileContent = ({name, email, phone, image}) => {
  return (
      <View style={styles.container}>
        {/* <Image style={styles.profilePhoto} name={image}/> */}
        {/* <Image style={styles.profilePhoto}> {image}</Image> */}
        <Text style={styles.nameFont}>{name}</Text>
        <Text style={styles.profileFont}>{email}</Text>
        <Text style={styles.profileFont}>{phone}</Text>
      </View>
  );
};

export default ProfileContent;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  profilePhoto: {
    width: 110,
    height: 110,
  },
  nameFont: {
    fontSize: 20,
    fontFamily: BOLD_FONT,
    color: TITLE_COLOR,
  },
  profileFont: {
    fontSize: 19,
    color: TITLE_COLOR,
  },
});
