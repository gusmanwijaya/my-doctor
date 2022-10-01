import {Image, Platform, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button} from '../../atoms';
import {colors, fonts} from '../../../utils';

const DarkProfile = ({onPress, title, desc, photo}) => {
  return (
    <View style={styles.container}>
      <Button type="icon-only" icon="back-light" onPress={onPress} />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.desc}>{desc}</Text>
      </View>
      <Image source={photo} style={styles.avatar} />
    </View>
  );
};

export default DarkProfile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    paddingTop: Platform.OS === 'android' ? 30 : Platform.OS === 'ios' && 60,
    paddingBottom: 30,
    paddingLeft: 20,
    paddingRight: 16,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.white,
    textAlign: 'center',
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
  },
  desc: {
    fontSize: 14,
    fontFamily: fonts.primary.normal,
    marginTop: 6,
    textAlign: 'center',
    color: colors.text.subTitle,
  },
});
