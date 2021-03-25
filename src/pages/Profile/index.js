import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ujang} from '../../assets';
import {Gap} from '../../components/atoms';
import {ProfileTabSec} from '../../components/molecules';

const Profile = () => {
  return (
    <View style={styles.page}>
      <View style={styles.detailProfile}>
        <View style={styles.Foto}>
          <View style={styles.borderFoto}>
            <Image style={styles.fotoContainer} source={ujang} />
          </View>
        </View>
        <Text style={styles.name}>Ujang Lesmana</Text>
        <Text style={styles.email}>ujangtampan@gmail.com</Text>
      </View>
      <Gap height={24} />
      <View style={styles.content}>
        <ProfileTabSec />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  page: {flex: 1},

  detailProfile: {backgroundColor: 'white', paddingBottom: 26},
  Foto: {alignItems: 'center', marginTop: 26, marginBottom: 16},
  borderFoto: {
    borderWidth: 1,
    borderColor: '#8D92A3',
    width: 110,
    height: 110,
    borderRadius: 110,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fotoContainer: {
    width: 90,
    height: 90,
    borderRadius: 90,
    backgroundColor: '#f0f0f0',
    padding: 24,
  },
  name: {
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
    color: '#020202',
    textAlign: 'center',
  },
  email: {
    fontSize: 13,
    fontFamily: 'Poppins-Light',
    color: '#8D92A3',
    textAlign: 'center',
  },
  content: {flex: 1},
});
