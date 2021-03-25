import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IlBerger} from '../../../assets';
import {Button, Gap} from '../../atoms';

const EmptyOrder = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <IlBerger />
      <Gap height={30} />
      <Text style={styles.Text1}>Kamu Belum memesan</Text>
      <Gap height={6} />
      <Text style={styles.Text2}>Kalau sudah pesan bisa diliat disini</Text>
      <Text style={styles.Text2}>Oke Sekarang saatnya ...</Text>
      <Gap height={30} />
      <View style={styles.ButtonContainer}>
        <Button
          text="Cari Jajanan"
          onPress={() => navigation.replace('MainApp')}
        />
      </View>
    </View>
  );
};

export default EmptyOrder;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  Text1: {fontSize: 28, fontFamily: 'Poppins-Medium', color: 'black'},
  Text2: {
    fontSize: 15,
    fontFamily: 'Poppins-Light',
    color: '#8D92A3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ButtonContainer: {width: '100%', paddingHorizontal: 80},
});
