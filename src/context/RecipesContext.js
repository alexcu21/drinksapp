import React, { createContext, useState, useEffect } from 'react'
import Axios from 'axios'


//creating the context
export const RecipesContext = createContext()

//provider is where we found functions and state
const RecipesProvider = (props) => {

    const [recipes, saveRecipes] = useState([])

    const [ search, searchRecipes ] = useState({
        name: '',
        category:''
    })

    const [query, saveQuery] = useState(false)

    const {name, category} = search

    useEffect(()=>{
        if(query){
            const getRecipes = async () => {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}&c=${category}`

                const result = await Axios.get(url)
                saveRecipes(result.data.drinks)
            }
            getRecipes()
        }
    }, [search])

    return(
        <RecipesContext.Provider
            value={{
                recipes,
                searchRecipes,
                saveQuery
            }}
        >
            {props.children}
        </RecipesContext.Provider>
    )
}

export default RecipesProvider
