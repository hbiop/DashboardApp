import './DashBoardComponent.css';
import Sidebar from './sidebar/SidebarComponent';
import TopBar from './topbar/TopBarComponent'
import ListOfDashboards from './listOfDashboard/listOfDashboards';
import { useState } from 'react';
export default function DashboardComponent(){
    let servicesToCheck: string[] =["asas","afasf","fasfa","afasf","fasfa","fasfa","fasfa","fasfa","fasfa"];
    return(
        <div id="parent">
            <TopBar/>
            <div id="bottom">
                <Sidebar/>
                <div id="dashboardListContainer">
                    
                        {servicesToCheck.map(a => ListOfDashboards(a))}
                    
                </div>
            </div>
	    </div>
    )
}

