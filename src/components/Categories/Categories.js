import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
// import { useLocation } from 'react-router-dom'

import { fetchCategories } from '../../redux/thunks/categories.js'



const Categories = (props) => {

    const [categories, setCategories] = useState([])
    const categoriesRedux = useSelector(state => state.categories.data)
    const dispatch = useDispatch()
    // const location = useLocation()
    const [optionSelected, setOptionSelected] = useState([])
    // const limit = useSelector(state => state.containerMovies.limit)
    // const page = useSelector(state => state.containerMovies.page)

    useEffect(() => {
        categoriesRedux && categoriesRedux.length !== 0
            ? setCategories([null, ...categoriesRedux])
            : dispatch(fetchCategories())
    }, [categoriesRedux, dispatch, setCategories])

    const handlingFilter = (e) => {
        if (e.target.name === 'filter') {
            // location.pathname === '/series'
            props.onClick(null, optionSelected)
            // dispatch(fetchMoviesFiltered({ categories: optionSelected, page, limit }))
        } else {
            props.onClick(null, null)
            setCategories([null, ...categoriesRedux])
            setOptionSelected([])
        }
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
            {
                props.type === 'form'
                    ? undefined
                    : <div>
                        <button name='filter' onClick={handlingFilter}>Filtrar</button>
                        <button name='reset' onClick={handlingFilter}>Reset</button>
                    </div>
            }
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

export default Categories