import axios from 'axios';

export default {
  recipes: axios.create({
    baseURL: `http://192.168.43.162:9000/recipe`
  }),
  recipeSearch: axios.create({
    baseURL: `http://192.168.43.162:9000/recipeSearch`
  }),
  users: axios.create({
    baseURL: `http://192.168.43.162:9000/user/`
  })
};
