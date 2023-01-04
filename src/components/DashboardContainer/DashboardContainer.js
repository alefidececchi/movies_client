import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { resetMessage } from '../../redux/slices/form.js'
import { fetchDashboardMovies } from '../../redux/thunks/movies.js'
import { fetchDashboardSeries } from '../../redux/thunks/series.js'
import Dialog from '../Dialog/Dialog.js'
import SearchBar from '../SearchBar/SearchBar.js'
import Pagination from '../Pagination/Pagination.js'
import Table from '../Table/Table.js'

const DashboardContainer = (props) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { selected } = props
    const message = useSelector(state => state.form.message)

    const handleButtonCreate = () => {
        navigate(`/dashboard/form?selected=${selected}`)
    }

    const handleClick = (input) => {
        if (selected === 'movies') {
            dispatch(fetchDashboardMovies(input))
        } else if (selected === 'series') {
            dispatch(fetchDashboardSeries(input))
        }
    }

    return (
        <div>
            {
                selected === undefined ?
                    (<h1>Hello Motherfucker</h1>) :
                    (
                        <div>
                            <h2>{selected}</h2>
                            {
                                selected === 'carousel'
                                    ? undefined
                                    : selected === 'movies'
                                        ? <SearchBar onClick={handleClick} placeholder={`Escribe el nombre de la pelicula`} />
                                        : <SearchBar onClick={handleClick} placeholder={`Escribe el nombre de la serie`} />
                            }
                            <button onClick={handleButtonCreate}>Crear {selected === 'movies' ? "pelicula" : selected === 'series' ? "serie" : 'carousel'}</button>
                            {message ? <Dialog dispatcher={resetMessage} id="dialogMessage" message={message} /> : undefined}
                            <Table selected={selected} />
                            {
                                selected === 'movies' || selected === 'series'
                                    ? <Pagination selected={selected} />
                                    : undefined
                            }
                        </div>
                    )
            }
        </div>
    )
}

export default DashboardContainer;