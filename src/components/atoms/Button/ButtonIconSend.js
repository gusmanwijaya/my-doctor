import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {IconSendDark, IconSendLight} from '../../../assets';
import {colors} from '../../../utils';

const ButtonIconSend = ({disabled, onPress}) => {
  if (disabled) {
    return (
      <View style={styles.container(disabled)}>
        <IconSendDark />
      </View>
    );
  }

  return (
    <TouchableOpacity onPress={onPress} style={styles.container(disabled)}>
      <IconSendLight />
    </TouchableOpacity>
  );
};

export default ButtonIconSend;

const styles = StyleSheet.create({
  container: disabled => ({
    backgroundColor: disabled ? colors.disable : colors.tertiary,
    width: 45,
    height: 45,
    borderRadius: 10,
    paddingTop: 3,
    paddingRight: 3,
    paddingBottom: 8,
    paddingLeft: 8,
  }),
});
