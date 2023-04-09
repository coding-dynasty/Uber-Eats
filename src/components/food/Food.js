import { Image, StyleSheet, Text, View } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
const Food = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card__top}>
        <Image
          style={styles.card__image}
          source={{
            uri: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          }}
        />
        <AntDesign name="hearto" size={30} color={"#fff"} style={styles.icon} />
      </View>
      <View style={styles.card__details}>
        <View>
          <Text style={styles.card__title}>
            Irure enim aliqua deserunt ipsum.
          </Text>

          <Text style={styles.card__Info}>
            <Text style={styles.card__sponsored}>Sponsored</Text> - 0$ -
            Delivery Fee - 10-25 min
          </Text>
        </View>
        <Text style={styles.card__rating}>4.3</Text>
      </View>
    </View>
  );
};

export default Food;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginBottom: 10,
  },
  card__top: {
    position: "relative",
    marginBottom: 10,
  },
  card__image: {
    width: "100%",
    height: 200,
  },
  icon: {
    position: "absolute",
    top: 20,
    right: 20,
  },
  card__details: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  card__title: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 2,
  },
  card__Info: {
    color: "#A9A9A9",
    fontSize: 10,
  },
  card__sponsored: {
    textDecorationLine: "underline",
  },
  card__rating: {
    fontSize: 16,
    backgroundColor: "#eee",
    borderRadius: 999,
    padding: 10,
    fontWeight: 600,
  },
});
