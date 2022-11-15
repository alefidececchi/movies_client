import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchContainerSeries } from '../../redux/thunks/container.js'
import ItemCard from '../ItemCard/ItemCard.js';

const ContainerMovies = () => {

    const dispatch = useDispatch()
    const container = useSelector(state => state.containerSeries.data)
    const status = useSelector(state => state.containerSeries.status)

    useEffect(() => {
        // console.log(status)
        if (status === 'idle') {
            dispatch(fetchContainerSeries())
        }
    }, [dispatch, status])


    return (
        <div>
            <h2>SERIES</h2>
            {container.length && container.map(i => (
                <ItemCard
                    actors={i.actors}
                    description={i.description}
                    director={i.director}
                    category={i.category}
                    key={i.title + i.season}
                    link_img={i.link_img}
                    title={i.title}
                ></ItemCard>)
            )}
        </div>
    )
}

export default ContainerMovies