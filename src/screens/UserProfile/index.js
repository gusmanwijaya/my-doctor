import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {DummyUser} from '../../assets';
import {Gap, Header, ListProfile, Profile} from '../../components';
import {colors} from '../../utils';

const UserProfile = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.page}>
      <Header title="Profile" onPress={() => navigation.pop()} />
      <Gap height={10} />
      <Profile
        name="Gusman Wijaya, S.Kom"
        profession="React Native Developer"
        photo={DummyUser}
      />
      <Gap height={14} />
      <ListProfile
        name="Edit Profile"
        desc="Last update yesterday"
        type="next"
        icon="edit-profile"
        onPress={() => navigation.navigate('EditProfile')}
      />
      <ListProfile
        name="Languange"
        desc="Available 12 languages"
        type="next"
        icon="language"
      />
      <ListProfile
        name="Give Us Rate"
        desc="On google play store"
        type="next"
        icon="rate"
      />
      <ListProfile
        name="Sign Out"
        desc="Sign out from application"
        type="next"
        icon="help"
      />
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
