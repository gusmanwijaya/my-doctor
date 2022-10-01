import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useState} from 'react';
import {colors, fonts} from '../../../utils';

const Input = ({
  onChangeText,
  secureTextEntry,
  label,
  value,
  disabled,
  keyboardType = 'default',
}) => {
  const [border, setBorder] = useState(colors.border);

  const onFocus = () => {
    setBorder(colors.tertiary);
  };

  const onBlur = () => {
    setBorder(colors.border);
  };

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        onFocus={onFocus}
        onBlur={onBlur}
        style={styles.input(border)}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        editable={!disabled}
        selectTextOnFocus={!disabled}
        keyboardType={keyboardType}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    color: colors.text.secondary,
    marginBottom: 6,
    fontFamily: fonts.primary[400],
  },
  input: border => ({
    borderWidth: 1,
    borderColor: border,
    borderRadius: 10,
    padding: 12,
  }),
});
