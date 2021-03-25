import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header, OrderTabSec} from '../../components/';
import {EmptyOrder} from '../../components';

const Order = () => {
  const [isEmpty] = useState(false);
  return (
    <View style={styles.page}>
      {isEmpty ? (
        <EmptyOrder />
      ) : (
        <View style={styles.content}>
          <Header title="Riwayat Pesanan" subTitle="Jhajanan Enak Tiap Hari" />
          <View style={styles.TabContent}>
            <OrderTabSec />
          </View>
        </View>
      )}
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({
  page: {flex: 1},
  content: {flex: 1},
  TabContent: {flex: 1, marginTop: 24},
});
