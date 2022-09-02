import * as Location from 'expo-location';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  ActivityIndicator,
} from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const API_KEY = 'd06999bc04f9eebe572c06c0679e6591';

export default function App() {
  const [city, setCity] = useState('Loading...');
  const [days, setDays] = useState([]);
  const [ok, setOk] = useState(true);

  const getWeather = async () => {
    const { granted } = await Location.requestForegroundPermissionsAsync();
    if (!granted) {
      setOk(false);
    }
    const {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync({ accuracy: 5 });
    const location = await Location.reverseGeocodeAsync(
      { latitude, longitude },
      { useGoogleMaps: false }
    );
    setCity(location[0].city);
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=alert&appid=${API_KEY}&units=metric`
    );
    const json = await response.json();
    setDays(json.daily);
  };

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.city}>
          <Text style={styles.cityName}>{city}</Text>
        </View>
        <ScrollView
          pagingEnabled
          horizontal
          showsHorizontalScrollIndicator='false'
          indicatorStyle='white'
          contentContainerStyle={styles.weather}
        >
          {days.length === 0 ? (
            <View style={styles.day}>
              <ActivityIndicator color='white' size='large' />
            </View>
          ) : (
            days.map((day, index) => (
              <View key={index} style={styles.day}>
                <View style={styles.date}>
                  <Text style={styles.dateName}>
                    {new Date(day.dt * 1000).toString().substring(0, 10)}
                  </Text>
                </View>
                <Text style={styles.temp}>
                  {parseFloat(day.temp.day).toFixed(0)}°
                </Text>
                <Text style={styles.desc}>{day.weather[0].main}</Text>
                {day.weather[0].main === 'Rain' && (
                  <Text style={styles.weatherIcon}>🌧</Text>
                )}
                {day.weather[0].main === 'Clouds' && (
                  <Text style={styles.weatherIcon}>☁️</Text>
                )}
                {day.weather[0].main === 'Clear' && (
                  <Text style={styles.weatherIcon}>☀️</Text>
                )}
                <View style={styles.tempContainer}>
                  <Text style={styles.maxnmin}>
                    최고:{parseFloat(day.temp.max).toFixed(0)}°
                  </Text>
                  <Text style={styles.maxnmin}>
                    최저:{parseFloat(day.temp.min).toFixed(0)}°
                  </Text>
                </View>
              </View>
            ))
          )}
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
  date: {
    paddingHorizontal: 50,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
  },
  dateName: {
    fontSize: 30,
    color: 'white',
  },
  weather: {},
  day: {
    width: SCREEN_WIDTH,
    alignItems: 'center',
  },
  temp: {
    marginLeft: 40,
    fontSize: 120,
    color: 'white',
  },
  desc: {
    marginTop: -10,
    fontSize: 32,
    color: 'white',
  },
  weatherIcon: {
    fontSize: 50,
  },
  tempContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  maxnmin: {
    fontSize: 20,
    color: 'white',
    marginLeft: 8,
  },
});
