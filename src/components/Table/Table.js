import TableMovieSerie from './TableMovieSerie.js'
import TableCarousel from './TableCarousel.js'
import { useSelector } from 'react-redux'

const Table = (props) => {

    const { type } = props
    const message = useSelector(state=> state.form.dashboardMessage)

    return type === 'carousel' ?
        (<TableCarousel />) :
        (<TableMovieSerie type={type} />)
}

export default Table;