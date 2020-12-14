import React, { useContext, useState } from 'react'
import { CategoriesContext } from "../context/CategoriesContext";
import { RecipesContext } from "../context/RecipesContext";

const Form = () => {

    const [ search, saveSearch ] = useState({
        name: '',
        category:''
    })

    const { categories } = useContext(CategoriesContext)
    const { searchRecipes, saveQuery } = useContext(RecipesContext)

    //reading contents

    const getRecipeData = e => {
        saveSearch({
            ...search,
            [e.target.name] : e.target.value

        })
    }

    return(
        <form
            className="col-12"
            action=""
            onSubmit={ e => {
                e.preventDefault()
                searchRecipes(search)
                saveQuery(true)
            } }
        >

            <fieldset className="text-center">
                <legend> search by category and ingredients</legend>
            </fieldset>
            <div className="row mt-4">
                <div className="col-md-4">
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Search by ingredient"
                        onChange={getRecipeData}
                    />
                </div>
                <div className="col-md-4">
                    <select
                        className="form-control"
                        name="category"
                        onChange={getRecipeData}
                        >

                        <option value="">-- select category --</option>
                        { categories.map( category => (
                            <option
                                key={category.strCategory}
                                value={category.strCategory}
                            >
                                {category.strCategory}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="col-md-4">
                    <input
                        type="submit"
                        className="btn btn-block btn-primary"
                        value="search for drinks"
                    />
                </div>
            </div>
        </form>
    )
}

export default Form
