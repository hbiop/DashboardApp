import { WidgetEntity } from "../../domain/entities/WidgetEntity";
import { IWidgetController } from "../../domain/repository/WidgetRepository";
import { FetchUrlsEntities } from "../../domain/entities/ServicesTOCheck";

export class WidgetService implements IWidgetController{
    async getWidgetUrls(id: number): Promise<FetchUrlsEntities> {
        const response = await fetch("https://localhost:7250/get_istocnik_danyh?id=" + id);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }      
        const data: FetchUrlsEntities = await response.json();
        return data;
    }
    async getWidgets(id: number): Promise<WidgetEntity[]> {
        const response = await fetch("https://localhost:7250/get_widgets?id=" + id);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }      
        const data: WidgetEntity[] = await response.json();
        return data;
    }
}
