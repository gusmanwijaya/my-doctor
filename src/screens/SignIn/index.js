import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {ILLogo} from '../../assets';
import {Button, Gap, Input, Link} from '../../components';
import {colors, fonts} from '../../utils';

const SignIn = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Gap
          height={Platform.OS === 'android' ? 40 : Platform.OS === 'ios' && 60}
        />
        <ILLogo />
        <Text style={styles.text}>Masuk dan mulai berkonsultasi</Text>
        <Input
          label="Email Address"
          keyboardType="email-address"
          secureTextEntry={false}
        />
        <Gap height={24} />
        <Input label="Password" secureTextEntry={true} />
        <Gap height={40} />
        <Button title="Sign In" />
        <Gap height={30} />
        <Link
          title="Create New Account"
          size={16}
          align="center"
          onPress={() => navigation.navigate('SignUp')}
        />
      </ScrollView>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 40,
  },
  text: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginVertical: 40,
    maxWidth: 153,
  },
});
