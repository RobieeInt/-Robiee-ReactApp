import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Gap, Header, TextInput} from '../../components';

const SignIn = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Masuk" subTitle="Jhajhan Yukkkkk" />
      <View style={styles.container}>
        <TextInput label="Alamat Email" placeholder="Masukkan Email" />
        <Gap height={16} />
        <TextInput label="Password" placeholder="Masukkan Password" />
        <Gap height={24} />
        <Button text="Masuk" onPress={() => navigation.replace('MainApp')} />
        <Gap height={12} />
        <Button
          text="Daftar Baru"
          color="#8D92A3"
          textColor="white"
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
    </View>
  );
};

export default SignIn;

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
