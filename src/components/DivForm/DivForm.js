import { useState } from "react";


const DivForm = (props) => {

    const [input, setInput] = useState(props.initialValue)
    const [error, setError] = useState("")

    const validate = (value) => !value.length ? setError(props.errorMessage) : setError("")

    const handleChange = (e) => {
        setInput(e.target.value);
        validate(e.target.value)
        if (props.receiveState) props.receiveState(e)
        if (props.compare) props.compare(e, error)
    }

    return (
        <div>
            <label htmlFor={props.htmlFor}>{props.label}</label>
            <input name={props.name} onChange={handleChange} type={props.type} value={input} />
            {!!error.length && (<p style={{ "backgroundColor": "red" }}>{props.errorMessage}</p>)}
        </div>
    )
}

export default DivForm