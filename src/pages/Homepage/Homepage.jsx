import { useState } from "react"
import Search from "../../components/Search/Search"
import style from './Homepage.module.css'


const Homepage = () => {

    const [loading, setLoading] = useState(false)
    const [recipes, setRecipes] = useState([])


    const getDataFromSearch = (getData) => {


        setLoading(true);

        async function getRecipes(){
            const apiResponse = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=0b486e71c68f4b9c9a0e5430c2d4b447&query=${getData}`)
            const result = await apiResponse.json()

            const { results } = result
            if(results && results.length > 0 ){
                setLoading(false)
                setRecipes(results)
            }

        }

        getRecipes()
    }

    console.log(loading, recipes, "The data is here");

    return (
        <div className={style.homepage}>
            <Search getData={getDataFromSearch} />
        </div>
    )
}

export default Homepage