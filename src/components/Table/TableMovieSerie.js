import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { deleteMovieId, fetchContainerMovies, fetchMovieId } from "../../redux/thunks/movies.js"
import { deleteSerieId, fetchContainerSeries, fetchSerieId } from "../../redux/thunks/series.js"
import TableRow from '../TableRow/TableRow.js'

const TableMovieSerie = (props) => {

    const dispatch = useDispatch()
    const movies = useSelector(state => state.containerMovies.data)
    const navigate = useNavigate()
    const series = useSelector(state => state.containerSeries.data)
    const { type } = props

    useEffect(() => {
        if (type === 'movies') dispatch(fetchContainerMovies())
        if (type === 'series') dispatch(fetchContainerSeries())
    }, [dispatch, type])

    const handleDelete = (id, title) => {
        if (window.confirm(`Estás seguro que querés eliminar ${title}?`)) {
            if (type === 'movies') {
                dispatch(deleteMovieId(id))
                dispatch(fetchContainerMovies())
            } else if (type === 'series') {
                dispatch(deleteSerieId(id))
                dispatch(fetchContainerSeries())
            }
        }
    }

    const handleUpdate = (id) => {
        //CARGAR DETALLE CON EL DOCUMENTO QUE CORRESPONDE AL ID
        if (type === 'movies') dispatch(fetchMovieId(id))
        if (type === 'series') dispatch(fetchSerieId(id))
        //REDIRECCIONAR A FORMULARIO CON LOS DATOS DE ESE ID
        navigate(`/form/${id}`)
    }


    return (<div>
        <table>
            <tbody>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Imagen descriptiva</th>
                    <th>Editar</th>
                    <th>Eliminar</th>
                </tr>
                {
                    type === "series" ?
                        !!series.length && series.map((c, ind) => (
                            <TableRow
                                _id={c._id}
                                delete={() => handleDelete(c._id, c.title)}
                                img={c.link_img}
                                ind={ind}
                                key={c._id}
                                title={c.title}
                                update={() => handleUpdate(c._id)}
                            //DELETE
                            />)) :
                        type === 'movies' ?
                            !!movies.length && movies.map((c, ind) => (
                                <TableRow
                                    _id={c._id}
                                    delete={() => handleDelete(c._id, c.title)}
                                    img={c.link_img}
                                    ind={ind}
                                    key={c._id}
                                    title={c.title}
                                    update={() => handleUpdate(c._id)}
                                //DELETE
                                />)) :
                            undefined
                }
            </tbody>
        </table>
    </div>
    )
}

export default TableMovieSerie;