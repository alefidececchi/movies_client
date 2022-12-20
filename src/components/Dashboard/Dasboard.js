import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import DashboardMenu from '../DashboardMenu/DashboardMenu.js'
import DashboardContainer from '../DashboardContainer/DashboardContainer.js'


const Dashboard = () => {

    const { selected } = useParams()
    const navigate = useNavigate()
    const role = useSelector(state => state.user.role)


    useEffect(() => {
        if (role !== "ADMIN") {
            navigate(`/`)
        }
    }, [navigate,role])

    return (
        <div>
            <DashboardMenu />
            <DashboardContainer selected={selected} />
        </div>
    )
}

export default Dashboard;