import { View, TextInput, StyleSheet } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

const Search = () => {
  return (
    <View style={styles.container}>
      <AntDesign name="search1" size={25} />
      <TextInput
        placeholder="Food, shopping, drinks, etc"
        style={styles.input}
      />
      <AntDesign name="filter" size={25} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#eee",
    marginVertical: 10,
    borderRadius: 20,
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
    fontSize: 18,
  },
});

export default Search;
