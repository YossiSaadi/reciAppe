import axios from 'axios';

//**** Change 192.168.43.162 to IP of your computer while using EXPO for Running  and Checking ****//
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
