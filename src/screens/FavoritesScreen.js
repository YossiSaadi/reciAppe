import React, {useEffect} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {Text} from 'react-native-elements';
import useRecipes from '../hooks/useSpoonacularRecipes';
import RecipesHomeCardList from '../components/RecipesHomeCardList';
import useBackendUsers from "../hooks/useBackendUsers";
import {getCurrentUser} from "../firebase/auth";

const FavoritesScreen = () => {
  const {errorMessage, getUserFavorites, favorites} = useRecipes();
  const {getUserById} = useBackendUsers();

  useEffect(() => {
    (async () => {
      const userId = getCurrentUser().uid;
      const user = await getUserById(userId);
      return await getUserFavorites(user.favoriteRecipes);
    })();
  }, [favorites]);

  return (
    <>
      {errorMessage ? (<Text>{errorMessage}</Text>) : null}
      <Text>Found {favorites != null ? favorites.length : 0} results</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <RecipesHomeCardList
          title="My Favorites"
          recipes={favorites}
          fromFavorites={true}
        />
      </ScrollView>
    </>
  );
};

export default FavoritesScreen;
