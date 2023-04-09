import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { API_KEY } from "../../../key";

const Location = () => {
  const [location, setLocation] = useState("");

  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        query={{
          key: API_KEY || "", //! key is needed
          language: "en",
        }}
        onPress={(data) => {
          setLocation(data?.description);
        }}
        // googlePlaceAutoCompleteRef.current?.setAddressText("");
        styles={{ container: { flex: 0 } }}
        debounce={400}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#eee",
  },
});

export default Location;
