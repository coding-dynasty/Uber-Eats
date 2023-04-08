import { StatusBar } from "expo-status-bar";
import {
  Text,
  Platform,
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Entypo from "react-native-vector-icons/Entypo";
import { useState } from "react";

const App = () => {
  const [isActive, setIsActive] = useState({
    opt1: true,
    opt2: false,
    opt3: false,
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.navigation}>
          <View>
            <Text>Deliver now</Text>
            <Text style={styles.location}>
              London <AntDesign name="caretdown" size={10} color={"#000"} />
            </Text>
          </View>
          <View style={styles.options}>
            {/* opt1 */}
            <TouchableOpacity
              style={[styles.icon, isActive.opt1 && styles.active]}
              onPress={() =>
                setIsActive({
                  ...isActive,
                  opt1: true,
                  opt2: false,
                  opt3: false,
                })
              }
            >
              <AntDesign
                name="exclamationcircle"
                size={20}
                color={isActive.opt1 ? "#fff" : "#000"}
              />
            </TouchableOpacity>
            {/* opt2 */}
            <TouchableOpacity
              style={[styles.icon, isActive.opt2 && styles.active]}
              onPress={() =>
                setIsActive({
                  ...isActive,
                  opt1: false,
                  opt2: true,
                  opt3: false,
                })
              }
            >
              <FontAwesome5
                name="walking"
                size={20}
                color={isActive.opt2 ? "#fff" : "#000"}
              />
            </TouchableOpacity>
            {/* opt3 */}
            <TouchableOpacity
              style={[styles.icon, isActive.opt3 && styles.active]}
              onPress={() =>
                setIsActive({
                  ...isActive,
                  opt1: false,
                  opt2: false,
                  opt3: true,
                })
              }
            >
              <Entypo
                name="shop"
                size={20}
                color={isActive.opt3 ? "#fff" : "#000"}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
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
  navigation: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  options: {
    flexDirection: "row",
    backgroundColor: "#eee",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  location: {
    fontWeight: 600,
    marginTop: 5,
  },
  icon: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  active: {
    backgroundColor: "#000",
    color: "#fff",
    borderRadius: 10,
  },
});

export default App;
