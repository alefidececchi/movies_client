import { useDispatch } from 'react-redux'

import { fetchContainerSeries } from '../../redux/thunks/series.js'
import Carousel from '../Carousel/Carousel.js'
import ContainerSeries from '../Container/ContainerSeries.js'
import Categories from '../Categories/Categories.js'
import SearchBar from '../SearchBar/SearchBar.js'

const Series = () => {

    const dispatch = useDispatch()

    const handleClick = (input) => {
        dispatch(fetchContainerSeries(input))
    }

    return (
        <div>
            <Carousel type="series" />
            <SearchBar onClick={handleClick} placeholder="Escribe el nombre de una serie" />
            <Categories />
            <ContainerSeries />
        </div>
    )
}

export default Series