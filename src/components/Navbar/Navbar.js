import { useEffect } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import { logoutSession } from "../../redux/thunks/user"


const Navbar = () => {

    const dispatch = useDispatch();
    const stateLogin = useSelector(state => state.user.stateLogin)
    const navigate = useNavigate()

    const handleLogoutSession = () => {
        //dispatchar accion que cierra sesion
        const user = window.localStorage.getItem('user')
        if (user) {
            const { id, token } = JSON.parse(user)
            dispatch(logoutSession({id, token}))
            navigate('/')
        }
    }

    useEffect(() => {
        if(window.localStorage.getItem('user') && !stateLogin) window.localStorage.removeItem('user')
    },[stateLogin])

    return (
        <div>
            <div>
                <p>JOKERAPP</p>
            </div>

            <div>
                <ul>
                    <li><NavLink to="/" >Peliculas</NavLink></li>
                    <li><NavLink to="/series">Series</NavLink></li>
                    <li><NavLink to="/dashboard">Dashboard</NavLink></li>
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