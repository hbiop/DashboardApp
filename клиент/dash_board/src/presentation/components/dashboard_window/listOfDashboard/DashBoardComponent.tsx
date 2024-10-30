import './DashBoardComponent.css';
import Sidebar from '../sidebar/SidebarComponent';
import TopBar from '../topbar/TopBarComponent';
import ListOfDashboards from './listOfDashboards';
export default function DashboardComponent(){
    return(
        <div id="parent">
            <TopBar/>
            <div id="bottom">
                <Sidebar/>
                <div id="dashboardListContainer">
                    <ListOfDashboards/>
                </div>
            </div>
	    </div>
    )
}

