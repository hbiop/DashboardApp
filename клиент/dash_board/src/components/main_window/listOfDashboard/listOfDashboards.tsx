import DashBoardElement from "./dashboardComponent/dashboardComponent";
import { FC, useState } from "react";
import { createContext } from "react";


const ListOfDashboards:FC = (): JSX.Element => {
    /*const [servicesToCheck, setServicesToCheck] = useState<string[]>([]);*/
    //setServicesToCheck([""]);
    let servicesToCheck =[""];
    return (
        <div id="dashboardListContainer">
            {servicesToCheck.map(title =>  DashBoardElement(title))}
        </div>
    );
  };
  
export default ListOfDashboards;