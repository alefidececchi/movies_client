import { useState } from 'react'


const SearchBar = (props) => {

    const [input, setInput] = useState("")

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleClick = (e) => {
        if (e.target.name === "reset") {
            setInput("")
            props.onClick(null)
        } else {
            props.onClick(input)
        }
    }

    return (
        <div>
            <input placeholder={props.placeholder} onChange={handleChange} type="text" value={input} />
            <button name="reset" onClick={handleClick} value="x">x</button>
            <button name="buscar" onClick={handleClick} value="Buscar">Buscar</button>
        </div>
    )
}

export default SearchBar;