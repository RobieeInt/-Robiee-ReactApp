import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IlOrder, Success} from '../../assets';
import {Button, Gap} from '../../components';

const SuccessOrder = ({navigation}) => {
  return (
    <View style={styles.container}>
      <IlOrder />
      <Gap height={30} />
      <Text style={styles.Text1}>Sukses Memesan</Text>
      <Gap height={6} />
      <Text style={styles.Text2}>Pesan-mu Sedang di Proses nih, Tunggu ya</Text>
      <Text style={styles.Text2}>Selagi Nunggu apa mau ...</Text>
      <Gap height={30} />
      <View style={styles.ButtonContainer}>
        <Button
          text="Cari Jajanan Lain"
          onPress={() => navigation.replace('MainApp')}
        />
      </View>
      <Gap height={10} />
      <View style={styles.ButtonContainer}>
        <Button
          text="Lihat Pesanan"
          onPress={() => navigation.replace('MainApp', {screen: 'Order'})}
          color="#8D92A3"
          textColor="white"
        />
      </View>
    </View>
  );
};

export default SuccessOrder;

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
