import { useState } from 'react'
import { useSelector } from 'react-redux'

import ButtonShowMore from '../ButtonShowMore/ButtonShowMore.js'
import Carousel from '../Carousel/Carousel.js'
import Categories from '../Categories/Categories.js'
import ContainerSeries from '../Container/ContainerSeries.js'
import SearchBar from '../SearchBar/SearchBar.js'

const Series = () => {

    const [categories, setCategories] = useState(null)
    const [searchBarValue, setSearchBarValue] = useState(null)
    const showButton = useSelector(state => state.containerSeries.showButton)

    const handleClick = (input, categories) => {
        setSearchBarValue(input)
        setCategories(categories)
    }

    return (
        <div>
            <Carousel type="series" />
            <SearchBar onClick={handleClick} placeholder="Escribe el nombre de una serie" />
            <Categories onClick={handleClick} />
            <ContainerSeries categories={categories} input={searchBarValue} />
            {
                showButton
                    ? <ButtonShowMore series={true} />
                    : undefined
            }
        </div>
    )
}

export default Series