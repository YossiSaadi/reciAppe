import axios from 'axios';

//**** Change *** to IP of your computer while using EXPO for Running  and Checking ****//
export default {
  recipes: axios.create({
    baseURL: `http://***:9000/recipe`
  }),
  recipeSearch: axios.create({
    baseURL: `http://***:9000/recipeSearch`
  }),
  users: axios.create({
    baseURL: `http://***:9000/user`
  })
};
