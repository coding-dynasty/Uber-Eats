import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SettingsScreen from '../tabs/SettingsScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

const Food = ({ data, setIsVisible }) => {
  // console.log(navigation);
  const navigation = useNavigation();

  const d = {
    alias: 'shanti-indisches-restaurant-berlin',
    categories: [
      { alias: 'bars', title: 'Bars' },
      { alias: 'indpak', title: 'Indian' },
    ],
    coordinates: { latitude: 52.52516, longitude: 13.39143 },
    display_phone: '+49 30 61281733',
    distance: 1057.2776742565522,
    id: 'oFRzwFv-JivtAIT8mbdIHw',
    image_url:
      'https://s3-media4.fl.yelpcdn.com/bphoto/vLo7gfmQrVTUw7cWQW9V1A/o.jpg',
    is_closed: false,
    location: {
      address1: 'Oranienburger Str. 65',
      address2: null,
      address3: null,
      city: 'Berlin',
      country: 'DE',
      display_address: ['Oranienburger Str. 65', '10117 Berlin', 'Germany'],
      state: 'BE',
      zip_code: '10117',
    },
    name: 'Shanti Indisches Restaurant',
    phone: '+493061281733',
    price: '€€',
    rating: 4,
    review_count: 4,
    transactions: [],
    url: 'https://www.yelp.com/biz/shanti-indisches-restaurant-berlin?adjust_creative=3Bm1lcL_gMhAnZOXmX7tIw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=3Bm1lcL_gMhAnZOXmX7tIw',
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Details')}
        // onPress={() => setIsVisible(true)}
      >
        <View style={styles.card__top}>
          <Image
            style={styles.card__image}
            source={{
              uri: data.image_url
                ? data.image_url
                : 'https://howfix.net/wp-content/uploads/2018/02/sIaRmaFSMfrw8QJIBAa8mA-article.png',
            }}
          />
          <AntDesign
            name='hearto'
            size={30}
            color={'#fff'}
            style={styles.icon}
          />
        </View>
        <View style={styles.card__details}>
          <View>
            <Text style={styles.card__title}>{data.name}</Text>
            <Text style={styles.card__Info}>
              {data.alias} - {data.price ? data.price : '€'} -{' '}
              {data.review_count} <AntDesign name='like2' />
            </Text>
          </View>
          <Text style={styles.card__rating}>
            {parseFloat(data.rating).toFixed(1)}
          </Text>
        </View>
      </TouchableOpacity>
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
    position: 'relative',
    marginBottom: 10,
  },
  card__image: {
    width: '100%',
    height: 200,
  },
  icon: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  card__details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  card__title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 2,
  },
  card__Info: {
    color: '#A9A9A9',
    fontSize: 12,
  },
  card__sponsored: {
    textDecorationLine: 'underline',
  },
  card__rating: {
    fontSize: 16,
    backgroundColor: '#eee',
    borderRadius: 999,
    padding: 10,
    fontWeight: '600',
  },
});
