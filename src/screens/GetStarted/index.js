import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ImageBackground, Platform, StyleSheet, Text, View} from 'react-native';
import {ILGetStarted, ILLogo} from '../../assets';
import {Button, Gap} from '../../components';
import {colors, fonts} from '../../utils';

const GetStarted = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground source={ILGetStarted} style={styles.page}>
      <View>
        {Platform.OS === 'ios' && <Gap height={20} />}
        <ILLogo />
        <Text style={styles.title}>
          Konsultasi dengan dokter jadi lebih mudah & fleksibel
        </Text>
      </View>
      <View>
        <Button
          title="Get Started"
          onPress={() => navigation.navigate('SignUp')}
        />
        <Gap height={16} />
        <Button
          title="Sign In"
          type="secondary"
          onPress={() => navigation.replace('SignIn')}
        />
        {Platform.OS === 'ios' && <Gap height={20} />}
      </View>
    </ImageBackground>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    padding: 40,
    backgroundColor: colors.white,
    justifyContent: 'space-between',
  },
  title: {
    marginTop: 91,
    fontFamily: fonts.primary[600],
    fontSize: 28,
    color: colors.white,
    maxWidth: Platform.OS === 'android' ? 234 : Platform.OS === 'ios' && 235,
  },
});
