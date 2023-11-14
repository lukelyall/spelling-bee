import * as React from 'react'

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import HexagonalButton from "./components/HexagonalButton"

export default function App() {

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style = {styles.topButton}>
        <HexagonalButton onPress={() => console.log("Top Button Pressed")}/>
      </View>
      <View style = {styles.topButtons}>
        <HexagonalButton onPress={() => console.log("Top Left Button Pressed")}/>
        <HexagonalButton onPress={() => console.log("Top Right Button Pressed")}/>
      </View>
      <View style = {styles.centerButton}>
        <HexagonalButton buttonColor="rgb(247,218,33)" onPress={() => console.log("Center Button Pressed")}/>
      </View>
      <View style = {styles.bottomButtons}>
        <HexagonalButton onPress={() => console.log("Bottom Left Button Pressed")}/>
        <HexagonalButton onPress={() => console.log("Bottom Right Button Pressed")}/>
      </View>
      <View style = {styles.bottomButton}>
        <HexagonalButton onPress={() => console.log("Bottom Button Pressed")}/>
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
  topButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  topButtons: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 85,
  },
  centerButton: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomButtons: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 85,
  },
  bottomButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
