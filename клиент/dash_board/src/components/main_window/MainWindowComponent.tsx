import './MainWindowComponent.css';
import Sidebar from './sidebar/SidebarComponent';
import TopBar from './topbar/TopBarComponent'
import ListOfDashboards from './listOfDashboard/listOfDashboards';
import { useState } from 'react';
export default function MainWindowComponent(){
    return(
        <div id="parent">
            <TopBar/>
            <div id="bottom">
                <Sidebar/>
                <div id="right">
                    <ListOfDashboards/>
                </div>
            </div>
	    </div>
    )
}