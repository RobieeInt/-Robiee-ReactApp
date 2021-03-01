import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Success} from '../../assets';
import {Button, Gap} from '../../components';

const SuccessSignUp = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Success />
      <Gap height={30} />
      <Text style={styles.Text1}>Sukses Terdaftar</Text>
      <Gap height={6} />
      <Text style={styles.Text2}>Sekarang Kamu Bisa Pilih</Text>
      <Text style={styles.Text2}>Dan Nikmati Jhajanan Sesukamu</Text>
      <Gap height={30} />
      <View style={styles.ButtonContainer}>
        <Button
          text="Temukan Jhajanan Yuk"
          onPress={() => navigation.replace('MainApp')}
        />
      </View>
    </View>
  );
};

export default SuccessSignUp;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
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
