import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Jajanan3, StarOff, StarOn} from '../../../assets';

const Rating = () => {
  return (
    <View style={styles.Ratingcontainer}>
      <View style={styles.Starcontainer}>
        <StarOn />
        <StarOn />
        <StarOn />
        <StarOn />
        <StarOff />
      </View>
      <Text>4.5</Text>
    </View>
  );
};

export default Rating;

const styles = StyleSheet.create({
  Ratingcontainer: {flexDirection: 'row'},
  Starcontainer: {flexDirection: 'row'},
});
