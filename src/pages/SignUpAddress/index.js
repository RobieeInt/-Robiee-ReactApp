import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Gap, Header, Select, TextInput} from '../../components';

const SignUpAddress = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        title="Masukkan Alamat"
        subTitle="Pastikan Diisi Dengan Benar Yah.."
        onBack={() => {}}
      />
      <View style={styles.container}>
        <TextInput label="No. Handphone" placeholder="Masukkan Nomor" />
        <Gap height={16} />
        <TextInput label="Alamat Rumah" placeholder="Masukkan Alamat" />
        <Gap height={16} />
        <TextInput label="No. Rumah" placeholder="Masukkan No.Rumah" />
        <Gap height={16} />
        <Select label="Kota" />
        <Gap height={24} />
        <Button
          text="Daftar Sekarang"
          onPress={() => navigation.replace('SuccessSignUp')}
        />
      </View>
      <Text>Daftar Baru</Text>
    </View>
  );
};

export default SignUpAddress;

const styles = StyleSheet.create({
  page: {flex: 1},
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 24,
    flex: 1,
  },
});
