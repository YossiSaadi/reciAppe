import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, Image, Text} from 'react-native-elements';
import SpinnerLoader from './SpinnerLoader';
import useBackendUsers from "../hooks/useBackendUsers";
import {getCurrentUser} from "../firebase/auth";
import noImage from "../../assets/default.jpg"

const RecipeHomeCard = ({recipe, local, fromFavorites}) => {
  const {id, title, readyInMinutes, servings} = recipe;
  const [loading, setLoading] = useState(false);
  const {editUser} = useBackendUsers();

  const handleAddRecipeToFavorites = async () => {
    const userId = getCurrentUser().uid;
    await editUser(userId, [id]);
    alert("Added to favorites!");
  };

  return (
    <View style={styles.bigContainer}>
      {loading ? <SpinnerLoader/> : null}
      <Image
        style={styles.image}
        source={local ? noImage : {uri: `https://spoonacular.com/recipeImages/${id}-556x370`}}
        onLoadStart={() => setLoading(true)}
        onLoadEnd={() => setLoading(false)}
      />
      <Text style={styles.name} numberOfLines={1}>{title}</Text>
      <View style={styles.textContainer}>
        <Text style={styles.details}>Takes {readyInMinutes} Minutes, Fits {servings} People</Text>
      </View>
      {!local && !fromFavorites && <Button
        title={'Add to favorites'}
        onPress={async () => await handleAddRecipeToFavorites()}
      />}
    </View>
  );
};

const styles = StyleSheet.create({
  bigContainer: {
    marginRight: 20
  },
  image: {
    height: 120,
    width: 250,
    borderRadius: 5,
    marginBottom: 5
  },
  name: {
    fontSize: 15,
    fontWeight: 'bold',
    width: 250
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  details: {
    fontSize: 12,
    color: '#858585'

  }
});

export default RecipeHomeCard;
