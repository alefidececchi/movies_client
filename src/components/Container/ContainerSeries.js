import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchContainerSeries } from '../../redux/thunks/series.js'
import ItemCard from '../ItemCard/ItemCard.js';
import Whatsapp from '../Whatsapp/Whatsapp.js';

const ContainerMovies = () => {

    const dispatch = useDispatch()
    const container = useSelector(state => state.containerSeries.data)
    // const status = useSelector(state => state.containerSeries.status)

    useEffect(() => {
        dispatch(fetchContainerSeries())
    }, [dispatch])

    return (
        <div>
            <h2>SERIES</h2>
            <Whatsapp />
            {!!container.length && container.map(i => (
                <ItemCard
                    actors={i.actors}
                    description={i.description}
                    director={i.director}
                    category={i.category}
                    key={i._id}
                    img={i.link_img}
                    season={i.season}
                    title={i.title}
                    trailer={i.link_trailer}
                ></ItemCard>)
            )}
        </div>
    )
}

export default ContainerMovies