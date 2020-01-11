import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text } from 'react-native-elements';
import useRecipes from '../hooks/useSpoonacularRecipes';
import RecipesHomeCardList from '../components/RecipesHomeCardList';

const FavoritesScreen = () => {
    const { searchRecipeById, resultsFound, errorMessage } = useRecipes();

    const filterRecipesByTime = (bottomLimit, topLimit) => {
        return resultsFound.filter((result) => {
            return result.readyInMinutes <= topLimit && result.readyInMinutes >= bottomLimit;
        });
    };

    useEffect(() => {
        (async () => await searchRecipeById())();
    }, []);

    return (
        <>

            { errorMessage ? (<Text>{ errorMessage }</Text>) : null }

            <Text>Found { resultsFound != null ? resultsFound.length : 0 } results</Text>

            <ScrollView showsVerticalScrollIndicator = { false }>
                <RecipesHomeCardList
                    title = "Less than 30 mins"
                    recipes = { filterRecipesByTime(0, 30) }
                />

                <RecipesHomeCardList
                    title = "Less than 50 mins"
                    recipes = { filterRecipesByTime(31, 50) }
                />

                <RecipesHomeCardList
                    title = "Less than 100 mins"
                    recipes = { filterRecipesByTime(51, 100) }
                />
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    searchBarContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0)',
        borderBottomColor: 'transparent',
        borderTopColor: 'transparent',
        borderWidth: 0
    },
    searchBarInputContainer: {
        backgroundColor: 'rgba(0,0,0,0.05)'
    }
});

export default FavoritesScreen;