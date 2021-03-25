import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ArrowBackWhite, Jajanan3} from '../../assets';
import {Button, Counter, Rating} from '../../components';

const JhajanDetail = ({navigation}) => {
  return (
    <View style={styles.page}>
      <ImageBackground source={Jajanan3} style={styles.cover}>
        <TouchableOpacity style={styles.back}>
          <ArrowBackWhite />
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.content}>
        <View style={styles.mainContent}>
          <View style={styles.productContainer}>
            <View>
              <Text style={styles.title}>Es Pisang Coklat</Text>
              <Rating />
            </View>
            <Counter />
          </View>
          <Text style={styles.desc}>
            Dibuat dengan pisang pilihan berkualitas dan dibalut dengan coklat
            belgia , kemudian di tabur dengan toping-toping pilihan pemirsa,
            request sesukamu dan rasakan kenikmatannya .
          </Text>
          <Text style={styles.label}>Bahan :</Text>
          <Text style={styles.desc}>Pisang, Coklat, Dingin, Mesis</Text>
        </View>
        <View style={styles.footer}>
          <View style={styles.totalContain}>
            <Text style={styles.labelTotal}>Total Harga :</Text>
            <Text style={styles.priceTotal}>IDR 289.000</Text>
          </View>
          <View>
            <Button
              text="Pesan Sekarang"
              style={styles.button}
              onPress={() => navigation.navigate('OrderSummary')}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default JhajanDetail;

const styles = StyleSheet.create({
  page: {flex: 1},
  cover: {height: 330, paddingTop: 26, paddingLeft: 22},
  back: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    backgroundColor: 'white',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    marginTop: -40,
    paddingTop: 26,
    paddingHorizontal: 16,
    flex: 1,
  },
  mainContent: {flex: 1},
  productContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 14,
  },
  title: {fontSize: 19, fontFamily: 'Poppins-Regular', color: '#020202'},
  desc: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#8D92A3',
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
    marginBottom: 4,
  },
  footer: {flexDirection: 'row', paddingVertical: 16, alignItems: 'center'},
  totalContain: {flex: 1},
  labelTotal: {fontSize: 13, fontFamily: 'Poppins-Regular', color: '#8D92A3'},
  priceTotal: {fontSize: 18, fontFamily: 'Poppins-Regular', color: '#020202'},
  button: {width: 163},
});
