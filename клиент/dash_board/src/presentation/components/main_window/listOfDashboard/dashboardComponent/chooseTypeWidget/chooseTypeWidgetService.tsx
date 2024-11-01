import { WidgetEntity } from "../../../../../../domain/entities/WidgetEntity";
import ServiceStatusDashboard from "../stateServiceComponent/dashboardComponent";

export class WidgetService{
    getWidgetType(widget: WidgetEntity){
        switch(widget.idWidgetType){
            case 1:{
                return(<ServiceStatusDashboard key={widget.id} widget={widget} />)
            }
            default:{
                break;
            }
        }   
    }
}