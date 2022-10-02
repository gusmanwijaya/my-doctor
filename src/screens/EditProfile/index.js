import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {DummyUser} from '../../assets';
import {Button, Gap, Header, Input, Profile} from '../../components';
import {colors} from '../../utils';

const EditProfile = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.page}>
      <Header title="Edit Profile" onPress={() => navigation.pop()} />
      <Profile isRemove={true} photo={DummyUser} />
      <Gap height={26} />
      <View style={styles.content}>
        <Input label="Full Name" />
        <Gap height={24} />
        <Input label="Pekerjaan" />
        <Gap height={24} />
        <Input
          label="Email Address"
          disabled={true}
          keyboardType="email-address"
        />
        <Gap height={24} />
        <Input label="Password" secureTextEntry={true} />
        <Gap height={40} />
        <Button title="Save Profile" />
      </View>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    paddingHorizontal: 40,
  },
});
