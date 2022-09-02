import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
export default function App() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.city}>
          <Text style={styles.cityName}>Jeju</Text>
        </View>
        <ScrollView
          pagingEnabled
          horizontal
          showsHorizontalScrollIndicator='false'
          indicatorStyle='white'
          contentContainerStyle={styles.weather}
        >
          <View style={styles.day}>
            <Text style={styles.temp}>23</Text>
            <Text style={styles.desc}>Sunny</Text>
          </View>
          <View style={styles.day}>
            <Text style={styles.temp}>23</Text>
            <Text style={styles.desc}>Sunny</Text>
          </View>
          <View style={styles.day}>
            <Text style={styles.temp}>23</Text>
            <Text style={styles.desc}>Sunny</Text>
          </View>
        </ScrollView>
        <StatusBar style='light' />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1D1D1D',
  },
  city: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cityName: {
    fontSize: 58,
    fontWeight: '500',
    color: 'white',
  },
  weather: {},
  day: {
    width: SCREEN_WIDTH,
    alignItems: 'center',
  },
  temp: {
    marginTop: 50,
    fontSize: 178,
    color: 'white',
  },
  desc: {
    marginTop: -10,
    fontSize: 32,
    color: 'white',
  },
});
