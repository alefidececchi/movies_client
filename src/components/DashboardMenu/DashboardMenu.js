import { NavLink } from 'react-router-dom'


const DashboardMenu = () => {

    return (
        <div>
            <ul>
                <li><NavLink to="/dashboard/movies">Peliculas</NavLink></li>
                <li><NavLink to="/dashboard/series">Series</NavLink></li>
                <li><NavLink to="/dashboard/carousel">Carousel</NavLink></li>
                <li><NavLink>Perfil</NavLink></li>
            </ul>
        </div>
    )

}


export default DashboardMenu;