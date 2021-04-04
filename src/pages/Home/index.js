import React from 'react';
import {ScrollView, StyleSheet, View, _ScrollView} from 'react-native';
import {Jajanan1, Jajanan2, Jajanan3, Jajanan4} from '../../assets';
import {Gap, HomeProfile, HomeTabSec, JhajanCard} from '../../components';

const Home = () => {
  return (
    <View style={styles.page}>
      <ScrollView>
        <HomeProfile />
        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.jhajanCardContainer}>
              <Gap width={24} />
              <JhajanCard image={Jajanan3} />
              <JhajanCard image={Jajanan2} />
              <JhajanCard image={Jajanan1} />
              <JhajanCard image={Jajanan4} />
            </View>
          </ScrollView>
        </View>
        <View style={styles.tabContainer}>
          <HomeTabSec />
        </View>
        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.jhajanCardContainer}>
              <Gap width={24} />
              <JhajanCard image={Jajanan3} />
              <JhajanCard image={Jajanan2} />
              <JhajanCard image={Jajanan1} />
              <JhajanCard image={Jajanan4} />
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {flex: 1},
  jhajanCardContainer: {flexDirection: 'row', marginVertical: 12},
  tabContainer: {flex: 1},
});
