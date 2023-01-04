import { useDispatch } from "react-redux"

import { addPage } from "../../redux/slices/containerMovies"
import { addSeriesPage } from "../../redux/slices/containerSeries.js"



const ButtonShowMore = (props) => {

    const dispatch = useDispatch()

    const handleClick = () => {
        if (props.movies) {
            dispatch(addPage())
        } else if (props.series) {
            dispatch(addSeriesPage())
        }
    }

    return (<div>
        <button onClick={handleClick}>Mostrar más...</button>
    </div>)
}

export default ButtonShowMore