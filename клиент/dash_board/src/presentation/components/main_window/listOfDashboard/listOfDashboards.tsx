import { useLocation} from "react-router-dom";
import DashBoardElement from "./dashboardComponent/stateServiceComponent/dashboardComponent";
import "./listOfDashBoards.css"
import { FC, useEffect, useState } from "react";
import { WidgetEntity } from "../../../../domain/entities/WidgetEntity";
import { ErrorService } from "../../../../domain/ErrorService";
import { WidgetsController } from "../../../../domain/controllers/WidgetServiceController";
import ServiceStatusDashboard from "./dashboardComponent/stateServiceComponent/dashboardComponent";


const ListOfDashboards:FC = (): JSX.Element => {
    const params:number = JSON.parse(useLocation().pathname.split('/')[2]);
    console.log(params)
    const [widgets, setWidgets] = useState<WidgetEntity[]>([]);
    const errorService = new ErrorService()
    const widgetsController = new WidgetsController();
    const getWidgets = async () => {
        try {
            setWidgets(await widgetsController.getWidgets(params))
        }
        catch (error) {
          errorService.handle(error);
        }
    };
    useEffect(() => {
        getWidgets();
    }, []);
    return (
        <div id="dashboardListContainer">
            {widgets.map(widget =>  ServiceStatusDashboard(widget))}
        </div>
    );
  };
  
export default ListOfDashboards;