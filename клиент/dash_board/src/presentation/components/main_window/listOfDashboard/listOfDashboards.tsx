import { useLocation} from "react-router-dom";
import "./listOfDashBoards.css"
import { FC, useEffect, useState } from "react";
import { WidgetEntity } from "../../../../domain/entities/WidgetEntity";
import { ErrorService } from "../../../../domain/ErrorService";
import { WidgetsController } from "../../../../domain/controllers/WidgetServiceController";
import ServiceStatusDashboard from "./dashboardComponent/stateServiceComponent/dashboardComponent";

const ListOfDashboards: FC = () => {
    const location = useLocation(); // Получение пути из URL
    const params = JSON.parse(location.pathname.split('/')[2]);
    const [widgets, setWidgets] = useState<WidgetEntity[]>([]);
    const errorService = new ErrorService();
    const widgetsController = new WidgetsController();
  
    const getWidgets = async () => {
      try {
        setWidgets(await widgetsController.getWidgets(params));
      } catch (error) {
        errorService.handle(error);
      }
    };
  
    useEffect(() => {
      getWidgets();
    }, []);
  
    return (
      <div id="dashboardListContainer">
        {widgets.map((widget) => (
          <ServiceStatusDashboard key={widget.id} widget={widget} />
        ))}
      </div>
    );
  };
  export default ListOfDashboards
  
  