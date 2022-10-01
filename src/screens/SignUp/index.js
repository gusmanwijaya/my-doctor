import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, Gap, Header, Input} from '../../components';
import {colors} from '../../utils';

const SignUp = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.page}>
      <Header title="Daftar Akun" onPress={() => navigation.pop()} />
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Input label="Nama Lengkap" />
          <Gap height={24} />
          <Input label="Pekerjaan" />
          <Gap height={24} />
          <Input label="Email Address" keyboardType="email-address" />
          <Gap height={24} />
          <Input label="Password" secureTextEntry={true} />
          <Gap height={40} />
          <Button
            title="Continue"
            onPress={() => navigation.navigate('UploadPhoto')}
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    flex: 1,
    padding: 40,
    paddingTop: 0,
  },
});
