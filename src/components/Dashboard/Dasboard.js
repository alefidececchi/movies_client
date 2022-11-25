import { useParams } from 'react-router-dom';

import DashboardMenu from '../DashboardMenu/DashboardMenu.js'
import DashboardContainer from '../DashboardContainer/DashboardContainer.js'


const Dashboard = () => {

    const { selected } = useParams()
    
    return (
        <div>
            <DashboardMenu />
            <DashboardContainer selected={selected} />
        </div>
    )


}

export default Dashboard;