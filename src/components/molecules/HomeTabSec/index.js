import React from 'react';
import {StyleSheet, Text, View, useWindowDimensions, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {ItemList} from '..';
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

const BaruNih = () => {
  const navigation = useNavigation();
  return (
    <View style={{paddingTop: 8, paddingHorizontal: 24}}>
      <ScrollView>
        <ItemList
          type="Product"
          name="Stick Kentang"
          price="90.000"
          rating={3}
          image={Jajanan1}
          onPress={() => navigation.navigate('JhajanDetail')}
        />
        <ItemList
          type="Product"
          name="Stick Kentang"
          price="90.000"
          rating={3}
          image={Jajanan2}
          onPress={() => navigation.navigate('JhajanDetail')}
        />
        <ItemList
          type="Product"
          name="Stick Kentang"
          price="90.000"
          rating={3}
          image={Jajanan3}
          onPress={() => navigation.navigate('JhajanDetail')}
        />
        <ItemList
          type="Product"
          name="Stick Kentang"
          price="90.000"
          rating={3}
          image={Jajanan4}
          onPress={() => navigation.navigate('JhajanDetail')}
        />
        <ItemList
          type="Product"
          name="Stick Kentang"
          price="90.000"
          rating={3}
          image={Jajanan1}
          onPress={() => navigation.navigate('JhajanDetail')}
        />
        <ItemList
          type="Product"
          name="Stick Kentang"
          price="90.000"
          rating={3}
          image={Jajanan2}
          onPress={() => navigation.navigate('JhajanDetail')}
        />
        <ItemList
          type="Product"
          name="Stick Kentang"
          price="90.000"
          rating={3}
          image={Jajanan4}
          onPress={() => navigation.navigate('JhajanDetail')}
        />
      </ScrollView>
    </View>
  );
};

const LagiHits = () => {
  const navigation = useNavigation();
  return (
    <View style={{paddingTop: 8, paddingHorizontal: 24}}>
      <ScrollView>
        <ItemList
          type="Product"
          name="Stick Kentang"
          price="90.000"
          rating={3}
          image={Jajanan4}
          onPress={() => navigation.navigate('JhajanDetail')}
        />
        <ItemList
          type="Product"
          name="Stick Kentang"
          price="90.000"
          rating={3}
          image={Jajanan3}
          onPress={() => navigation.navigate('JhajanDetail')}
        />
        <ItemList
          type="Product"
          name="Stick Kentang"
          price="90.000"
          rating={3}
          image={Jajanan2}
          onPress={() => navigation.navigate('JhajanDetail')}
        />
        <ItemList
          type="Product"
          name="Stick Kentang"
          price="90.000"
          rating={3}
          image={Jajanan1}
          onPress={() => navigation.navigate('JhajanDetail')}
        />
        <ItemList
          type="Product"
          name="Stick Kentang"
          price="90.000"
          rating={3}
          image={Jajanan1}
          onPress={() => navigation.navigate('JhajanDetail')}
        />
        <ItemList
          type="Product"
          name="Stick Kentang"
          price="90.000"
          rating={3}
          image={Jajanan2}
          onPress={() => navigation.navigate('JhajanDetail')}
        />
        <ItemList
          type="Product"
          name="Stick Kentang"
          price="90.000"
          rating={3}
          image={Jajanan4}
          onPress={() => navigation.navigate('JhajanDetail')}
        />
      </ScrollView>
    </View>
  );
};

const PalingSuka = () => {
  const navigation = useNavigation();
  return (
    <View style={{paddingTop: 8, paddingHorizontal: 24}}>
      <ScrollView>
        <ItemList
          type="Product"
          name="Stick Kentang"
          price="90.000"
          rating={3}
          image={Jajanan1}
          onPress={() => navigation.navigate('JhajanDetail')}
        />
        <ItemList
          type="Product"
          name="Stick Kentang"
          price="90.000"
          rating={3}
          image={Jajanan2}
          onPress={() => navigation.navigate('JhajanDetail')}
        />
        <ItemList
          type="Product"
          name="Stick Kentang"
          price="90.000"
          rating={3}
          image={Jajanan2}
          onPress={() => navigation.navigate('JhajanDetail')}
        />
        <ItemList
          type="Product"
          name="Stick Kentang"
          price="90.000"
          rating={3}
          image={Jajanan1}
          onPress={() => navigation.navigate('JhajanDetail')}
        />
        <ItemList
          type="Product"
          name="Stick Kentang"
          price="90.000"
          rating={3}
          image={Jajanan1}
          onPress={() => navigation.navigate('JhajanDetail')}
        />
        <ItemList
          type="Product"
          name="Stick Kentang"
          price="90.000"
          rating={3}
          image={Jajanan2}
          onPress={() => navigation.navigate('JhajanDetail')}
        />
        <ItemList
          type="Product"
          name="Stick Kentang"
          price="90.000"
          rating={3}
          image={Jajanan4}
          onPress={() => navigation.navigate('JhajanDetail')}
        />
      </ScrollView>
    </View>
  );
};

const HomeTabSec = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'Baru Nih'},
    {key: '2', title: 'Lagi Hits'},
    {key: '3', title: 'Paling Disukai'},
  ]);

  const renderScene = SceneMap({
    1: BaruNih,
    2: LagiHits,
    3: PalingSuka,
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

export default HomeTabSec;

const styles = StyleSheet.create({});
