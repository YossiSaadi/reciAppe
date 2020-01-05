import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text, SearchBar } from 'react-native-elements';
import useRecipes from '../hooks/useSpoonacularRecipes';
import RecipesHomeCardList from '../components/RecipesHomeCardList';

const HomeScreen = () => {
  const [ searchTermInput, setSearchTermInput ] = useState('');
  const { searchRecipesByTerm, searchRecipesRandomly, resultsFound, errorMessage } = useRecipes();

  const filterRecipesByTime = (bottomLimit, topLimit) => {
    return resultsFound.filter((result) => {
      return result.readyInMinutes <= topLimit && result.readyInMinutes >= bottomLimit;
    });
  };

  useEffect(() => {
    (async () => await searchRecipesRandomly())();
  }, []);

  return (
    <>
      <SearchBar
        containerStyle = { styles.searchBarContainer }
        inputContainerStyle = { styles.searchBarInputContainer }
        placeholder = { 'Search for recipes...' }
        value = { searchTermInput }
        onChangeText = { setSearchTermInput }
        onEndEditing = { () => searchRecipesByTerm(searchTermInput) }
      />

      { errorMessage ? (<Text>{ errorMessage }</Text>) : null }

      <Text>Found { resultsFound.length } results</Text>

      <ScrollView showsVerticalScrollIndicator = { false }>
        <RecipesHomeCardList
          title = "Less than 30 mins"
          recipes = { filterRecipesByTime(0, 30) }
        />

        <RecipesHomeCardList
          title = "Less than 50 mins"
          recipes = { filterRecipesByTime(31, 50) }
        />
        <RecipesHomeCardList
          title = "Less than 100 mins"
          recipes = { filterRecipesByTime(51, 100) }
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
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

export default HomeScreen;
