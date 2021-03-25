import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Max, Min} from '../../../assets';

const Counter = () => {
  return (
    <View style={styles.content}>
      <TouchableOpacity>
        <Min />
      </TouchableOpacity>
      <Text style={styles.value}>12</Text>
      <TouchableOpacity>
        <Max />
      </TouchableOpacity>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  content: {flexDirection: 'row', alignItems: 'center'},
  value: {
    fontSize: 19,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
    marginHorizontal: 10,
  },
});
