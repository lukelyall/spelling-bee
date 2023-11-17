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

const getRandomLetters = (availableLetters) => {
  const randomIndex = Math.floor(Math.random() * availableLetters.length);
  const chosenLetter = availableLetters[randomIndex];
  availableLetters.splice(randomIndex, 1);
  return chosenLetter;
}

const getRandomVowels = (availableVowels) => {
  const randomIndex = Math.floor(Math.random() * availableVowels.length);
  const chosenVowel = availableVowels[randomIndex];
  availableVowels.splice(randomIndex, 1);
  return chosenVowel;
};

export default function App() { 
  const allVowels = 'AEIOU';
  const [availableVowels, setAvailableVowels] = React.useState([...allVowels]);
  const allLetters = 'BCDFGHJKLMNPQRSTVWXYZ';
  const [availableLetters, setAvailableLetters] = React.useState([...allLetters]);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [errorModalVisible, setErrorModalVisible] = React.useState(false);
  const [errorModalText, setErrorModalText] = React.useState('');
  const [inputText, setInputText] = React.useState('');
  const [isCaretVisible, setIsCaretVisible] = React.useState(true);
  const [validWords, setValidWords] = React.useState([]);
  const [randomLetters, setRandomLetters] = React.useState([]);
  const [randomVowels, setRandomVowels] = React.useState([]);

  React.useEffect(() => {
    const newRandomLetters = Array.from({ length: 5 }, () => getRandomLetters(availableLetters));
    setRandomLetters(newRandomLetters);
  }, []);

  React.useEffect(() => {
    const newRandomVowels = Array.from({ length: 2 }, () => getRandomVowels(availableVowels));
    setRandomVowels(newRandomVowels);
  }, []);

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
    if(word.includes(randomLetters[3])){
      const lowercasedWord = word.toLowerCase();
      return dictionaryChunks.some((chunk) => chunk.hasOwnProperty(lowercasedWord));
    }
    else{
      return false;
    }
  };

  const handleEnterButtonPress = () => {
    if (isWordValid(inputText) && !validWords.includes(inputText)) {
      setValidWords((prevList) => [...prevList, inputText]);
      setInputText('');
    } 
    else if (validWords.includes(inputText)) {
      setInputText('');
      setErrorModalText(`${inputText} is already in the list.`);
      setErrorModalVisible(true);
      setTimeout(() => {
        setErrorModalVisible(false);
      }, 1000)
    }
    else {
      setErrorModalText(`${inputText} is not a valid word.`);
      setErrorModalVisible(true);
      setInputText('');
      setTimeout(() => {
        setErrorModalVisible(false);
      }, 1000)
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
              <Text style = {styles.listText}>Tap Here to Close</Text>
            </Pressable>
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

      <Modal
        animationType="none"
        transparent={true}
        visible={errorModalVisible}
        onRequestClose={() => {
          setErrorModalVisible(false);
      }}>
        <View style={styles.errorModalContainer}>
          <View style={styles.errorModalContent}>
            <Text style={styles.errorText}>{errorModalText}</Text>
          </View>
        </View>
      </Modal>

      <View style = {styles.spellingBeeText}>
        <Text style={styles.beeText}>{inputText}</Text>
        {isCaretVisible && <View style={styles.caret} />}
      </View>

      <View style = {styles.topButton}>
        <HexagonalButton onPress={() => handleHexagonalButtonPress(randomLetters[0])} buttonText = {randomLetters[0]}/>
      </View>
      <View style = {styles.topButtons}>
        <HexagonalButton onPress={() => handleHexagonalButtonPress(randomLetters[1])} buttonText = {randomLetters[1]}/>
        <HexagonalButton onPress={() => handleHexagonalButtonPress(randomLetters[2])} buttonText = {randomLetters[2]}/>
      </View>
      <View style = {styles.centerButton}>
        <HexagonalButton buttonColor="rgb(247,218,33)" onPress={() => handleHexagonalButtonPress(randomLetters[3])} buttonText = {randomLetters[3]}/>
      </View>
      <View style = {styles.bottomButtons}>
        <HexagonalButton onPress={() => handleHexagonalButtonPress(randomLetters[4])} buttonText = {randomLetters[4]}/>
        <HexagonalButton onPress={() => handleHexagonalButtonPress(randomVowels[0])} buttonText = {randomVowels[0]}/>
      </View>
      <View style = {styles.bottomButton}>
        <HexagonalButton onPress={() => handleHexagonalButtonPress(randomVowels[1])} buttonText = {randomVowels[1]}/>
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
    marginTop: 20,
    marginBottom: 20,
  },
  listButton: {
    borderColor: 'rgb(230,230,230)',
    borderWidth: 2,
    borderRadius: 5,
    padding: 10,
    flexDirection: 'row',
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
  modalContainer: {
    marginTop: 114,
    flex: 1,
  },
  modalContent: {
    borderColor: 'rgb(230,230,230)',
    borderWidth: 2,
    borderRadius: 5,
    backgroundColor: 'white',
    padding: 10,
    width: '90%',
    height: '80%',
    alignSelf: 'center',
  },
  errorModalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 450,
  },
  errorModalContent: {
    borderColor: 'rgb(230,230,230)',
    borderWidth: 2,
    backgroundColor: 'white',
    padding: 20,
    width: '80%',
    alignSelf: 'center',
  },
  errorText: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
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
});