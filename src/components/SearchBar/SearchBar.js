import { useState } from 'react'


const SearchBar = (props) => {

    const [input, setInput] = useState("")

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleClick = (e) => {
       props.onClick(input)
       setInput("")
    }

    return (
        <div>
            <input placeholder='pelicula o serie' onChange={handleChange} type="text" value={input} />
            <button onClick={handleClick}>Buscar</button>
        </div>
    )
}

export default SearchBar;