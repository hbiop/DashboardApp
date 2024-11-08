import { DashBoardData } from "../entities/DashboardEntity";

export interface IDashboardController{
    getDashboards(id: number):Promise<DashBoardData[]>
    postDashboards(id: number, title: string):Promise<void>
    deleteDashboard(id: number): Promise<void>
}