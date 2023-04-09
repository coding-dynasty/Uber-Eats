import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { StyleSheet, View } from 'react-native';
import { API_KEY } from '../../../google_places_api_key';

const Location = ({ location, setLocation, setshouldRefresh }) => {
  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder={location}
        query={{
          key: API_KEY || '', //! key is needed
          language: 'en',
        }}
        onPress={(data) => {
          setLocation(data?.terms[data.terms.length - 1].value);
          setshouldRefresh(true);
        }}
        styles={{ container: { flex: 0 } }}
        debounce={400}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
  },
});

export default Location;
