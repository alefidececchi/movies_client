import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { fetchMoviesFiltered} from '../../redux/thunks/movies.js'



const Filter = () => {

    const categoriesRedux = useSelector(state => state.categories.data)
    const dispatch = useDispatch()
    const [optionSelected, setOptionSelected] = useState([])
    const [categories, setCategories] = useState([])

    useEffect(() => {
        if (categoriesRedux.length !== 0) {
            setCategories([null, ...categoriesRedux])
        }
    }, [categoriesRedux, setCategories])

    const handlingFilter = (e) => {
        if (e.target.name === 'filter') {
            console.log('Hola filtro')
            dispatch(fetchMoviesFiltered(optionSelected))
            //DISPATCHAR ACCION QUE FILTRA EN BD LAS PELIS
        }
        console.log('Hola reset')
        setCategories([null, ...categoriesRedux])
        setOptionSelected([])
    }

    const handlingSelection = (e) => {
        if (!!e.target.value) {
            setOptionSelected([...optionSelected, e.target.value])
            setCategories(categories.filter(c => c !== e.target.value))
        }
    }

    const handlingOptionDelete = (i) => {
        setCategories([optionSelected[i], ...categories])
        setOptionSelected(optionSelected.filter((c, ind) => ind !== i))
    }

    return (
        <div>
            <p>Categoria: </p>
            <select name="option" onChange={handlingSelection}>
                {
                    !!categories.length && categories.map((c, i) => {
                        return (<option value={c} key={c}>{c}</option>)
                    })
                }
            </select>
            <button name='filter' onClick={handlingFilter}>Filtrar</button>
            <button name='reset' onClick={handlingFilter}>Reset</button>
            {
                !!optionSelected.length && optionSelected.map((opt, i) => {
                    return (
                        <div key={i + opt}>{opt} <span onClick={() => handlingOptionDelete(i)}>| x</span></div>
                    )
                })
            }
        </div>
    )
}

export default Filter