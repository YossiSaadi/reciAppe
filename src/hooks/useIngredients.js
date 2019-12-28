import { useState } from 'react';
import spoonacularApi, { spoonacularApiKey } from '../api/spoonacular';
import { getIngredientsListByTermAppMock } from '../mocks';

export default () => {
  const [ resultsFound, setResultsFound ] = useState([]);
  const [ errorMessage, setErrorMessage ] = useState('');

  const searchIngredientsByAutoComplete = async (term) => {
    try {
      const response = await spoonacularApi.ingredients.get(`/autocomplete`, {
        params: {
          ...spoonacularApiKey,
          query: term,
          number: 5,
          metaInformation: true
        }
      });
      // const response = getIngredientsListByTermAppMock;
      const { data } = response;

      setResultsFound(data);
      setErrorMessage('');
    } catch (e) {
      setErrorMessage('Something went wrong');
      console.log('ERROR: ' + e);
    }
  };

  return { searchIngredientsByAutoComplete, resultsFound, errorMessage };
};
