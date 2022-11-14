import { NavLink, Link } from "react-router-dom"


const Navbar = () => {

    return (
        <div>
            <div>
                <p>JOKERAPP</p>
            </div>

            <div>
                <ul>
                    <li><NavLink to="/" >Peliculas</NavLink></li>
                    <li><NavLink to="/series">Series</NavLink></li>
                    <li><NavLink to="/signin">Signin</NavLink></li>
                    <li><NavLink >Login</NavLink></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar