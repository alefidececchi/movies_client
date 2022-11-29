import { useDispatch } from 'react-redux'

import Carousel from '../Carousel/Carousel.js'
import ContainerMovies from '../Container/ContainerMovies.js'
import SearchBar from '../SearchBar/SearchBar.js'
import { fetchContainerMovies } from '../../redux/thunks/movies.js'

const Movies = () => {

    const dispatch = useDispatch()

    const handleClick = (input) => {
        // console.log('desde el componente movies imprimimos el valor local de searchbar', input)
        //hacer fetch con las querys
        dispatch(fetchContainerMovies(input))
    }



    return (<div>
        <Carousel type="movies" />
        <SearchBar onClick={handleClick} />
        <ContainerMovies />
    </div>)
}

export default Movies