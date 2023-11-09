import * as React from 'react'

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import HexagonalButton from "./components/HexagonalButton"

export default function App() {

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <HexagonalButton buttonColor="yellow"/>

      <View style={styles.buttonSet}>
        <HexagonalButton/>
        <HexagonalButton/>
        <HexagonalButton/>
        <HexagonalButton/>
        <HexagonalButton/>
        <HexagonalButton/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerButton: {
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonSet: {
    position: 'absolute',
  },
});
