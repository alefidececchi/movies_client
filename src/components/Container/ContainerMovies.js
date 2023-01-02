import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchContainerMovies } from '../../redux/thunks/movies.js'
import ItemCard from '../ItemCard/ItemCard.js';

const ContainerMovies = () => {

    const dispatch = useDispatch()
    const container = useSelector(state => state.containerMovies.data)


    useEffect(() => {
        // console.log('hello movies')
        dispatch(fetchContainerMovies())
    }, [dispatch])

    return (
        <div>
            <h2>PELICULAS</h2>
            {!!container && container.map(i => (
                <ItemCard
                    actors={i.actors}
                    description={i.description}
                    director={i.director}
                    category={i.category}
                    key={i._id}
                    img={i.link_img}
                    title={i.title}
                    trailer={i.link_trailer}
                ></ItemCard>)
            )}
        </div>
    )
}

export default ContainerMovies