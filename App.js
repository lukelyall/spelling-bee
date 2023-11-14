import * as React from 'react'

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Modal } from 'react-native';
import HexagonalButton from "./components/HexagonalButton"

export default function App() {

  const [modalVisible, setModalVisible] = React.useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style = {styles.wordList}>
        <Pressable style = {styles.listButton} onPress={toggleModal}>
          <Text style = {styles.listText}>Your words ...</Text>
        </Pressable>
      </View>

      <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          console.log('Modal has been closed.');
        }}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Pressable onPress={toggleModal}>
              <Text style = {styles.listText}>Your Words</Text>
            </Pressable>
            <Text style = {styles.listText}>--------------------</Text>
            <Text style = {styles.listText}>Modal Content</Text>
          </View>
        </View>
      </Modal>

      <View style = {styles.topButton}>
        <HexagonalButton onPress={() => console.log("Top Button Pressed")} buttonText = "F"/>
      </View>
      <View style = {styles.topButtons}>
        <HexagonalButton onPress={() => console.log("Top Left Button Pressed")} buttonText = "R"/>
        <HexagonalButton onPress={() => console.log("Top Right Button Pressed")} buttonText = "Y"/>
      </View>
      <View style = {styles.centerButton}>
        <HexagonalButton buttonColor="rgb(247,218,33)" onPress={() => console.log("Center Button Pressed")} buttonText = "L"/>
      </View>
      <View style = {styles.bottomButtons}>
        <HexagonalButton onPress={() => console.log("Bottom Left Button Pressed")} buttonText = "G"/>
        <HexagonalButton onPress={() => console.log("Bottom Right Button Pressed")} buttonText = "I"/>
      </View>
      <View style = {styles.bottomButton}>
        <HexagonalButton onPress={() => console.log("Bottom Button Pressed")} buttonText = "O"/>
      </View>
      <View style = {styles.footer}>
        <Pressable style = {styles.footerButtons} onPress={() => console.log("Delete Button Pressed")}>
          <Text style = {styles.footerText}>Delete</Text>
        </Pressable>
        <Pressable style = {styles.footerButtons} onPress={() => console.log("Enter Button Pressed")}>
          <Text style = {styles.footerText}>Enter</Text>
        </Pressable>
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
  wordList: {
    width: '90%',
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 150,
  },
  listButton: {
    borderColor: 'rgb(230,230,230)',
    borderWidth: 2,
    borderRadius: 5,
    padding: 10,
    width: '100%',
  },
  listText: {
    fontSize: 15,
    color: 'rgb(180,180,180)',
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
  footer: {
    flexDirection: 'row',
    marginVertical: 20,
    height: 90,
    gap: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerButtons: {
    padding: 15,
    borderColor: 'rgb(230,230,230)',
    borderWidth: 2,
    borderRadius: 25,
  },
  footerText: {
    fontSize: 15,
  },
  modalContainer: {
    marginTop: 133,
    flex: 1,
  },
  modalContent: {
    borderColor: 'rgb(230,230,230)',
    borderWidth: 2,
    borderRadius: 5,
    backgroundColor: 'white',
    padding: 20,
    width: '90%',
    height: '80%',
    alignSelf: 'center',
  },
});
