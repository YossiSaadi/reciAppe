import {useState} from 'react';
import backendApi from '../api/backend';

export default () => {
    const [resultsFound, setResultsFound] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const postRecipe = async (id, file) => {
        try {
            const json = {
                id:id,
                category: "dd",
                ingredients: ["d", "b"],
                preparation: "something"
            };
            const params = new URLSearchParams();
            for (const key in json) {
                params.append(key, json[key]);
            }
            let response;

            if (file) {
                const data = new FormData();
                data.append("recipeImage", file);
                response = await backendApi.recipes.post("http://192.168.43.162:9000/recipe?" + params.toString(), data);
            } else {
                response = await backendApi.recipes.post("http://192.168.43.162:9000/recipe", params);
            }
            const results = response.data;
            setResultsFound(results);
            setErrorMessage('');
        } catch (e) {
            setErrorMessage('Something went wrong');
            console.log('ERROR: ' + e);
        }
    };

    const searchRecipeByCategory = async (category = null) => {
        try {
            const path = category ? `?byCategory=${category}` : '';
            const response = await backendApi.recipeSearch.get("http://192.168.43.162:9000/recipeSearch/" + path);
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
            const response = await backendApi.recipeSearch.get("http://192.168.43.162:9000/recipeSearch/" + path);
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
            const response = await backendApi.recipes.delete("http://192.168.43.162:9000/recipe/" + id);
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
            const response = await backendApi.recipes.get("http://192.168.43.162:9000/recipe/" + id);
            const results = response.data;
            setResultsFound(results);
            setErrorMessage('');
        } catch (e) {
            setErrorMessage('Something went wrong');
            console.log('ERROR: ' + e);
        }
    };

    const editRecipe = async (id, file) => {
        try {
            const json = {
                id:id,
                category: "dd",
                ingredients: ["d", "b"],
                preparation: "something"
            };
            const params = new URLSearchParams();
            for (const key in json) {
                params.append(key, json[key]);
            }
            let response;

            if (file) {
                const data = new FormData();
                data.append("recipeImage", file);
                response = await backendApi.recipes.put("http://192.168.43.162:9000/recipe/"+id+"?" + params.toString(), data);
            } else {
                response = await backendApi.recipes.put("http://192.168.43.162:9000/recipe/"+id, params);
            }
            const results = response.data;
            setResultsFound(results);
            setErrorMessage('');
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
        errorMessage
    };
};