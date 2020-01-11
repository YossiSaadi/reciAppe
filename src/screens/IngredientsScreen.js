import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';
import { SearchBar } from 'react-native-elements';
import useIngredients from '../hooks/useSpoonacularIngredients';
import IngredientCard from '../components/IngredientCard';

const IngredientsScreen = ({ navigation }) => {
  const [ ingredientsList, setIngredientsList ] = useState('');
  const { searchIngredientsByAutoComplete, resultsFound, errorMessage } = useIngredients();
  const [ searchTermInput, setSearchTermInput ] = useState('');

  return (
    <View>
      <SearchBar
        containerStyle = { styles.searchBarContainer }
        inputContainerStyle = { styles.searchBarInputContainer }
        placeholder = { 'Search for ingredients...' }
        value = { searchTermInput }
        onChangeText = { setSearchTermInput }
        onEndEditing = { () => searchIngredientsByAutoComplete(searchTermInput) }
      />

      { errorMessage ? (<Text>{ errorMessage }</Text>) : null }

      <Text>Found { resultsFound.length } results</Text>

      <FlatList
        data = { resultsFound }
        keyExtractor = { (ingredient) => ingredient.id.toString() }
        renderItem = { ({ item }) => {
          return (
            <TouchableOpacity onPress = { () => item.name }>
              <IngredientCard
                ingredient = { item }
                onChoosingIngredient = { (value) => {
                  const { setIngredientsArray, ingredientsArray } = navigation.state.params;
                  setIngredientsArray([ ...ingredientsArray, value ]);
                  navigation.goBack();
                } }
              />
            </TouchableOpacity>
          );
        } }
      />

      <Text>{ ingredientsList }</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  searchBarContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
    borderWidth: 0
  },
  searchBarInputContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)'
  }
});

export default IngredientsScreen;
