import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchContainerSeries } from '../../redux/thunks/series.js'
import ItemCard from '../ItemCard/ItemCard.js';
import Whatsapp from '../Whatsapp/Whatsapp.js';

const ContainerSeries = (props) => {

    const { categories, input } = props
    const container = useSelector(state => state.containerSeries.data)
    const dispatch = useDispatch()
    const limit = useSelector(state => state.containerSeries.limit)
    const page = useSelector(state => state.containerSeries.page)

    useEffect(() => {
        console.log('hello series')
        dispatch(fetchContainerSeries({ categories, input, limit, page }))
    }, [categories, dispatch, input, limit, page])

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

export default ContainerSeries