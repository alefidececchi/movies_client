import { useEffect } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import { logoutSession } from "../../redux/thunks/user"
import { resetPage } from "../../redux/slices/containerMovies.js"
import { resetSeriesPage } from "../../redux/slices/containerSeries.js"


const Navbar = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate()
    const stateLogin = useSelector(state => state.user.stateLogin)
    const role = useSelector(state => state.user.role)

    const handleLogoutSession = () => {
        const user = window.localStorage.getItem('user')
        if (user) {
            const { id, token } = JSON.parse(user)
            dispatch(logoutSession({ id, token }))
            navigate('/')
        }
    }

    useEffect(() => {
        if (window.localStorage.getItem('user') && !stateLogin) window.localStorage.removeItem('user')
    }, [stateLogin])

    return (
        <div>
            <div>
                <img alt="logo" src="https://res.cloudinary.com/dmobuherg/image/upload/v1673296282/samples/jokerstore_letras_cloudinary_centrada_8px_dl5yzd.png" />
            </div>

            <div>
                <ul>
                    <li onClick={() => dispatch(resetPage())}><NavLink to="/" >Peliculas</NavLink></li>
                    <li onClick={() => dispatch(resetSeriesPage())}><NavLink to="/series" >Series</NavLink></li>
                    {
                        role !== "ADMIN"
                            ? undefined
                            : <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                    }
                    {
                        !stateLogin
                            ? <div>
                                <li><NavLink to="/login" >Iniciar sesion</NavLink></li>
                                <li><NavLink to="/signin">Registrarse</NavLink></li>
                            </div>
                            : <li onClick={handleLogoutSession}><NavLink>Cerrar sesion</NavLink></li>
                    }
                </ul>
            </div>
        </div>
    )
}

export default Navbar