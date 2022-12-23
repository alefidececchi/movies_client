import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchContainerMovies } from '../../redux/thunks/movies.js'
import { fetchCategories } from '../../redux/thunks/categories.js'
import Filter from '../Filter/Filter.js';
import ItemCard from '../ItemCard/ItemCard.js';

const ContainerMovies = () => {

    const dispatch = useDispatch()
    const container = useSelector(state => state.containerMovies.data)
    const categories = useSelector(state => state.categories.data)


    useEffect(() => {
        // console.log('hello movies')
        dispatch(fetchContainerMovies())
    }, [dispatch])

    useEffect(() => {
        if (categories.length === 0) {
            // console.log('Hola categorias')
            dispatch(fetchCategories())
        }
    }, [categories, dispatch])

    return (
        <div>
            <h2>PELICULAS</h2>
            <Filter />
            {!!container && container.map(i => (
                <ItemCard
                    actors={i.actors}
                    description={i.description}
                    director={i.director}
                    category={i.category}
                    key={i._id}
                    link_img={i.link_img}
                    title={i.title}
                ></ItemCard>)
            )}
        </div>
    )
}

export default ContainerMovies