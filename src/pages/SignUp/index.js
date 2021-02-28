import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header, TextInput, Gap, Button} from '../../components';

const SignUp = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        title="Daftar Baru"
        subTitle="Daftar dan Jhajan"
        onBack={() => {}}
      />
      <View style={styles.container}>
        <View style={styles.Foto}>
          <View style={styles.borderFoto}>
            <View style={styles.fotoContainer}>
              <Text style={styles.addFoto}>Add Foto</Text>
            </View>
          </View>
        </View>
        <TextInput label="Nama Lengkap" placeholder="Masukkan Email" />
        <Gap height={16} />
        <TextInput label="Alamat Email" placeholder="Masukkan Password" />
        <Gap height={24} />
        <TextInput label="Password" placeholder="Masukkan Password" />
        <Gap height={24} />
        <Button
          text="Lanjutkan"
          onPress={() => navigation.navigate('SignUpAddress')}
        />
      </View>
      <Text>Daftar Baru</Text>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  page: {flex: 1},
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 24,
    flex: 1,
  },
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
  addFoto: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#8D92A3',
    textAlign: 'center',
  },
});
