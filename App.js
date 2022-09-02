import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <>
      <View style={{ flex: 4 }}>
        <View style={{ flex: 1, backgroundColor: 'tomato' }}></View>
        <View style={{ flex: 6, backgroundColor: 'teal' }}></View>
        <View style={{ flex: 1, backgroundColor: 'orange' }}></View>
      </View>
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: 'tomato' }}></View>
        <View style={{ flex: 6, backgroundColor: 'teal' }}></View>
        <View style={{ flex: 1, backgroundColor: 'orange' }}></View>
      </View>
    </>
  );
}
