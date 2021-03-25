import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Rating from '../Rating';

/*
type:
1. Product yang ada di home
2. buat di order summary/pembayaran
3. dalam proses pesanan
4. riwayat pesanan
*/

const ItemList = ({
  image,
  onPress,
  rating,
  items,
  price,
  type,
  name,
  date,
  status,
}) => {
  const renderContent = () => {
    switch (type) {
      case 'Product':
        //buat yang di home
        return (
          <>
            <View style={{flex: 1}}>
              <Text style={styles.title}>{name}</Text>
              <Text style={styles.price}>IDR {price}</Text>
            </View>
            <Rating rating={rating} />
          </>
        );

      case 'Pembayaran':
        return (
          <>
            <View style={{flex: 1}}>
              <Text style={styles.title}>{name}</Text>
              <Text style={styles.price}>IDR {price}</Text>
            </View>
            <Text style={styles.items}>{items}x</Text>
          </>
        );

      case 'DalamProses':
        return (
          <>
            <View style={{flex: 1}}>
              <Text style={styles.title}>{name}</Text>
              <Text style={styles.price}>
                {items}x | Pembayaran IDR {price}{' '}
              </Text>
            </View>
          </>
        );

      case 'Riwayat':
        return (
          <>
            <View style={{flex: 1}}>
              <Text style={styles.title}>{name}</Text>
              <Text style={styles.price}>
                {items} x | IDR {price}{' '}
              </Text>
            </View>
            <View>
              <Text style={styles.date}>{date}</Text>
              <Text style={styles.status}>{status}</Text>
            </View>
          </>
        );

      default:
        return (
          <>
            <View style={{flex: 1}}>
              <Text style={styles.title}>{name}</Text>
              <Text style={styles.price}>IDR {price}</Text>
            </View>
            <Rating />
          </>
        );
    }
  };

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.container}>
        <Image source={image} style={styles.image} />
        {renderContent()}
      </View>
    </TouchableOpacity>
  );
};

export default ItemList;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingVertical: 8,
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
    overflow: 'hidden',
    marginRight: 12,
  },
  title: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#020202',
  },
  price: {
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    color: '#8D92A3',
  },
  items: {fontSize: 15, fontFamily: 'Poppins-Regular', color: '#8D92A3'},
  date: {fontSize: 10, fontFamily: 'Poppins-Regular', color: '#8D92A3'},
  status: {fontSize: 13, fontFamily: 'Poppins-Regular', color: 'red'},
});
