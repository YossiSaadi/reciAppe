import { useState } from 'react';
import backendApi from '../api/backend';
// import { getRecipeByIdMock, getRecipesByTermCheeseMock, getRecipesRandomlyMock } from '../spoonacularMocks';

export default () => {
  const [ resultsFound, setResultsFound ] = useState([]);
  const [ errorMessage, setErrorMessage ] = useState('');

  const postRecipe = async (recipe) => {
    try {
      const response = await backendApi.recipes.post('');
    } catch (e) {
      setErrorMessage('Something went wrong');
      console.log('ERROR: ' + e);
    }
  };

  const searchRecipeByCategory = async (category = null) => {
    try {
      const path = category ? `?byCategory=${category}` : '';
      const response = await backendApi.recipeSearch.get(path);
      // const response = someMock ???;
    } catch (e) {
      setErrorMessage('Something went wrong');
      console.log('ERROR: ' + e);
    }
  };

  const searchRecipeByIngredients = async (ingredients = null) => {
    try {
      const path = ingredients ? `?byIngredients=${ingredients}` : '';
      const response = await backendApi.recipeSearch.get(path);
      // const response = someMock ???;
    } catch (e) {
      setErrorMessage('Something went wrong');
      console.log('ERROR: ' + e);
    }
  };

  const deleteRecipe = async (id) => {
    try {
      const response = await backendApi.recipes.delete(`/${ id }`);
      // const response = someMock ???;
    } catch (e) {
      setErrorMessage('Something went wrong');
      console.log('ERROR: ' + e);
    }
  };

  const getRecipeById = async (id) => {
    try {
      const response = await backendApi.recipes.get(`/${ id }`);
      // const response = someMock ???;
    } catch (e) {
      setErrorMessage('Something went wrong');
      console.log('ERROR: ' + e);
    }
  };

  const editRecipe = async (id) => {
    try {
      const response = await backendApi.recipes.put(`/${ id }`);
      // const response = someMock ???;
    } catch (e) {
      setErrorMessage('Something went wrong');
      console.log('ERROR: ' + e);
    }
  };

  return { postRecipe, searchRecipeByCategory, searchRecipeByIngredients, deleteRecipe, getRecipeById, editRecipe, resultsFound, errorMessage };
};
