import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
  Dimensions,
} from 'react-native';
import {Jajanan1, Jajanan2, Jajanan3, Jajanan4, ujang} from '../../assets';
import {Gap, JhajanCard} from '../../components';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

const renderTabBar = (props) => (
  <TabBar
    {...props}
    indicatorStyle={{
      backgroundColor: '#020202',
      height: 1,
    }}
    style={{backgroundColor: 'white'}}
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

const FirstRoute = () => <View style={{flex: 1, backgroundColor: '#ff4081'}} />;

const SecondRoute = () => (
  <View style={{flex: 1, backgroundColor: '#673ab7'}} />
);

const Home = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'Baru Nih'},
    {key: '2', title: 'Lagi Hits'},
    {key: '3', title: 'Paling Disukai'},
  ]);

  const renderScene = SceneMap({
    1: FirstRoute,
    2: SecondRoute,
    3: SecondRoute,
  });
  return (
    <View style={styles.page}>
      <View style={styles.profileContainer}>
        <View>
          <Text style={styles.appName}>Jhajan</Text>
          <Text style={styles.descName}>Mau Jhajan Apa ya Hari ini</Text>
        </View>
        <Image source={ujang} style={styles.profile} />
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
      <View style={styles.tabContainer}>
        <TabView
          renderTabBar={renderTabBar}
          navigationState={{index, routes}}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{width: layout.width}}
        />
      </View>
      <View></View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {flex: 1},
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 24,
    backgroundColor: 'white',
  },

  appName: {fontSize: 22, fontFamily: 'Poppins-Medium', color: '#020202'},
  descName: {fontSize: 14, fontFamily: 'Poppins-Light', color: '#8D92A3'},
  profile: {width: 50, height: 50, borderRadius: 8},
  jhajanCardContainer: {flexDirection: 'row', marginVertical: 12},
  tabContainer: {flex: 1},
  pagerView: {flex: 1},
});
