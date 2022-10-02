import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';

const ListHospital = ({type, name, address, photo}) => {
  return (
    <View style={styles.page}>
      <Image source={photo} style={styles.image} />
      <View>
        <Text style={styles.textType}>{type}</Text>
        <Text style={styles.textName}>{name}</Text>
        <Text style={styles.textAddress}>{address}</Text>
      </View>
    </View>
  );
};

export default ListHospital;

const styles = StyleSheet.create({
  page: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  image: {
    width: 80,
    height: 60,
    borderRadius: 10,
    marginRight: 16,
    resizeMode: 'cover',
  },
  textType: {
    fontSize: 16,
    fontFamily: fonts.primary.normal,
    color: colors.text.primary,
    textTransform: 'capitalize',
  },
  textName: {
    fontSize: 16,
    fontFamily: fonts.primary.normal,
    color: colors.text.primary,
    textTransform: 'capitalize',
    marginBottom: 6,
  },
  textAddress: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.secondary,
    textTransform: 'capitalize',
  },
});
