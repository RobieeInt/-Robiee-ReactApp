import React from 'react';
import {StyleSheet, Text, View, useWindowDimensions, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {ItemList, ItemListMenu} from '..';
import {Jajanan1, Jajanan2, Jajanan3, Jajanan4} from '../../../assets';
import {useNavigation} from '@react-navigation/native';

const renderTabBar = (props) => (
  <TabBar
    {...props}
    indicatorStyle={{
      backgroundColor: '#020202',
      height: 1,
    }}
    style={{
      backgroundColor: 'white',
      elevation: 1,
      shadowOpacity: 0,
      borderBottomColor: '#F2F2F2',
      borderBottomWidth: 0,
    }}
    tabStyle={{width: 'auto'}}
    renderLabel={({route, focused, color}) => (
      <Text
        style={{
          fontFamily: 'Poppins-Medium',
          color: focused ? '#020202' : '#8D92A3',
        }}>
        {route.title}
      </Text>
    )}
  />
);

const renderScene = ({route}) => {
  switch (route.key) {
    case 'first':
      return <FirstRoute foo={this.props.foo} />;
    case 'second':
      return <SecondRoute />;
    default:
      return null;
  }
};

const Akun = () => {
  const navigation = useNavigation();
  return (
    <View style={{paddingTop: 8, paddingHorizontal: 24}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ItemListMenu text="Edit Profile" />
        <ItemListMenu text="Alamat Rumah" />
        <ItemListMenu text="Keamanan" />
        <ItemListMenu text="Pembayaran" />
      </ScrollView>
    </View>
  );
};

const tentangJhajan = () => {
  const navigation = useNavigation();
  return (
    <View style={{paddingTop: 8, paddingHorizontal: 24}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ItemListMenu text="Rate App" />
        <ItemListMenu text="Pusat Bantuan" />
        <ItemListMenu text="Privacy & Policy" />
        <ItemListMenu text="Term & Condition" />
      </ScrollView>
    </View>
  );
};

const ProfileTabSec = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'Akun'},
    {key: '2', title: 'Tentang Jhajan'},
  ]);

  const renderScene = SceneMap({
    1: Akun,
    2: tentangJhajan,
  });
  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
      style={{backgroundColor: 'white'}}
    />
  );
};

export default ProfileTabSec;

const styles = StyleSheet.create({});
