import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import TableRow from '../TableRow/TableRow.js'
import { fetchAllCarousel } from '../../redux/thunks/carousel.js'

const TableCarousel = () => {

    const carousel = useSelector(state => state.carousel.allData)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAllCarousel())
    }, [dispatch])

    return (<div>
        <table>
            <tbody>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Película/Serie</th>
                    <th>Imagen descriptiva</th>
                    <th>Editar</th>
                    <th>Eliminar</th>
                </tr>
                {!!carousel.length && carousel.map((c, ind) => (
                    <TableRow
                        _id={c._id}
                        img={c.desktop_img}
                        ind={ind}
                        key={c._id}
                        movieOrSerie={c.movieOrSerie}
                        title={c.title}
                    />))
                }
            </tbody>
        </table>
    </div>)
}

export default TableCarousel