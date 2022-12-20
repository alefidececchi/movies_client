import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"



const Dialog = (props) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleClick = () => {
        dispatch(props.dispatcher())
        if(props.navigate) {
            navigate(`${props.navigate}`)
        }
    }


    return (
        <dialog id={props.id} open>
            <h3>{props.message}</h3>
            <button onClick={handleClick}>Aceptar</button>
        </dialog>
    )
}

export default Dialog