import Table from '../Table/Table.js'

const DashboardContainer = (props) => {

    const { selected } = props

    return (
        <div>{
            selected === undefined ?
                (<h1>selected es {selected}</h1>) :
                (<div>
                    <h2>{selected}</h2>
                    <button>Crear {selected === 'movies' ? "pelicula" : selected === 'series' ? "serie" : 'carousel'}</button>
                    <Table type={selected} />
                </div>)
        }
        </div>
    )
}

export default DashboardContainer;