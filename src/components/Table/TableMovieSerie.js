import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import TableRow from '../TableRow/TableRow.js'
import { fetchContainerMovies, fetchContainerSeries } from "../../redux/thunks/container.js"

const TableMovieSerie = (props) => {

    const dispatch = useDispatch()
    const movies = useSelector(state => state.containerMovies.data)
    const series = useSelector(state => state.containerSeries.data)
    const { type } = props

    useEffect(() => {
        if (type === 'movies') dispatch(fetchContainerMovies())
        if (type === 'series') dispatch(fetchContainerSeries())
    }, [dispatch, type])

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
                                img={c.desktop_img}
                                ind={ind}
                                key={c._id}
                                title={c.title}
                            />)
                        ) : type === 'movies' ?
                            !!movies.length && movies.map((c, ind) => (
                                <TableRow
                                    _id={c._id}
                                    img={c.desktop_img}
                                    ind={ind}
                                    key={c._id}
                                    title={c.title}
                                />))
                            : undefined
                }
            </tbody>
        </table>
    </div>
    )
}

export default TableMovieSerie;