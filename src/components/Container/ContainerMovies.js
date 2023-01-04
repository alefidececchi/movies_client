import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchContainerMovies } from '../../redux/thunks/movies.js'
import ItemCard from '../ItemCard/ItemCard.js';
import Whatsapp from '../Whatsapp/Whatsapp.js';

const ContainerMovies = (props) => {

    const { categories, input } = props
    const container = useSelector(state => state.containerMovies.data)
    const dispatch = useDispatch()
    const limit = useSelector(state => state.containerMovies.limit)
    const page = useSelector(state => state.containerMovies.page)

    useEffect(() => {
        console.log('hello movies')
        dispatch(fetchContainerMovies({ categories, input, limit, page }))
    }, [categories, dispatch, input, limit, page])

    return (
        <div>
            <h2>PELICULAS</h2>
            <Whatsapp />
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