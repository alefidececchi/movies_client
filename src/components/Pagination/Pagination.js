import { useDispatch, useSelector } from "react-redux"

import { changePage } from '../../redux/slices/dashboard.js'


const Pagination = () => {

    const count = useSelector(state => state.dashboard.count)
    const dispatch = useDispatch()
    const limit = useSelector(state => state.dashboard.limit)
    const page = useSelector(state => state.dashboard.page)
    let pages = Math.ceil(count / limit)
    const pagesToRender = []

    const handleClickOnPage = (page) => {
        //DISPATCHAR ACCION QUE CAMBIA PAGINA
        dispatch(changePage(page))
    }

    for (let i = 1; i <= pages; i++) {
        pagesToRender.push(<li key={i}><button onClick={() => handleClickOnPage(i)}>{i}</button></li>)
    }

    return (
        <div>
            <h3>{page}</h3>
            {/* HECHO PARA NAVEGAR ENTRE 5 PAGINAS ADEMAS DEL INICIO Y EL FINAL */}
            <ul>
                {
                    page > 3
                        ? <li>
                            <button onClick={() => handleClickOnPage(1)}>1</button>
                        </li>
                        : undefined

                }
                {
                    page <= 3
                        ? pagesToRender.slice(0, 5)
                        : pagesToRender.slice(pages - page < 2 ? pages - 1 - 4 : page - 1 - 2, page + 2)
                }
                {
                    pages - page >= 3
                        ? <li>
                            <button onClick={() => handleClickOnPage(pages)}>{pages}</button>
                        </li>
                        : undefined
                }
            </ul>
        </div>
    )

}

export default Pagination