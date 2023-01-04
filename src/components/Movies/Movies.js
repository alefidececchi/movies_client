import { useState } from 'react'
import { useSelector } from 'react-redux'

import ButtonShowMore from '../ButtonShowMore/ButtonShowMore.js'
import Carousel from '../Carousel/Carousel.js'
import Categories from '../Categories/Categories.js'
import ContainerMovies from '../Container/ContainerMovies.js'
import SearchBar from '../SearchBar/SearchBar.js'

const Movies = () => {

    const [categories, setCategories] = useState(null)
    const [searchBarValue, setSearchBarValue] = useState(null)
    const showButton = useSelector(state => state.containerMovies.showButton)

    const handleClick = (input, categories) => {
        setSearchBarValue(input)
        setCategories(categories)
    }

    return (
        <div>
            <Carousel type="movies" />
            <SearchBar onClick={handleClick} placeholder="Escribe el nombre de una pelicula" />
            <Categories onClick={handleClick} />
            <ContainerMovies categories={categories} input={searchBarValue} />
            {
                showButton
                    ? <ButtonShowMore movies={true} />
                    : undefined
            }
        </div>
    )
}

export default Movies