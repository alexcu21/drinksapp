import React, { createContext, useState, useEffect } from 'react'
import Axios from 'axios'


//creating the context
export const CategoriesContext = createContext('drinks')

//provider is where we found functions and state
const CategoriesProvider = (props) => {
    //creating the context's state
    const [ categories, saveCategories ] = useState([])

    //run api call
    useEffect(() => {
        const getCategories = async () => {
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'

            const categories = await Axios.get(url)

            saveCategories(categories.data.drinks)
        }

        getCategories()

    }, [])

    return(
        <CategoriesContext.Provider
            value={{
                categories
            }}
        >

            {props.children}
        </CategoriesContext.Provider>
    )
}

export default CategoriesProvider
