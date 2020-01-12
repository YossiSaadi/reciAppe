import {useState} from 'react';
import spoonacularApi, {spoonacularApiKey} from '../api/spoonacular';

export default () => {
  const [resultsFound, setResultsFound] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchRecipesRandomly = async () => {
    try {
      const response = await spoonacularApi.recipes.get(`/random`, {
        params: {
          ...spoonacularApiKey,
          number: 30
        }
      });

      const {recipes} = response.data;
      setResultsFound(recipes);
      setErrorMessage('');
    } catch (e) {
      setErrorMessage('Something went wrong');
      console.log('ERROR: ' + e);
    }
  };

  const searchRecipesByTerm = async (term) => {
    try {
      const response = await spoonacularApi.recipes.get(`/search`, {
        params: {
          ...spoonacularApiKey,
          query: term,
          number: 30
        }
      });

      const { results } = response.data;
      setResultsFound(results);
      setErrorMessage('');
    } catch (e) {
      setErrorMessage('Something went wrong');
      console.log('ERROR: ' + e);
    }
  };

  const searchRecipeById = async (id) => {
    try {
      const response = await getARecipe(id);
      const results = response.data;
      setResultsFound(results);
      setErrorMessage('');
      return results;
    } catch (e) {
      setErrorMessage('Something went wrong');
      console.log('ERROR: ' + e);
    }
  };

  const getUserFavorites = async (ids) => {
    try {
      const recipes = [];
      for (const id of ids) {
        recipes.push(await getARecipe(id));
      }
      setResultsFound(recipes);
      setErrorMessage('');
    } catch (e) {
      setErrorMessage('Something went wrong');
      console.log('ERROR: ' + e);
    }
  };

  const getARecipe = async id => {
    const recipe = await spoonacularApi.recipes.get(`/${id}/information`, {
      params: {
        ...spoonacularApiKey
      }
    });
    return recipe.data;
  };

  return {
    searchRecipesByTerm,
    searchRecipeById,
    searchRecipesRandomly,
    getUserFavorites,
    resultsFound,
    errorMessage
  };
};
