import { StatusBar } from "expo-status-bar";
import { Platform, SafeAreaView, StyleSheet, View } from "react-native";

import Navigation from "./src/components/navigation/navigation";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Navigation />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: Platform.OS === "android" ? 45 : 0,
    backgroundColor: "#fff",
    color: "#000",
    padding: 20,
  },
});

export default App;
