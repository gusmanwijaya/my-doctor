import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Button, Gap, Header, Link} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {colors, fonts} from '../../utils';
import {ILNullPhoto, IconAddPhoto} from '../../assets';

const UploadPhoto = () => {
  const navigation = useNavigation();

  const handleGoBack = () => navigation.pop();

  return (
    <View style={styles.page}>
      <Header title="Upload Photo" onPress={handleGoBack} />
      <View style={styles.content}>
        <View style={styles.containerPhoto}>
          <TouchableOpacity style={styles.avatarWrapper}>
            <Image source={ILNullPhoto} style={styles.avatar} />
            <View style={styles.icon}>
              <IconAddPhoto />
            </View>
          </TouchableOpacity>
          <Gap height={26} />
          <Text style={styles.name}>Gusman Wijaya, S.Kom</Text>
          <Text style={styles.profession}>React Native Developer</Text>
        </View>
        <View>
          <Button title="Upload and Continue" disabled={true} />
          <Gap height={30} />
          <Link
            title="Skip for this"
            size={16}
            align="center"
            onPress={() =>
              navigation.reset({
                index: 0,
                routes: [
                  {
                    name: 'BottomTabs',
                  },
                ],
              })
            }
          />
        </View>
      </View>
    </View>
  );
};

export default UploadPhoto;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 40,
    paddingBottom: 64,
  },
  containerPhoto: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarWrapper: {
    width: 130,
    height: 130,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 130 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
  },
  icon: {
    position: 'absolute',
    bottom: 8,
    right: 6,
  },
  name: {
    fontSize: 24,
    color: colors.text.primary,
    fontFamily: fonts.primary[600],
    textAlign: 'center',
  },
  profession: {
    fontSize: 18,
    fontFamily: fonts.primary.normal,
    textAlign: 'center',
    color: colors.text.secondary,
    marginTop: 4,
  },
});
