import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  IconDoctor,
  IconDoctorActive,
  IconHospitals,
  IconHospitalsActive,
  IconMessages,
  IconMessagesActive,
} from '../../../assets';
import {colors, fonts} from '../../../utils';

const ButtomTabItem = ({title, active, onPress, onLongPress}) => {
  const Icon = () => {
    switch (title) {
      case 'Doctor':
        return active ? <IconDoctorActive /> : <IconDoctor />;

      case 'Messages':
        return active ? <IconMessagesActive /> : <IconMessages />;

      case 'Hospitals':
        return active ? <IconHospitalsActive /> : <IconHospitals />;

      default:
        return <IconDoctor />;
    }
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon />
      <Text style={styles.text(active)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtomTabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: active => ({
    fontSize: 10,
    color: active ? colors.text.menuActive : colors.text.menuInactive,
    fontFamily: fonts.primary[600],
    marginTop: 4,
  }),
});
