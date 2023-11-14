import React from 'react';
import { View, Pressable, Text } from 'react-native';

const HexagonalButton = ({ buttonColor, onPress, buttonText }) => {
  const handlePress = () => {
    if (onPress) {
      onPress();
    }
  };

  const styles = {
    block: {
      width: 100,
      height: 55,
      transform: "rotate(90deg)"
    },
    blockInner: {
      width: 100,
      height: 65,
      backgroundColor: buttonColor || "rgb(230,230,230)",
      alignItems: 'center',
      justifyContent: 'center',
    },
    blockBottom: {
      position: "absolute",
      bottom: -34.5,
      left: 0,
      width: 0,
      height: 0,
      borderStyle: "solid",
      borderLeftWidth: 50,
      borderLeftColor: "transparent",
      borderRightWidth: 50,
      borderRightColor: "transparent",
      borderTopWidth: 25,
      borderTopColor: buttonColor || "rgb(230,230,230)",
    },
    blockTop: {
      position: "absolute",
      top: -24.5,
      left: 0,
      width: 0,
      height: 0,
      borderStyle: "solid",
      borderLeftWidth: 50,
      borderLeftColor: "transparent",
      borderRightWidth: 50,
      borderRightColor: "transparent",
      borderBottomWidth: 25,
      borderBottomColor: buttonColor || "rgb(230,230,230)",
    },
    buttonText: {
      color: 'black',
      transform: 'rotate(-90deg)',
      textAlign: 'center',
      fontSize: 30,
      fontWeight: 'bold',
    },
  };

  return (
    <Pressable style={styles.block} onPress = {handlePress}>
      <View style={styles.blockInner}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </View>
      <View style={styles.blockTop}/>
      <View style={styles.blockBottom}/>
    </Pressable>
  );
};

export default HexagonalButton;
