import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import Navigation from "./src/components/navigation/Navigation";
import Location from "./src/components/location/Location";
import Constants from "expo-constants";
import Search from "./src/components/search/Search";
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Navigation />
        {/* <Location /> */}
        <Search />
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
    padding: 20,
  },
});

export default App;
