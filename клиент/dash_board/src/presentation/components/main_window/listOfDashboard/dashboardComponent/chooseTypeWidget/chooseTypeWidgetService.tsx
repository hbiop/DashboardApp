import { WidgetEntity } from "../../../../../../domain/entities/WidgetEntity";
import ServiceStatusDashboard from "../stateServiceComponent/dashboardComponent";

export class WidgetService{
    getWidgetType(widget: WidgetEntity){
        switch(widget.idWidgetType){
            case 1:{
                ServiceStatusDashboard(widget);
                break;
            }
            default:{
                break;
            }
        }   
    }
}