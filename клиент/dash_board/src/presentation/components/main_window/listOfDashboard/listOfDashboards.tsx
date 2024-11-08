import { useLocation} from "react-router-dom";
import "./listOfDashBoards.css"
import { FC, useEffect, useState } from "react";
import { WidgetEntity } from "../../../../domain/entities/WidgetEntity";
import { ErrorService } from "../../../../domain/ErrorService";
import { WidgetsController } from "../../../../domain/controllers/WidgetServiceController";
import { WidgetService } from "./dashboardComponent/chooseTypeWidget/chooseTypeWidgetService";
const ListOfDashboards: FC = () => {
    const location = useLocation(); // Получение пути из URL
    const params = JSON.parse(location.pathname.split('/')[2]);
    const [widgets, setWidgets] = useState<WidgetEntity[]>([]);
    const errorService = new ErrorService();
    const widgetsController = new WidgetsController();
    const widgetService = new WidgetService();
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
          widgetService.getWidgetType(widget)
        ))}
      </div>
    );
  };
  export default ListOfDashboards
  
  