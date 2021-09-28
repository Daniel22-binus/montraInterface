import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import {MenuIcon, NotifActiveIcon} from '../../assets';
import {BACKGROUND_COLOR} from '../../constant';
import HomeAll from './HomeAll';

const Home = ({navigation}) => {
  const SecondRoute = () => (
    <View style={{flex: 1, backgroundColor: '#673ab7'}} />
  );

  const renderScene = SceneMap({
    first: HomeAll,
    second: SecondRoute,
  });

  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'All'},
    {key: 'second', title: 'empty'},
  ]);

  return (
    <>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.openDrawer();
          }}>
          <View style={styles.menuIcon}>
            <MenuIcon />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {navigation.navigate("Notifications")}}>
          <View style={styles.notifIcon}>
          <NotifActiveIcon />
          </View>
        </TouchableOpacity>
      </View>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
      />
    </>
  );
};

export default Home;

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  header: {
    backgroundColor: BACKGROUND_COLOR,
    flexDirection: 'row',
    paddingVertical: 10,
  },
  menuIcon: {
    marginTop: 6,
    marginLeft: 12,
  },
  notifIcon: {
    marginLeft: windowWidth * 0.8,
  },
});
