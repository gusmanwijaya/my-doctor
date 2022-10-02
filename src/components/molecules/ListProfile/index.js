import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  IconNext,
  IconEditProfile,
  IconLanguage,
  IconRate,
  IconHelp,
} from '../../../assets';
import {colors, fonts} from '../../../utils';

const ListProfile = ({photo, name, desc, type, onPress, icon}) => {
  const Icon = () => {
    switch (icon) {
      case 'edit-profile':
        return <IconEditProfile />;

      case 'language':
        return <IconLanguage />;

      case 'rate':
        return <IconRate />;

      case 'help':
        return <IconHelp />;

      default:
        return <IconEditProfile />;
    }
  };

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.content}>
        {icon ? <Icon /> : <Image source={photo} style={styles.photo} />}
        <View style={styles.containerText}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.desc}>{desc}</Text>
        </View>
      </View>
      {type === 'next' && <IconNext />}
    </TouchableOpacity>
  );
};

export default ListProfile;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderColor: colors.border,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerText: {
    marginLeft: 18,
  },
  photo: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.primary.normal,
    color: colors.text.primary,
    textTransform: 'capitalize',
  },
  desc: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.secondary,
  },
});
