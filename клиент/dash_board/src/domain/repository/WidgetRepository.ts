import { WidgetEntity } from "../entities/WidgetEntity"


export interface IWidgetController{
    getWidgets(id: number):Promise<WidgetEntity[]>
}