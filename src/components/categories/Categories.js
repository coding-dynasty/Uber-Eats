import { StyleSheet, View } from "react-native";
import Category from "./sub-components/Category";
import categories from "./categories.json";

const Categories = () => {
  return (
    <View>
      <View style={styles.top}>
        {categories?.categories[0]?.top?.map((category, id) => (
          <Category
            category={category.category}
            pos={category.pos}
            uri={category.uri}
            key={id}
          />
        ))}
      </View>
      <View style={styles.bottom}>
        {categories?.categories[1]?.bottom?.map((category, id) => (
          <Category
            category={category.category}
            pos={category.pos}
            uri={category.uri}
            key={id}
          />
        ))}
      </View>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  top: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bottom: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
