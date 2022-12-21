import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"



const Dialog = (props) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleClick = () => {
        if (props.dispatcher) dispatch(props.dispatcher())
        if (props.navigate) navigate(`${props.navigate}`)
    }

    return (
        props.message
            ? <dialog id={props.id} open>
                <h3>{props.message}</h3>
                <button onClick={handleClick}>Aceptar</button>
            </dialog>
            : undefined
    )
}

export default Dialog