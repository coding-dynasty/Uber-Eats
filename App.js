import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet } from "react-native";
import Navigation from "./src/components/navigation/Navigation";
import Location from "./src/components/location/Location";
import Constants from "expo-constants";
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Navigation />
      <Location />
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
