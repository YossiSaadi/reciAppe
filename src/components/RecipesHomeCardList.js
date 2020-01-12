import React from 'react';
import {View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-elements';
import {withNavigation} from 'react-navigation';
import RecipeHomeCard from './RecipeHomeCard';

const RecipesHomeCardList = ({title, recipes, navigation, local, fromFavorites}) => {
  return (
    <View style={styles.listContainer}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        data={recipes}
        keyExtractor={(recipe) => recipe.id.toString()}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => {
          if (local) {
            const mappedItem = {};
            mappedItem.id = item.id;
            mappedItem.title = item.category;
            const preparation = item.preparation;
            const parts = preparation.split(";");
            mappedItem.ingredients = item.ingredients;
            mappedItem.servings = parts[0];
            mappedItem.readyInMinutes = parts[1];
            mappedItem.preparation = parts[2];
            return (
              <TouchableOpacity onPress={() => navigation.navigate('LocalRecipe', {recipe: mappedItem})}>
                <RecipeHomeCard recipe={mappedItem} local={local}/>
              </TouchableOpacity>
            );
          } else {
            return (
              <TouchableOpacity onPress={() => navigation.navigate('Recipe', {recipe: item})}>
                <RecipeHomeCard recipe={item} local={local} fromFavorites={fromFavorites}/>
              </TouchableOpacity>
            );
          }
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    marginVertical: 5,
    marginLeft: 15
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5
  }
});

export default withNavigation(RecipesHomeCardList);
