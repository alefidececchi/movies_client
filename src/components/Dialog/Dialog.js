import { useDispatch } from "react-redux"



const Dialog = (props) => {

    const dispatch = useDispatch()
    

    return (
        <dialog id={props.id} open>
            <h3>{props.message}</h3>
            <button onClick={() => dispatch(props.dispatcher())}>aceptar</button>
        </dialog>
    )
}

export default Dialog