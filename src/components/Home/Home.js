import { StyleSheet, View, ScrollView } from "react-native";
import Navigation from "../navigation/Navigation";
import Search from "../search/Search";
import Categories from "../categories/Categories";
import Food from "../food/Food";
import Location from "../location/Location";
const Home = () => {
  return (
    <ScrollView>
      <View style={styles.container__wrapper}>
        <Navigation />
        {/* <Location /> */}
        <Search />
        <Categories />
        <Food />
        <Food />
        <Food />
        <Food />
        <Food />
        <Food />
        <Food />
        <Food />
        <Food />
        <Food />
        <Food />
        <Food />
        <Food />
        <Food />
        <Food />
        <Food />
        <Food />
        <Food />
        <Food />
        <Food />
        <Food />
      </View>
    </ScrollView>
  );
};
export default Home;
const styles = StyleSheet.create({
  container__wrapper: {
    paddingHorizontal: 10,
    paddingBottom: 50,
    backgroundColor: "#fff",
  },
});
