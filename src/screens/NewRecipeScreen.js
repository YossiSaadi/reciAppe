import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Input, Button } from 'react-native-elements';

import { Dimensions } from 'react-native';

const WIDTH = Dimensions.get('window').width;

const NewRecipeScreen = ({ navigation }) => {
  const [ title, setTitle ] = useState('');
  const [ servings, setServings ] = useState('');
  const [ readyInMinutes, setReadyInMinutes ] = useState('');
  const [ ingredientsArray, setIngredientsArray ] = useState([]);
  const [ ingredientsInput, setIngredientsInput ] = useState('');
  const [ text, setText ] = useState('');

  useEffect(() => {
    let text = '';
    ingredientsArray.forEach((ingredient) => text += (ingredient.charAt(0).toUpperCase() + ingredient.substring(1) + '; '));
    setIngredientsInput(text);
  }, [ ingredientsArray ]);

  return (
    <View style = { styles.container }>
      <Input
        placeholder = { 'Name of dish' }
        placeholderTextColor = { 'gray' }
        value = { title }
        onChangeText = { setTitle }
        containerStyle = { styles.inputContainer }
        numberOfLines = { 1 }
        autoCorrect
        autoCapitalize = { 'words' }
      />
      <View style = { styles.smallInputsFlex }>
        <Input
          placeholder = { 'Amount of people' }
          placeholderTextColor = { 'gray' }
          value = { servings }
          onChangeText = { setServings }
          containerStyle = { styles.smallInputContainer }
          numberOfLines = { 1 }
          autoCorrect
          autoCapitalize = { 'words' }
        />
        <Input
          placeholder = { 'Cooking time (mins)' }
          placeholderTextColor = { 'gray' }
          value = { readyInMinutes }
          onChangeText = { setReadyInMinutes }
          containerStyle = { styles.smallInputContainer }
          numberOfLines = { 1 }
          autoCorrect
          autoCapitalize = { 'words' }
        />
      </View>
      <TouchableOpacity
        onPress = { () => {
          navigation.navigate('Ingredients', { setIngredientsArray, ingredientsArray });
          // setIngredientsArray([...ingredientsArray, 'someText'])
        } }
      >
        <Input
          inputStyle = { styles.ingredientsInput }
          containerStyle = { styles.inputContainerDisabled }
          inputContainerStyle = { styles.borderBottomZero }
          value = { ingredientsInput }
          disabled
          placeholder = { 'Choose Ingredients' }
          placeholderTextColor = { 'gray' }
        />
      </TouchableOpacity>

      <Input
        value = { text }
        multiline
        onChangeText = { setText }
        inputStyle = { styles.descriptionInput }
        containerStyle = { styles.inputContainer }
        numberOfLines = { 4 }
        autoCorrect
        autoCapitalize = { 'sentences' }
        placeholder = { 'How to make this recipe?' }
        placeholderTextColor = { 'gray' }
      />
      <Button
        title = { 'Publish' }
        onPress = { () => {/*publish through api*/} }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8f7f3'
  },
  switch: {
    alignSelf: 'center',
    width: 250,
    marginVertical: 20
  },
  descriptionInput: {
    textAlign: 'left',
    marginVertical: 20
  },
  smallInputsFlex: {
    flexDirection: 'row'
  },
  smallInputContainer: {
    width: (WIDTH - 10) / 2,
    borderBottomWidth: 0,
    marginBottom: 30
  },
  inputContainer: {
    width: WIDTH - 10,
    marginVertical: 20,
    borderBottomWidth: 0
  },
  ingredientsInput: {
    textTransform: 'capitalize',
    textAlign: 'center'
  },
  inputContainerDisabled: {
    width: WIDTH - 30,
    backgroundColor: '#e9e9e9',
    borderWidth: 1,
    borderColor: '#a5a5a5'
  },
  borderBottomZero: {
    borderBottomWidth: 0
  }
});

export default NewRecipeScreen;
