import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Jajanan3} from '../../assets';
import {Button, Gap, Header, ItemList, ItemValue} from '../../components';

const OrderDetail = ({navigation}) => {
  return (
    <ScrollView>
      <Header
        title="Detail Pesanan"
        subTitle="Riwayat Pesanan Kamu Nih "
        onBack={() => {}}
      />
      <View style={styles.content}>
        <Text style={styles.label}>Pesanan Kamu !</Text>
        <ItemList
          image={Jajanan3}
          type="Pembayaran"
          name="Es Pisang Coklat"
          price="90.000"
          items={12}
        />
        <Text style={styles.label}>Detil Transaksi</Text>
        <ItemValue label="Es Pisang Coklat" value="IDR 1.080.000" />
        <ItemValue label="Ongkir" value="IDR 5.000" />
        <ItemValue label="Pajak 10%" value="IDR 108.000" />
        <ItemValue label="Total" value="IDR 1.193.000" valueColor="#1ABC9C" />
      </View>
      <View style={styles.content}>
        <Text style={styles.label}>Dipesan Oleh:</Text>
        <ItemValue label="Nama" value="Ujang Lesmana" />
        <ItemValue label="Phone" value="08568780192" />
        <ItemValue label="Alamat" value="Jalan Buntu" />
        <ItemValue label="No.Rumah" value="8" />
        <ItemValue label="Kota" value="Omega" />
      </View>
      <Gap height={25} />
      <View style={styles.content}>
        <Text style={styles.label}>Status Pesanan:</Text>
        <ItemValue label="JJ1912" value="Dibayar" valueColor="#1ABC9C" />
      </View>
      <Gap height={25} />
      <View style={styles.butt}>
        <Button
          text="Batalkan Pesanan Saya"
          onPress={() => navigation.replace('SuccessOrder')}
          color="#D9435E"
          textColor="white"
        />
      </View>
      <Gap height={40} />
    </ScrollView>
  );
};

export default OrderDetail;

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 16,
    marginTop: 24,

    backgroundColor: 'white',
  },
  label: {
    fontSize: 15,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
    marginBottom: 8,
  },
  butt: {paddingHorizontal: 24},
  marginTop: 24,
});
