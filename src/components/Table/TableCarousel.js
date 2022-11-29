import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";

import { carouselIdForm } from '../../redux/slices/form.js'
import { deleteCarouselId, fetchAllCarousel } from '../../redux/thunks/carousel.js'
import TableRow from '../TableRow/TableRow.js'

const TableCarousel = () => {

    const carousel = useSelector(state => state.carousel.allData)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(fetchAllCarousel())
    }, [dispatch])

    const handleUpdate = (id) => {
        //REDIRECCIONAR A FORMULARIO CON LOS DATOS DE ESE ID
        setTimeout(() => {
            dispatch(carouselIdForm({ carousel, id }))
        }, 100)
        navigate(`/form/${id}`)
    }

    const handleDelete = (id, title) => {
        if (window.confirm(`Estás seguro que querés eliminar ${title}?`)) {
            dispatch(deleteCarouselId(id));
            dispatch(fetchAllCarousel());
        }
    }

    return (<div>
        <table>
            <tbody>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Se ve visualiza en</th>
                    <th>Imagen descriptiva</th>
                    <th>Editar</th>
                    <th>Eliminar</th>
                </tr>
                {!!carousel.length && carousel.map((c, ind) => (
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
                }
            </tbody>
        </table>
    </div>)
}

export default TableCarousel