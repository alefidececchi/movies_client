import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchContainerMovies } from '../../redux/thunks/container.js'
import ItemCard from '../ItemCard/ItemCard.js';

const ContainerMovies = () => {

    const dispatch = useDispatch()
    const container = useSelector(state => state.containerMovies.data)
    const status = useSelector(state => state.containerMovies.status)


    useEffect(() => {
        console.log(status)
        if(status === 'idle') {
            dispatch(fetchContainerMovies())
        }
    }, [dispatch, status])


    return (
        <div>
            <h2>PELICULAS</h2>
            {container.length && container.map(i => (
                <ItemCard
                    actors={i.actors}
                    description={i.description}
                    director={i.director}
                    category={i.category}
                    key={i.title}
                    link_img={i.link_img}
                    title={i.title}
                ></ItemCard>)
            )}
        </div>
    )
}

export default ContainerMovies