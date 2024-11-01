import { WidgetEntity } from "../entities/WidgetEntity"
import { FetchUrlsEntities } from "../entities/ServicesTOCheck"
export interface IWidgetController{
    getWidgets(id: number):Promise<WidgetEntity[]>
    getWidgetUrls(id: number):Promise<FetchUrlsEntities>
}