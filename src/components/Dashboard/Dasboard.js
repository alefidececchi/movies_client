import { useParams } from 'react-router-dom';

import DashboardMenu from '../DashboardMenu/DashboardMenu.js'
import DashboardContainer from '../DashboardContainer/DashboardContainer.js'


const Dashboard = () => {

    const { selected } = useParams()

    console.log(selected)


    return (
        <div>
            <DashboardMenu />
            <DashboardContainer />
        </div>
    )


}

export default Dashboard;