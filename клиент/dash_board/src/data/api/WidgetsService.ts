import { WidgetEntity } from "../../domain/entities/WidgetEntity";
import { IWidgetController } from "../../domain/repository/WidgetRepository";


export class WidgetService implements IWidgetController{
    async getWidgets(id: number): Promise<WidgetEntity[]> {
        const response = await fetch("https://localhost:7250/get_widgets?id=" + id);
        if (!response.ok) {
        throw new Error('Network response was not ok');
        }      
        const data: WidgetEntity[] = await response.json();
        return data;
    }
}
