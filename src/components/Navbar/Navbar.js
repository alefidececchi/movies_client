import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux"


const Navbar = () => {

    const stateLogin = useSelector(state => state.token.stateLogin)

    const handleLogoutSession = () => {
        //dispatchar accion que cierra sesion
        
    }

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