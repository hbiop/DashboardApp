import './MainWindowComponent.css';
import Sidebar from './sidebar/SidebarComponent';
import TopBar from './topbar/TopBarComponent'
import ListOfDashboards from './listOfDashboard/listOfDashboards';
import { useState } from 'react';
import { WidgetEntity } from '../../../domain/entities/WidgetEntity';
import { ErrorService } from '../../../domain/ErrorService';
import { WidgetsController } from '../../../domain/controllers/WidgetServiceController';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
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