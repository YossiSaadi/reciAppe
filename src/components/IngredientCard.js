import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Image, Text } from 'react-native-elements';
import SpinnerLoader from './SpinnerLoader';

const IngredientCard = ({ ingredient, onChoosingIngredient }) => {
  const { id, image, name, aisle } = ingredient;
  const [ loading, setLoading ] = useState(false);

  return (
    <View style = { styles.bigContainer }>
      { loading ? <SpinnerLoader /> : null }
      <TouchableOpacity onPress = { () => onChoosingIngredient(name) }>
        <Image
          style = { styles.image }
          source = { { uri: `https://spoonacular.com/cdn/ingredients_100x100/${ image }` } }
          onLoadStart = { () => setLoading(true) }
          onLoadEnd = { () => setLoading(false) }
        />
      </TouchableOpacity>
      <Text style = { styles.name } numberOfLines = { 1 }>{ name } | Category: { aisle }</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  bigContainer: {
    marginRight: 20,
    marginBottom: 20
  },
  image: {
    height: 70,
    width: 100,
    borderRadius: 5,
    marginBottom: 5
  },
  name: {
    fontSize: 15,
    fontWeight: 'bold',
    textTransform: 'capitalize'
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

export default IngredientCard;
