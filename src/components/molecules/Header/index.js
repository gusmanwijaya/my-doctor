import {Platform, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Gap} from '../../atoms';
import {colors, fonts} from '../../../utils';
import DarkProfile from './DarkProfile';

const Header = ({onPress, title, type, photo, desc}) => {
  switch (type) {
    case 'dark-profile':
      return (
        <DarkProfile
          onPress={onPress}
          title={title}
          desc={desc}
          photo={photo}
        />
      );

    default:
      return (
        <View style={styles.container(type)}>
          <Button
            type="icon-only"
            icon={type === 'dark' ? 'back-light' : 'back-dark'}
            onPress={onPress}
          />
          <Text style={styles.text(type)}>{title}</Text>
          <Gap width={24} />
        </View>
      );
  }
};

export default Header;

const styles = StyleSheet.create({
  container: type => ({
    paddingHorizontal: 16,
    paddingTop: Platform.OS === 'android' ? 30 : Platform.OS === 'ios' && 60,
    paddingBottom: 30,
    backgroundColor: type === 'dark' ? colors.secondary : colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomLeftRadius: type === 'dark' ? 20 : 0,
    borderBottomRightRadius: type === 'dark' ? 20 : 0,
  }),
  text: type => ({
    textAlign: 'center',
    flex: 1,
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: type === 'dark' ? colors.white : colors.text.primary,
    textTransform: 'capitalize',
  }),
});
