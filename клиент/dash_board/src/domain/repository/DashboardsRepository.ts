import { DashBoardData } from "../entities/DashboardEntity";

export interface IDashboardController{
    getDashboards(id: number):Promise<DashBoardData[]>
}