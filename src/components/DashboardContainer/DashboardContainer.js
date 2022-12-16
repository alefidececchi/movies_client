import { useNavigate } from 'react-router-dom'

import SearchBar from '../SearchBar/SearchBar.js'
import Table from '../Table/Table.js'

const DashboardContainer = (props) => {

    const navigate = useNavigate()
    const { selected } = props

    const handleButtonCreate = () => {
        navigate(`/form?selected=${selected}`)
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
                                selected === 'carousel' ?
                                    undefined :
                                    selected === 'movies' ?
                                        <SearchBar placeholder={`Escribe el nombre de la pelicula`} /> :
                                        <SearchBar placeholder={`Escribe el nombre de la serie`} />
                            }
                            <button onClick={handleButtonCreate}>Crear {selected === 'movies' ? "pelicula" : selected === 'series' ? "serie" : 'carousel'}</button>
                            <Table selected={selected} />
                        </div>
                    )
            }
        </div>
    )
}

export default DashboardContainer;