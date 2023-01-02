import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { fetchCarouselId } from "../../redux/slices/form.js"
import { deleteCarouselId, fetchAllCarousel, } from '../../redux/thunks/carousel.js'
import { deleteMovieId, fetchDashboardMovies, fetchMovieId } from "../../redux/thunks/movies.js"
import { deleteSerieId, fetchDashboardSeries, fetchSerieId } from "../../redux/thunks/series.js"
import TableRow from '../TableRow/TableRow.js'

const Table = (props) => {

    const carousel = useSelector(state => state.carousel.allData)
    const dispatch = useDispatch()
    const documents = useSelector(state => state.dashboard.data)
    const limit = useSelector(state => state.dashboard.limit)
    const navigate = useNavigate()
    const page = useSelector(state => state.dashboard.page)
    const { selected } = props
    const token = useSelector(state => state.user.token)

    useEffect(() => {
        if (selected === 'movies') dispatch(fetchDashboardMovies())
        if (selected === 'series') dispatch(fetchDashboardSeries())
        if (selected === 'carousel') dispatch(fetchAllCarousel())
    }, [dispatch, selected])

    const handleDelete = (id, title) => {
        if (window.confirm(`Estás seguro que querés eliminar ${title}?`)) {
            if (selected === 'movies') {
                dispatch(deleteMovieId({ id, token }))
                dispatch(fetchDashboardMovies())
            } else if (selected === 'series') {
                dispatch(deleteSerieId({ id, token }))
                dispatch(fetchDashboardSeries())
            } else if (selected === 'carousel') {
                dispatch(deleteCarouselId({ id, token }));
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
        navigate(`/dashboard/form/${id}`)
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
                        !!documents.length && documents.slice(((page * limit) - limit), page * limit)
                            .map((c, ind) => (
                                <TableRow
                                    _id={c._id}
                                    delete={() => handleDelete(c._id, c.title)}
                                    img={c.link_img}
                                    ind={ind}
                                    key={c._id}
                                    title={c.title}
                                    update={() => handleUpdate(c._id)}
                                />))
                }
            </tbody>
        </table>
    </div>
    )
}

export default Table;