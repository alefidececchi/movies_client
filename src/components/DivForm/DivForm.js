import { useState } from "react";


const DivForm = (props) => {

    const [input, setInput] = useState(props.initialValue)
    const [error, setError] = useState("")

    const validate = (value) => !value.length ? setError(props.errorMessage) : setError("")

    const handleChange = (e) => {
        setInput(e.target.value);
        validate(e.target.value)

        //PARA QUE EL PADRE RECIBA LOS CAMBIOS
        if (props.receiveState) props.receiveState(e)
        // if (props.compare) props.compare(e, error)
    }

    return (
        <div>
            <div>
                <label htmlFor={props.name}>{props.label}</label>
                <input
                    name={props.name}
                    onChange={handleChange}
                    placeholder={props.placeholder}
                    type={props.type}
                    value={input} />
            </div>
            {error === "" ? undefined : (<p style={{ "backgroundColor": "red" }}>{error}</p>)}
            {props.img ? (<div><img style={{ height: "120px", width: "auto" }} alt={props.title} src={props.img} /></div>) : undefined}
        </div>
    )
}

export default DivForm