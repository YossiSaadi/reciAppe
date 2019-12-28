import React from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import RecipeHomeCard from './RecipeHomeCard';

const RecipesHomeCardList = ({ title, recipes, navigation }) => {
  return (
    <View style = { styles.listContainer }>
      <Text style = { styles.title }>{ title }</Text>
      <FlatList
        horizontal
        data = { recipes }
        keyExtractor = { (recipe) => recipe.id.toString() }
        showsHorizontalScrollIndicator = { false }
        renderItem = { ({ item }) => {
          return (
            <TouchableOpacity onPress = { () => navigation.navigate('Recipe', { recipeId: item.id }) }>
              <RecipeHomeCard recipe = { item } />
            </TouchableOpacity>
          );
        } }
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
