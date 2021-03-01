import React from 'react';
import {useEffect} from 'react';
import {Text, View} from 'react-native';
import {Logo} from '../../assets';
import {Gap} from '../../components';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('SignIn');
    }, 2000);
  }, []);
  return (
    <View
      style={{
        backgroundColor: '#A5E374',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Logo />
      <View style={{height: 20}} />
      <Text
        style={{fontSize: 32, color: '#020202', fontFamily: 'Poppins-Medium'}}>
        Jhajan
      </Text>
      <View style={{marginTop: 100}}>
        <Text>By Ujang</Text>
      </View>
    </View>
  );
};

export default SplashScreen;
