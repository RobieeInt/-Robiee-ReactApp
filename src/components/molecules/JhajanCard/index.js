import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Jajanan3, StarOff, StarOn} from '../../../assets';
import Rating from '../Rating';

const JhajanCard = ({image}) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.text}>Es Pisang Coklat</Text>
        <Rating />
      </View>
    </View>
  );
};

export default JhajanCard;

const styles = StyleSheet.create({
  container: {
    width: 200,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 7},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 14,
    borderRadius: 8,
    overflow: 'hidden',
    marginRight: 24,
  },
  image: {width: 200, height: 140, resizeMode: 'cover'},
  text: {fontSize: 16, fontFamily: 'Poppins-Regular', color: '#020202'},
  Ratingcontainer: {flexDirection: 'row'},
  Starcontainer: {flexDirection: 'row'},
  content: {padding: 12},
});
