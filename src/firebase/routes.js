import axios from 'axios';

const componentDidMount = () => {

    ////////////* Recipe Controller */////////////

    //POST /recipe

    // GET /recipe/{id}
    axios
        .get('localhost:9000/recipe/{id}')
        .then()
        .catch()

    //GET /recipeSearch?byCategory={category}
    //GET /recipeSearch?byIngredients={Ingredients}
    //DELETE /recipe/{id}
    //PUT /recipe/{id}

    /////////// * User Controller */////////////

    //POST /user
    //GET /user/{id}
    //PUT /user/{id}
    //DELETE /user/{id}

};

export {
    componentDidMount
}