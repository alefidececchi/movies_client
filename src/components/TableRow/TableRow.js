import { useDispatch, useSelector } from 'react-redux'

import { deleteCarousel } from '../../redux/thunks/carousel.js'


const TableRow = (props) => {

    const dispatch = useDispatch()
    // const error = useSelector(state => state.carousel.error)
    // const message = useSelector(state => state.carousel.message)
    // const status = useSelector(state => state.carousel.status)

    const handleClick = (e) => {
        if (e.target.name === 'editar') {
            //redireccionar a forumlario con la data cargada de este id
        } else if (e.target.name === 'eliminar') {
            if (window.confirm(`Estás seguro que querés eliminar ${props.title}?`)) {
                dispatch(deleteCarousel(props._id))
            }
        }
    }

    return (
        <tr>
            <td>{props.ind + 1}.</td>
            <td>{props.title}</td>
            {!props.movieOrSerie ? undefined : <td>{props.movieOrSerie}</td>}
            <td>{props.desktop_img}</td>
            <td><button name="editar" onClick={handleClick}>editar</button></td>
            <td><button name="eliminar" onClick={handleClick}>eliminar</button></td>
        </tr>
    )
}

export default TableRow