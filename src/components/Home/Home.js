import { StyleSheet, View, FlatList, Text, Image } from 'react-native';
import Navigation from '../navigation/Navigation';
import Search from '../search/Search';
import Categories from '../categories/Categories';
import Food from '../food/Food';
import Location from '../location/Location';
import { useEffect, useState } from 'react';
import { YELP_API_KEY } from '../../../yelp_api_key';
import { BottomSheet } from '@rneui/themed';
import { ListItem } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SettingsScreen from '../tabs/SettingsScreen';

const Home = () => {
  const [location, setLocation] = useState('london');
  const [data, setData] = useState([]);
  const [shouldRefresh, setshouldRefresh] = useState(true);
  const [state, setState] = useState('');

  const Stack = createNativeStackNavigator();

  useEffect(() => {
    const ENDPOINT_URI = `https://api.yelp.com/v3/businesses/search?location=${location}&term=food&categories=bars&open_now=true&sort_by=distance&limit=10`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    const fetchData = async () => {
      await fetch(ENDPOINT_URI, options)
        .then((res) => res.json())
        .then((res) => {
          setData(res.businesses);
          setState(data !== undefined ? '' : 'No data in that location!');
          setshouldRefresh(false);
        })
        .catch((err) => console.error(err));
    };
    fetchData();
  }, [shouldRefresh, location]);

  const [isVisible, setIsVisible] = useState(false);
  const list = [
    { title: 'List Item 1' },
    { title: 'List Item 2' },
    {
      title: 'Cancel',
      containerStyle: { backgroundColor: 'red' },
      titleStyle: { color: 'white' },
      onPress: () => setIsVisible(false),
    },
  ];

  // const Stack = createNativeStackNavigator();

  return (
    <View style={styles.container__wrapper}>
      <Navigation location={location} />
      <Location
        location={location}
        setLocation={setLocation}
        setshouldRefresh={setshouldRefresh}
      />
      {/* <Search /> */}
      {/* <Categories /> */}
      <FlatList
        style={styles.flatlist}
        data={data}
        keyExtractor={(item) => item.id}
        refreshing={shouldRefresh}
        onRefresh={() => setshouldRefresh(true)}
        ListEmptyComponent={
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flex: 1,
            }}
          >
            <Image
              style={{ width: 400, height: 200 }}
              source={{
                uri: 'https://howfix.net/wp-content/uploads/2018/02/sIaRmaFSMfrw8QJIBAa8mA-article.png',
              }}
            />
            <Text style={{ fontSize: 20 }}>{state}</Text>
          </View>
        }
        renderItem={(item) => (
          <Food
            data={item.item}
            key={item.id}
            id={item.id}
            setIsVisible={setIsVisible}
          />
        )}
      />
      {/* <Stack.Navigator>
        <Stack.Screen
          name='Settings'
          component={SettingsScreen}
        />
      </Stack.Navigator> */}
      {/* <Tab.Screen
            name='Home'
            component={Home}
            options={{
              tabBarIcon: () => (
                <Entypo
                  name='home'
                  color={'#000'}
                  size={20}
                />
              ),
              tabBarBadge: Math.round(Math.random() * 10),
            }}
          /> */}
      <BottomSheet
        modalProps={{}}
        isVisible={isVisible}
      >
        {list.map((l, i) => (
          <ListItem
            key={i}
            containerStyle={l.containerStyle}
            onPress={l.onPress}
          >
            <ListItem.Content>
              <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        ))}
      </BottomSheet>
    </View>
  );
};
export default Home;

const styles = StyleSheet.create({
  container__wrapper: {
    paddingHorizontal: 10,
    paddingBottom: 50,
    backgroundColor: '#fff',
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
