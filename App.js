import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import Navigation from "./src/components/navigation/Navigation";
import Location from "./src/components/location/Location";
import Constants from "expo-constants";
import Search from "./src/components/search/Search";
import Categories from "./src/components/categories/Categories";
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Navigation />
        {/* <Location /> */}
        <Search />
        <Categories />
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 10,
    backgroundColor: "#fff",
    color: "#000",
    padding: 10,
  },
});

export default App;
