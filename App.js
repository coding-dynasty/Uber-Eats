import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import Navigation from "./src/components/navigation/Navigation";
import Location from "./src/components/location/Location";
import Constants from "expo-constants";
import Search from "./src/components/search/Search";
import Categories from "./src/components/categories/Categories";
import Food from "./src/components/food/Food";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./src/components/tabs/HomeScreen";
import SettingsScreen from "./src/components/tabs/SettingsScreen";
import { NavigationContainer } from "@react-navigation/native";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const App = () => {
  const Tab = createBottomTabNavigator();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.container__wrapper}>
          <Navigation />
          {/* <Location /> */}
          <Search />
          <Categories />
          <Food />
        </View>
      </ScrollView>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarStyle: {
              position: "absolute",
              bottom: 0,
            },
          }}
        >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarIcon: () => <Entypo name="home" color={"#000"} size={20} />,
            }}
          />
          <Tab.Screen
            name="Browse"
            component={SettingsScreen}
            options={{
              tabBarIcon: () => (
                <AntDesign name="search1" color={"#000"} size={20} />
              ),
            }}
          />
          <Tab.Screen
            name="Baskets"
            component={SettingsScreen}
            options={{
              tabBarIcon: () => (
                <Entypo name="shopping-basket" color={"#000"} size={20} />
              ),
            }}
          />
          <Tab.Screen
            name="Account"
            component={SettingsScreen}
            options={{
              tabBarIcon: () => (
                <MaterialCommunityIcons
                  name="account"
                  color={"#000"}
                  size={20}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#fff",
    color: "#000",
    position: "relative",
    flex: 1,
  },
  container__wrapper: {
    paddingHorizontal: 10,
    paddingBottom: 50,
  },
});

export default App;
