import React from 'react';
import {ImageBackground, Platform, StyleSheet, Text, View} from 'react-native';
import {
  DummyHospital1,
  DummyHospital2,
  DummyHospital3,
  ILHospitalBG,
} from '../../../assets';
import ListHospital from '../../../components/molecules/ListHospital';
import {colors, fonts} from '../../../utils';

const Hospitals = () => {
  return (
    <View style={styles.page}>
      <ImageBackground source={ILHospitalBG} style={styles.background}>
        <Text style={styles.textTitle}>Nearby Hospitals</Text>
        <Text style={styles.textSubTitle}>3 tersedia</Text>
      </ImageBackground>
      <View style={styles.content}>
        <ListHospital
          type="Rumah Sakit"
          name="Citra Bunga Merdeka"
          address="Jln. Surya Sejahtera 20"
          photo={DummyHospital1}
        />
        <ListHospital
          type="Rumah Sakit Anak"
          name="Happy Family Kids"
          address="Jln. Surya Sejahtera 20"
          photo={DummyHospital2}
        />
        <ListHospital
          type="Rumah Sakit Jiwa"
          name="Tingkatan Paling Atas"
          address="Jln. Surya Sejahtera 20"
          photo={DummyHospital3}
        />
      </View>
    </View>
  );
};

export default Hospitals;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  background: {
    height: 240,
    paddingTop: Platform.OS === 'android' ? 30 : Platform.OS === 'ios' && 50,
  },
  textTitle: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.white,
    textAlign: 'center',
    marginBottom: 6,
  },
  textSubTitle: {
    fontSize: 14,
    fontFamily: fonts.primary[300],
    color: colors.white,
    textAlign: 'center',
  },
  content: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: 20,
    marginTop: -30,
    paddingTop: 14,
  },
});
