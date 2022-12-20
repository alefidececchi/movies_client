// import { useDispatch } from 'react-redux'



const TableRow = (props) => {

    const imgTD = {
        height: "80px",
        width: "auto",
    }

    return (
        <tr>
            <td>{props.ind + 1}.</td>
            <td>{props.title}</td>
            {!props.movieOrSerie ? undefined : <td>{props.movieOrSerie === "serie" ? "series" : "peliculas"}</td>}
            <td><img alt={props.title} style={imgTD} src={props.img} /></td>
            <td><button name="editar" onClick={props.update}>editar</button></td>
            <td><button name="eliminar" onClick={props.delete}>eliminar</button></td>
        </tr>
    )
}

export default TableRow