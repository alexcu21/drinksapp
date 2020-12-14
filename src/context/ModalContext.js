import React, { createContext, useEffect, useState } from 'react'
import Axios from 'axios'

export const ModalContext = createContext()

const ModalProvider = (props) => {

    //state for the provider
    const [ idrecipe, saveIdRecipe ] = useState(null)
    const [ inforecipe, saveRecipe ] = useState({})

    // once we have a recipe we call the api

    useEffect( () => {
        const getRecipe = async () => {
            if(!idrecipe) return

            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idrecipe}`

            const result = await Axios.get(url)

            saveRecipe(result.data.drinks[0])
        }
        getRecipe()
    }, [idrecipe])

    return(
        <ModalContext.Provider
            value={{
                inforecipe,
                saveIdRecipe,
                saveRecipe
            }}
        >
            { props.children }
        </ModalContext.Provider>
    )
}

export default ModalProvider
