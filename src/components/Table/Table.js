import TableMovieSerie from './TableMovieSerie.js'
import TableCarousel from './TableCarousel.js'

const Table = (props) => {

    const { type } = props

    return type === 'carousel' ?
        (<TableCarousel />) :
        (<TableMovieSerie type={type} />)
}

export default Table;