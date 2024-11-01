import { WidgetService } from "../../data/api/WidgetsService";
import { WidgetEntity } from "../entities/WidgetEntity";
import { IWidgetController } from "../repository/WidgetRepository";
import { FetchUrlsEntities } from "../entities/ServicesTOCheck";



export class WidgetsController {
    private widget: IWidgetController;

    constructor() {
        this.widget = new WidgetService();
    }

    public async getWidgets(id:number): Promise<WidgetEntity[]> {
        return this.widget.getWidgets(id)
    }

    public async getUrls(id:number): Promise<FetchUrlsEntities> {
        return this.widget.getWidgetUrls(id)
    }
}