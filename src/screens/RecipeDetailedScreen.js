import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Image, Text } from 'react-native-elements';
import useRecipes from '../hooks/useRecipes';
import SpinnerLoader from '../components/SpinnerLoader';

const RecipeDetailedScreen = ({ navigation }) => {
  const [ recipe, setRecipe ] = useState(null);
  const { searchRecipeById, resultsFound } = useRecipes();

  useEffect(() => {
    (async () => {
      const recipeId = navigation.getParam('recipeId');
      if (!recipe) {
        await searchRecipeById(recipeId);
        console.log('API CALL BY ID !!', recipeId);
      }
      setRecipe(resultsFound);
    })();
  }, [ recipe ]);

  if (!recipe) {
    return <SpinnerLoader />;
  }

  return (
    <View>
      <Text>{ recipe.title }</Text>
      <Image style = { styles.image } source = { { uri: recipe.image } } />
      <Text>Fits { recipe.servings } People</Text>
      <Text>Takes { recipe.readyInMinutes } Minutes</Text>
      <Text>{ recipe.aggregateLikes } Likes</Text>

      <Text>Ingredients</Text>
      <View style = { styles.ingredientsList }>
        <FlatList
          data = { recipe.extendedIngredients }
          keyExtractor = { (ingredient) => ingredient.id.toString() }
          renderItem = { ({ item }) => {
            return (
              <Text style = { styles.specificIngredient }>{ item.name }</Text>
            );
          } }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300
  },
  ingredientsList: {
    justifyContent: 'space-between'
  },
  specificIngredient: {
    flexDirection: 'row',
    marginLeft: 50,
    marginVertical: 5
  }
});

export default RecipeDetailedScreen;
