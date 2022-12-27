import { useDispatch } from 'react-redux'

import { fetchContainerMovies } from '../../redux/thunks/movies.js'
import Carousel from '../Carousel/Carousel.js'
import ContainerMovies from '../Container/ContainerMovies.js'
import Categories from '../Categories/Categories.js'
import SearchBar from '../SearchBar/SearchBar.js'

const Movies = () => {

    const dispatch = useDispatch()

    const handleClick = (input) => {
        dispatch(fetchContainerMovies(input))
    }

    return (
        <div>
            <Carousel type="movies" />
            <SearchBar onClick={handleClick} placeholder="Escribe el nombre de una pelicula" />
            <Categories />
            <ContainerMovies />
        </div>
    )
}

export default Movies