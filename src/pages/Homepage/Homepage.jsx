import { useEffect, useRef, useState } from "react"
import Search from "../../components/Search/Search"
import style from './Homepage.module.css'
import RecipeItem from "../../components/RecipeItem/RecipeItem"


const Homepage = () => {

    const [loading, setLoading] = useState(false)
    const [recipes, setRecipes] = useState([])
    const load = useRef();


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


    const handleLoading = () => {
        if(loading){
            setTimeout(() => {
                load.current.innerText = "Sorry I think there are no recipes with that name"
            }, 3000)
        } else {
            return 
        }
    }


    useEffect(() => {
        handleLoading()
    }, [loading])


    return (
        <div className={style.homepage}>
            <Search getData={getDataFromSearch} />
            {
                loading && <p className={style.loading} ref={load}>Loading recipes!! Please Wait...</p>
            }

            { recipes && loading === false && recipes.length > 0 ? 
              recipes.map((item) => <RecipeItem 
              key={item.id} 
              image={item.image}
              title={item.title}
              /> )
              : null  }
        </div>
    )
}

export default Homepage