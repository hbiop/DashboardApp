import { IDashboardController } from "../repository/DashboardsRepository";
import { DashBoardData } from "../entities/DashboardEntity";
import { DashBoardService } from "../../data/api/DashBoardService";

export class DashboardController {
    private dashboard: IDashboardController;

    constructor() {
        this.dashboard = new DashBoardService();
    }

    public async getDashboards(id:number): Promise<DashBoardData[]> {
        return this.dashboard.getDashboards(id)
    }
}