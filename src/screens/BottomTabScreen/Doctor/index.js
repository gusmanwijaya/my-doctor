import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {
  DummyDoctor10,
  DummyDoctor11,
  DummyDoctor2,
  DummyDoctor9,
  DummyNews1,
  DummyNews2,
  DummyNews3,
} from '../../../assets';
import {
  DoctorCategory,
  Gap,
  HomeProfile,
  NewsItem,
  RatedDoctor,
} from '../../../components';
import {colors, fonts} from '../../../utils';

const Doctor = () => {
  const profile = {
    fullName: 'Gusman Wijaya, S.Kom',
    profession: 'React Native Developer',
    photo: DummyDoctor2,
  };

  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.wrapperSection}>
            <Gap
              height={
                Platform.OS === 'android' ? 30 : Platform.OS === 'ios' && 50
              }
            />
            <HomeProfile profile={profile} />
          </View>
          <View style={styles.wrapperSection}>
            <Gap height={30} />
            <Text style={styles.textWelcome}>
              Mau konsultasi dengan siapa hari ini?
            </Text>
            <Gap height={16} />
            <View>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.category}>
                  <DoctorCategory category="dokter umum" />
                  <DoctorCategory category="psikiater" />
                  <DoctorCategory category="dokter obat" />
                  <DoctorCategory category="dokter umum" />
                </View>
              </ScrollView>
            </View>
          </View>
          <View style={styles.wrapperSection}>
            <Gap height={30} />
            <Text style={styles.sectionLabel}>Top Rated Doctors</Text>
            <Gap height={16} />
            <View>
              <RatedDoctor
                name="Alexa Rachel"
                category="Prediatrician"
                photo={DummyDoctor11}
              />
              <RatedDoctor
                name="Sunny Frank"
                category="Dentist"
                photo={DummyDoctor10}
              />
              <RatedDoctor
                name="Poe Min"
                category="Prediatrician"
                photo={DummyDoctor9}
              />
            </View>
          </View>
          <View style={styles.wrapperSection}>
            <Gap height={30} />
            <Text style={styles.sectionLabel}>Good News</Text>
            <Gap height={16} />
            <View>
              <NewsItem
                title="Is it safe to stay at home during coronavirus?"
                date="Today"
                photo={DummyNews1}
              />
              <NewsItem
                title="Consume yellow citrus helps you healthier"
                date="Today"
                photo={DummyNews2}
              />
              <NewsItem
                title="Learn how to make a proper orange juice at home"
                date="Today"
                photo={DummyNews3}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Doctor;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  content: {
    flex: 1,
    backgroundColor: colors.white,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  wrapperSection: {
    paddingHorizontal: 16,
  },
  textWelcome: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    maxWidth: 209,
  },
  category: {
    flexDirection: 'row',
  },
  sectionLabel: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    textTransform: 'capitalize',
    color: colors.text.primary,
  },
});
