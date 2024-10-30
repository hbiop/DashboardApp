import { DashBoardData } from "../../domain/entities/DashboardEntity";
import { IDashboardController } from "../../domain/repository/DashboardsRepository";

export class DashBoardService implements IDashboardController{
    async getDashboards(id: number): Promise<DashBoardData[]> {     
            const response = await fetch("https://localhost:7250/get_dashboards?id="+id);
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }      
            const data: DashBoardData[] = await response.json();
            return data;
    }

    
}