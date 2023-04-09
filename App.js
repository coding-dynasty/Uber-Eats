import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SettingsScreen from './src/components/tabs/SettingsScreen';
import { NavigationContainer } from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './src/components/Home/Home';

const App = () => {
  const Tab = createBottomTabNavigator();
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
