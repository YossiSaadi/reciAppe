import axios from 'axios';
import Env from '../../env';

const { spoonacular } = Env;
export const spoonacularApiKey = {
  apiKey: spoonacular.apiKey
};

export default {
  recipes: axios.create({
    baseURL: `https://api.spoonacular.com/recipes`,
    params: {
      ...spoonacularApiKey
    }
  }),
  ingredients: axios.create({
    baseURL: `https://api.spoonacular.com/food/ingredients`
  })
};
