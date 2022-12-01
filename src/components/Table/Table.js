import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { fetchCarouselId } from "../../redux/slices/form.js"
import { deleteCarouselId, fetchAllCarousel, } from '../../redux/thunks/carousel.js'
import { deleteMovieId, fetchContainerMovies, fetchMovieId } from "../../redux/thunks/movies.js"
import { deleteSerieId, fetchContainerSeries, fetchSerieId } from "../../redux/thunks/series.js"
import TableRow from '../TableRow/TableRow.js'

const Table = (props) => {

    const carousel = useSelector(state => state.carousel.allData)
    const dispatch = useDispatch()
    const movies = useSelector(state => state.containerMovies.data)
    const navigate = useNavigate()
    const { selected } = props
    const series = useSelector(state => state.containerSeries.data)

    useEffect(() => {
        if (selected === 'movies') dispatch(fetchContainerMovies())
        if (selected === 'series') dispatch(fetchContainerSeries())
        if (selected === 'carousel') dispatch(fetchAllCarousel())
    }, [dispatch, selected])

    const handleDelete = (id, title) => {
        if (window.confirm(`Estás seguro que querés eliminar ${title}?`)) {
            if (selected === 'movies') {
                dispatch(deleteMovieId(id))
                dispatch(fetchContainerMovies())
            } else if (selected === 'series') {
                dispatch(deleteSerieId(id))
                dispatch(fetchContainerSeries())
            } else if (selected === 'carousel') {
                dispatch(deleteCarouselId(id));
                dispatch(fetchAllCarousel());
            }
        }
    }

    const handleUpdate = (id) => {
        //CARGAR DETALLE CON EL DOCUMENTO QUE CORRESPONDE AL ID
        if (selected === 'movies') {
            dispatch(fetchMovieId(id))
        } else if (selected === 'series') {
            dispatch(fetchSerieId(id))
        } else if (selected === 'carousel') {
            setTimeout(() => {
                dispatch(fetchCarouselId({ carousel, id }))
            }, 100)
        }
        //REDIRECCIONAR A FORMULARIO CON LOS DATOS DE ESE ID
        navigate(`/form/${id}`)
    }


    return (<div>
        <table>
            <tbody>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    {selected === 'carousel' ? <th>Se ve visualiza en</th> : undefined}
                    <th>Imagen descriptiva</th>
                    <th>Editar</th>
                    <th>Eliminar</th>
                </tr>
                {
                    selected === "series" ?
                        !!series.length && series.map((c, ind) => (
                            <TableRow
                                _id={c._id}
                                delete={() => handleDelete(c._id, c.title)}
                                img={c.link_img}
                                ind={ind}
                                key={c._id}
                                title={c.title}
                                update={() => handleUpdate(c._id)}
                            />)) :
                        selected === 'movies' ?
                            !!movies.length && movies.map((c, ind) => (
                                <TableRow
                                    _id={c._id}
                                    delete={() => handleDelete(c._id, c.title)}
                                    img={c.link_img}
                                    ind={ind}
                                    key={c._id}
                                    title={c.title}
                                    update={() => handleUpdate(c._id)}
                                />)) :
                            selected === 'carousel' ?
                                !!carousel.length && carousel.map((c, ind) => (
                                    <TableRow
                                        _id={c._id}
                                        delete={() => handleDelete(c._id, c.title)}
                                        img={c.desktop_img}
                                        ind={ind}
                                        key={c._id}
                                        movieOrSerie={c.movieOrSerie}
                                        title={c.title}
                                        update={() => handleUpdate(c._id)}
                                    />))
                                :
                                undefined
                }
            </tbody>
        </table>
    </div>
    )
}

export default Table;