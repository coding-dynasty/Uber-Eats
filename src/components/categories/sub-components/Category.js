import { Image, StyleSheet, Text, View } from "react-native";

const Category = (props) => {
  if (props?.pos === "top") {
    return (
      <View style={styles.top__container}>
        <Image
          style={styles.image}
          source={{
            uri: props?.uri,
          }}
        />
        <Text style={styles.category}>{props.category}</Text>
      </View>
    );
  }

  if (props?.pos === "bottom") {
    return (
      <View style={styles.bottom__container}>
        <View style={styles.wrapper}>
          <Image
            style={styles.image__bottom}
            source={{
              uri: props.uri,
            }}
          />
        </View>
        <Text style={styles.category}>{props.category}</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  top__container: {
    backgroundColor: "#eee",
    borderRadius: 10,
    padding: 20,
    flex: 1,
    margin: 5,
  },
  bottom__container: {
    borderRadius: 10,
    flex: 1,
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  wrapper: {
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: "#eee",
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 10,
    alignSelf: "flex-end",
    marginVertical: 10,
  },
  image__bottom: {
    width: 50,
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  category: {
    fontSize: 12,
    fontWeight: 700,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Category;
