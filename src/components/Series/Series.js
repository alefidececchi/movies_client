import { useDispatch } from 'react-redux'

import Carousel from '../Carousel/Carousel.js'
import ContainerSeries from '../Container/ContainerSeries.js'
import { fetchContainerSeries } from '../../redux/thunks/container.js'
import SearchBar from '../SearchBar/SearchBar.js'

const Series = () => {

    const dispatch = useDispatch()

    const handleClick = (input) => {
        // console.log('desde el componente movies imprimimos el valor local de searchbar', input)
        //hacer fetch con las querys
        dispatch(fetchContainerSeries(input))
    }



    return (<div>
        <Carousel type="series" />
        <SearchBar onClick={handleClick} />
        <ContainerSeries />
    </div>)
}

export default Series