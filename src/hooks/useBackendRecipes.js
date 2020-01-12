import {useState} from 'react';
import backendApi from '../api/backend';

export default () => {
  const [resultsFound, setResultsFound] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const postRecipe = async (json, file) => {
    try {
      const params = new URLSearchParams();
      Object.entries(json).forEach(([k, v]) => params.append(k, v));

      let response;

      if (file) {
        const data = new FormData();
        data.append("recipeImage", file);
        response = await backendApi.recipes.post(`?${params.toString()}`, data);
      } else {
        response = await backendApi.recipes.post("", params);
      }
      const results = response.data;
      setErrorMessage('');
      return results;
    } catch (e) {
      setErrorMessage('Something went wrong');
      console.log('ERROR: ' + e);
    }
  };

  const searchRecipeByCategory = async (category = null) => {
    try {
      const path = category ? `?byCategory=${category}` : '';
      const response = await backendApi.recipeSearch.get(path);
      const results = response.data;
      setResultsFound(results);
      setErrorMessage('');
    } catch (e) {
      setErrorMessage('Something went wrong');
      console.log('ERROR: ' + e);
    }
  };

  const searchRecipeByIngredients = async (ingredients = null) => {
    try {
      const path = ingredients ? `?byIngredients=${ingredients}` : '';
      const response = await backendApi.recipeSearch.get(path);
      const results = response.data;
      setResultsFound(results);
      setErrorMessage('');
    } catch (e) {
      setErrorMessage('Something went wrong');
      console.log('ERROR: ' + e);
    }
  };

  const deleteRecipe = async (id) => {
    try {
      const response = await backendApi.recipes.delete(`/${id}`);
      const results = response.data;
      setResultsFound(results);
      setErrorMessage('');
    } catch (e) {
      setErrorMessage('Something went wrong');
      console.log('ERROR: ' + e);
    }
  };

  const getRecipeById = async (id) => {
    try {
      const response = await backendApi.recipes.get(`/${id}`);
      const results = response.data;
      setErrorMessage('');
      return results;
    } catch (e) {
      setErrorMessage('Something went wrong');
      console.log('ERROR: ' + e);
    }
  };

  const editRecipe = async (json, file) => {
    try {
      const params = new URLSearchParams();
      Object.entries(json).forEach(([k, v]) => params.append(k, v));

      let response;

      if (file) {
        const data = new FormData();
        data.append("recipeImage", file);
        response = await backendApi.recipes.put(`/${id}?${params.toString()}`, data);
      } else {
        response = await backendApi.recipes.put(`/${id}`, params);
      }
      const results = response.data;
      setErrorMessage('');
      return results;
    } catch (e) {
      setErrorMessage('Something went wrong');
      console.log('ERROR: ' + e);
    }
  };

  return {
    postRecipe,
    searchRecipeByCategory,
    searchRecipeByIngredients,
    deleteRecipe,
    getRecipeById,
    editRecipe,
    resultsFound,
    setResultsFound,
    errorMessage
  };
};
