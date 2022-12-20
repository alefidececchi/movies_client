import { useState } from "react";
import DivArr from "../DivArr/DivArr";


const DivForm = (props) => {

    const [input, setInput] = useState(props.initialValue)
    const [error, setError] = useState("")
    let { arrayFromData } = props

    const validate = (value) => !value.length ? setError(props.errorMessage) : setError("")

    const handleChange = (e) => {
        setInput(e.target.value);
        validate(e.target.value)
        //PARA QUE EL PADRE RECIBA LOS CAMBIOS
        if (props.receiveState) {
            props.receiveState(e)
        }
    }

    const handleClick = (e) => {

        if (props.handleArr && input.length !== 0) {
            console.log('name', props.name)
            console.log('input', input)
            props.handleArr({ target: props.name, input })
        }
        setInput(props.initialValue)
    }

    return (
        <div>
            <div>
                <label htmlFor={props.name}>{props.label}</label>
                {props.type === 'checkbox' ?
                    <DivArr type="checkbox" father={props.name} arr={arrayFromData} handleArr={props.handleArr} options={props.options} /> :
                    <input
                        name={props.name}
                        onChange={handleChange}
                        placeholder={props.placeholder}
                        type={props.type}
                        value={input} />
                }
                {!!arrayFromData && props.type !== 'checkbox' && <button onClick={handleClick}>+</button>}
            </div>
            {error === "" ? undefined : (<p style={{ "backgroundColor": "red" }}>{error}</p>)}
            {props.img ? (<div><img style={{ height: "120px", width: "auto" }} alt={props.title} src={props.img} /></div>) : undefined}
            {!!arrayFromData && props.type !== 'checkbox' && <DivArr father={props.name} arr={arrayFromData} handleArr={props.handleArr} />}
            {/* //pasar props.function de Form que borre el elemento clickeado */}
        </div>
    )
}

export default DivForm