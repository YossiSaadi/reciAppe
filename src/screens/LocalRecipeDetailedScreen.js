import React, {useEffect, useState} from 'react';
import {Dimensions, FlatList, StyleSheet, View} from 'react-native';
import {Image, Text} from 'react-native-elements';
import SpinnerLoader from '../components/SpinnerLoader';
import uuidv1 from 'uuid/v1';

import noImage from "../../assets/default.jpg";

const WIDTH = Dimensions.get('window').width;

const RecipeDetailedScreen = ({navigation}) => {
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    return setRecipe(navigation.getParam('recipe'));
  }, [recipe]);

  if (!recipe || recipe.length === 0) {
    return <SpinnerLoader/>;
  }


  const RecipeInstructions = () => {
    return (
      <View>
        <Text style={styles.ingredientsListTitle}>Instructions</Text>
        <Text>{recipe.preparation}</Text>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <Text style={styles.title}>{recipe.category}</Text>
      <Image style={styles.image} source={noImage}/>
      <Text style={styles.details}>Fits {recipe.servings} People</Text>
      <Text style={styles.details}>Takes {recipe.readyInMinutes} Minutes</Text>

      <Text style={styles.ingredientsListTitle}>Ingredients</Text>
      <View>
        <FlatList
          data={recipe.ingredients}
          keyExtractor={() => uuidv1()}
          renderItem={({item}) => {
            return (
              <Text style={styles.specificIngredient}>{item}</Text>
            );
          }}
        />
      </View>

      {recipe.length === 0 ? <SpinnerLoader/> : <RecipeInstructions/>}
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
