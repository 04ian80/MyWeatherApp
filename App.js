import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.city}>
          <Text style={styles.cityName}>Jeju</Text>
        </View>
        <View style={styles.weather}>
          <View style={styles.day}>
            <Text style={styles.temp}>23</Text>
            <Text style={styles.desc}>Sunny</Text>
          </View>
        </View>
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
    fontSize: 38,
    fontWeight: '500',
    color: 'white',
  },
  weather: {
    flex: 3,
  },
  day: {
    flex: 1,
    alignItems: 'center',
  },
  temp: {
    marginTop: 50,
    fontSize: 98,
    color: 'white',
  },
  desc: {
    marginTop: -10,
    fontSize: 32,
    color: 'white',
  },
});
