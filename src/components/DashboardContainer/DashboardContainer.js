import Table from '../Table/Table.js'

const DashboardContainer = (props) => {

    const { selected } = props

    return (
        <div>{
            selected === undefined ?
                (<h1>selected es undefined</h1>) :
                (<div>
                    <h2>{selected}</h2>
                    <Table type={selected} />
                </div>)
        }
        </div>
    )
}

export default DashboardContainer;