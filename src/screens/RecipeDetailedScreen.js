import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Image, Text } from 'react-native-elements';
import useRecipes from '../hooks/useRecipes';
import SpinnerLoader from '../components/SpinnerLoader';

import { Dimensions } from 'react-native';

const WIDTH = Dimensions.get('window').width;

const RecipeDetailedScreen = ({ navigation }) => {
  const [ recipe, setRecipe ] = useState(null);
  const { searchRecipeById, resultsFound } = useRecipes();

  useEffect(() => {
    (async () => {
      const recipeId = navigation.getParam('recipeId');
      if (!recipe) {
        await searchRecipeById(recipeId);
      }
      setRecipe(resultsFound);
    })();
  }, [ recipe ]);

  if (!recipe || recipe.length === 0) {
    return <SpinnerLoader />;
  }

  const renderInstruction = ({ item }) => {
    return (
      <View>
        <Text style={styles.instructions}>{item.number}. {item.step}</Text>
      </View>
    );
  };

  const RecipeInstructions = () => {
    const { analyzedInstructions } = recipe;
    const { steps } = analyzedInstructions[0];

    return (
      <View>
        <Text style = { styles.ingredientsListTitle }>Instructions</Text>
        <FlatList
          scrollEnabled
          data = { steps }
          keyExtractor = { (step, index) => index.toString() }
          renderItem = { renderInstruction }
        />
      </View>
    );
  };

  return (
    <View style = {{flex: 1}}>
      <Text style = { styles.title }>{ recipe.title }</Text>
      <Image style = { styles.image } source = { { uri: recipe.image } } />
      <Text style = { styles.details }>Fits { recipe.servings } People</Text>
      <Text style = { styles.details }>Takes { recipe.readyInMinutes } Minutes</Text>

      <Text style = { styles.ingredientsListTitle }>Ingredients</Text>
      <View>
        <FlatList
          data = { recipe.extendedIngredients }
          keyExtractor = { (ingredient, index) => index.toString() }
          renderItem = { ({ item }) => {
            return (
              <Text style = { styles.specificIngredient }>{ item.name }</Text>
            );
          } }
        />
      </View>

      { recipe.length === 0 ? <SpinnerLoader /> : <RecipeInstructions/> }
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: WIDTH,
    height: 150
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    backgroundColor: '#d9d9d9',
    paddingVertical: 5
  },
  details: {
    fontSize: 16,
    fontWeight: '500',
    marginVertical: 5,
    marginHorizontal: 5
  },
  ingredientsListTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginHorizontal: 5
  },
  specificIngredient: {
    fontSize: 18,
    marginHorizontal: 5,
    marginVertical: 5
  },
  instructions: {
    fontSize: 17,
    marginHorizontal: 5,
    marginVertical: 5
  }
});

export default RecipeDetailedScreen;
