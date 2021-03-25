import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {ujang} from '../../../assets';

const HomeProfile = () => {
  return (
    <View style={styles.profileContainer}>
      <View>
        <Text style={styles.appName}>Jhajan</Text>
        <Text style={styles.descName}>Mau Jhajan Apa ya Hari ini</Text>
      </View>
      <Image source={ujang} style={styles.profile} />
    </View>
  );
};

export default HomeProfile;

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 24,
    backgroundColor: 'white',
  },

  appName: {fontSize: 22, fontFamily: 'Poppins-Medium', color: '#020202'},
  descName: {fontSize: 14, fontFamily: 'Poppins-Light', color: '#8D92A3'},
  profile: {width: 50, height: 50, borderRadius: 8},
});
