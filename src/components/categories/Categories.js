import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Category from "./sub-components/Category";

const Categories = () => {
  return (
    <View>
      <View style={styles.top}>
        <Category
          category={"Restaurents"}
          pos={"top"}
          uri={`https://cdn-icons-png.flaticon.com/512/113/113354.png`}
        />

        <Category
          category={"Grocery"}
          pos={"top"}
          uri={`https://static.thenounproject.com/png/4611915-200.png`}
        />
      </View>
      <View style={styles.bottom}>
        <Category
          category={"Alcohol"}
          pos={"bottom"}
          uri={
            "https://icon-library.com/images/alcohol-icon-png/alcohol-icon-png-15.jpg"
          }
        />
        <Category
          category={"Convenience"}
          pos={"bottom"}
          uri={
            "https://www.citypng.com/public/uploads/small/11653269525fjk302llkipnlcst2f36jzsdxqkcm6oevf8eau722my911wsk5f0tygnyiv9vmmazi3vfncexpzsjjbesfvrivjzqitebgqiusg8.png"
          }
        />
        <Category
          category={"Ride"}
          pos={"bottom"}
          uri={"https://static.thenounproject.com/png/210781-200.png"}
        />
        <Category
          category={"See all"}
          pos={"bottom"}
          uri={
            "https://thenounproject.com/api/private/icons/5648592/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0&token=gAAAAABkMfbik8PgXZ8fBdlLEChRJ9DWmDxjGFNvpMcEVhtJyn2aCPuTw9PY5gXbzpGhsM85eaQtJe7MZP4N8zpr6YQ2P9D5qw%3D%3D"
          }
        />
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
