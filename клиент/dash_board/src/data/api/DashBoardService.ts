import { DashBoardData } from "../../domain/entities/DashboardEntity";
import { IDashboardController } from "../../domain/repository/DashboardsRepository";

export class DashBoardService implements IDashboardController{
  
    async postDashboards(id: number, title: string): Promise<void> {
      try{
        const response = await fetch('https://localhost:7250/dashboard/Dashboard?Nazvanie='+title+'&CreatorId='+id, {
          method: 'POST'
          })
          if (response.status != 202) {
            alert("a");
            throw new Error('Network response was not ok');
          } 
      }
      catch{
        alert("Не удалось добавить данные");
      }
      
    }
    async getDashboards(id: number): Promise<DashBoardData[]> {
      try{
        const response = await fetch("https://localhost:7250/get_dashboards?id="+id);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }      
        const data: DashBoardData[] = await response.json();
        return data;
      }    
      catch{
        alert("Не удалось получить данные");
        return [];
      }         
    }

    
}