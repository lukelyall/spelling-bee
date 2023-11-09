import React from 'react';
import { View } from 'react-native';

const HexagonalButton = ({ buttonColor }) => {
  const styles = {
    block: {
      width: 100,
      height: 55,
      transform: "rotate(90deg)"
    },
    blockInner: {
      width: 100,
      height: 65,
      backgroundColor: buttonColor || "rgb(200,200,200)",
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
      borderTopColor: buttonColor || "rgb(200,200,200)",
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
      borderBottomColor: buttonColor || "rgb(200,200,200)",
    },
  };

  return (
    <View style={styles.block}>
      <View style={styles.blockInner}/>
      <View style={styles.blockTop}/>
      <View style={styles.blockBottom}/>
    </View>
  );
};

export default HexagonalButton;
