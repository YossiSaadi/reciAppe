import { useState } from 'react';
import backendApi from '../api/backend';
// import { getRecipeByIdMock, getRecipesByTermCheeseMock, getRecipesRandomlyMock } from '../spoonacularMocks';

export default () => {
  const [ resultsFound, setResultsFound ] = useState([]);
  const [ errorMessage, setErrorMessage ] = useState('');

  const postUser = async (user) => {
    try {
      const response = await backendApi.recipes.post('');
    } catch (e) {
      setErrorMessage('Something went wrong');
      console.log('ERROR: ' + e);
    }
  };

  const getUserById = async (id) => {
    try {
      const response = await backendApi.users.get(`/${ id }`);
      // const response = someMock ???;
    } catch (e) {
      setErrorMessage('Something went wrong');
      console.log('ERROR: ' + e);
    }
  };

  const editUser = async (id) => {
    try {
      const response = await backendApi.recipes.put(`/${ id }`);
      // const response = someMock ???;
    } catch (e) {
      setErrorMessage('Something went wrong');
      console.log('ERROR: ' + e);
    }
  };

  const deleteUser = async (id) => {
    try {
      const response = await backendApi.recipes.delete(`/${ id }`);
      // const response = someMock ???;
    } catch (e) {
      setErrorMessage('Something went wrong');
      console.log('ERROR: ' + e);
    }
  };

  return { postUser, getUserById, editUser, deleteUser, resultsFound, errorMessage };
};
