import * as React from 'react'

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Modal, FlatList } from 'react-native';
import HexagonalButton from "./components/HexagonalButton"

import dictionaryChunk1 from "./data/dictionary_chunk_1.json"
import dictionaryChunk2 from "./data/dictionary_chunk_2.json"
import dictionaryChunk3 from "./data/dictionary_chunk_3.json"
import dictionaryChunk4 from "./data/dictionary_chunk_4.json"
import dictionaryChunk5 from "./data/dictionary_chunk_5.json"
import dictionaryChunk6 from "./data/dictionary_chunk_6.json"
import dictionaryChunk7 from "./data/dictionary_chunk_7.json"
import dictionaryChunk8 from "./data/dictionary_chunk_8.json"

const dictionaryChunks = [dictionaryChunk1, dictionaryChunk2, dictionaryChunk3, dictionaryChunk4, dictionaryChunk5, dictionaryChunk6, dictionaryChunk7, dictionaryChunk8];

export default function App() {

  const [modalVisible, setModalVisible] = React.useState(false);
  const [inputText, setInputText] = React.useState('');
  const [isCaretVisible, setIsCaretVisible] = React.useState(true);
  const [validWords, setValidWords] = React.useState([]);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  }

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setIsCaretVisible((prev) => !prev);
    }, 500);
    return () => clearInterval(intervalId);
  }, []);
  const handleHexagonalButtonPress = (text) => {
    setInputText(inputText + text);
  };
  const handleDeleteButtonPress = () => {
    setInputText(inputText.slice(0, -1));
  };
  const isWordValid = (word) => {
    if(word.includes("L")){
      const lowercasedWord = word.toLowerCase();
      return dictionaryChunks.some((chunk) => chunk.hasOwnProperty(lowercasedWord));
    }
    else{
      return false;
    }
  };
  const handleEnterButtonPress = () => {
    if (isWordValid(inputText) && !validWords.includes(inputText)) {
      console.log(`${inputText} is a valid word!`);
      setValidWords((prevList) => [...prevList, inputText.toLowerCase()]);
      setInputText('');
    } else {
      console.log(`${inputText} is not a valid word or is already in the list.`);
    }
  };

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
            <FlatList
              data={validWords}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <Text style={styles.listText}>{item}</Text>
              )}
            />
          </View>
        </View>
      </Modal>

      <View style = {styles.spellingBeeText}>
      <Text style={styles.beeText}>{inputText}</Text>
        {isCaretVisible && <View style={styles.caret} />}
      </View>

      <View style = {styles.topButton}>
        <HexagonalButton onPress={() => handleHexagonalButtonPress("F")} buttonText = "F"/>
      </View>
      <View style = {styles.topButtons}>
        <HexagonalButton onPress={() => handleHexagonalButtonPress("R")} buttonText = "R"/>
        <HexagonalButton onPress={() => handleHexagonalButtonPress("Y")} buttonText = "Y"/>
      </View>
      <View style = {styles.centerButton}>
        <HexagonalButton buttonColor="rgb(247,218,33)" onPress={() => handleHexagonalButtonPress("L")} buttonText = "L"/>
      </View>
      <View style = {styles.bottomButtons}>
        <HexagonalButton onPress={() => handleHexagonalButtonPress("G")} buttonText = "G"/>
        <HexagonalButton onPress={() => handleHexagonalButtonPress("I")} buttonText = "I"/>
      </View>
      <View style = {styles.bottomButton}>
        <HexagonalButton onPress={() => handleHexagonalButtonPress("O")} buttonText = "O"/>
      </View>
      <View style = {styles.footer}>
        <Pressable style = {styles.footerButtons} onPress={handleDeleteButtonPress}>
          <Text style = {styles.footerText}>Delete</Text>
        </Pressable>
        <Pressable style = {styles.footerButtons} onPress={handleEnterButtonPress}>
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
    marginBottom: 20,
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
  spellingBeeText: {
    flexDirection: 'row',
    height: 180,
    alignItems: 'center',
  },
  beeText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  caret: {
    position: 'absolute',
    backgroundColor: 'black',
    width: 2,
    height: 30,
    right: 0,
  },
  topButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
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
    height: 50,
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
    marginTop: 114,
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
