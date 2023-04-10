import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';

const SettingsScreen = ({ navigation }) => {
  const Stack = createNativeStackNavigator();

  return (
    <View>
      <Text>SettingsScreen</Text>
    </View>
  );
};
export default SettingsScreen;
const styles = StyleSheet.create({});
