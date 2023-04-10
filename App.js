import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import SettingsScreen from './src/components/tabs/SettingsScreen';
import Home from './src/components/Home/Home';
import Detailes from './src/components/details/Detailes';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { SafeAreaView, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Account, Client, ID } from 'appwrite';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import client from './appwrite.config';

const App = () => {
  const Tab = createBottomTabNavigator();

  const Stack = createNativeStackNavigator();

  useEffect(() => {
    const account = new Account(client);

    // Register User
    // account
    //   .create(
    //     ID.unique(),
    //     `me${Math.round(Math.random() * 1000)}@example.com`,
    //     'password',
    //     'Jane Doe'
    //   )
    //   .then(
    //     (response) => {
    //       console.log(response);
    //     },
    //     (error) => {
    //       console.log(error);
    //     }
    //   );
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName='Home'
          backBehavior='history'
          detachInactiveScreens={true}
          screenOptions={{
            headerShown: false,
            tabBarStyle: {
              position: 'absolute',
              bottom: 0,
            },
          }}
        >
          <Tab.Screen
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
          />
          <Tab.Screen
            name='Browse'
            component={SettingsScreen}
            options={{
              tabBarIcon: () => (
                <AntDesign
                  name='search1'
                  color={'#000'}
                  size={20}
                />
              ),
              tabBarBadge: Math.round(Math.random() * 10),
            }}
          />
          <Tab.Screen
            name='Baskets'
            component={SettingsScreen}
            options={{
              tabBarIcon: () => (
                <Entypo
                  name='shopping-basket'
                  color={'#000'}
                  size={20}
                />
              ),
              tabBarBadge: Math.round(Math.random() * 10),
            }}
          />
          <Tab.Screen
            name='Account'
            component={SettingsScreen}
            options={{
              tabBarIcon: () => (
                <MaterialCommunityIcons
                  name='account'
                  color={'#000'}
                  size={20}
                />
              ),
              tabBarBadge: Math.round(Math.random() * 10),
            }}
          />
          <Tab.Screen
            name='Details'
            component={DetailsScreen}
          />
        </Tab.Navigator>
      </NavigationContainer>
      <StatusBar style='auto' />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 5,
    backgroundColor: '#fff',
    color: '#000',
    position: 'relative',
    flex: 1,
  },
});

export default App;

const DetailsScreen = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Details'
        component={Detailes}
      />
    </Stack.Navigator>
  );
};
