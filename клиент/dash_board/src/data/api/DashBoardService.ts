import { DashBoardData } from "../../domain/entities/DashboardEntity";
import { IDashboardController } from "../../domain/repository/DashboardsRepository";

export class DashBoardService implements IDashboardController{
    async deleteDashboard(id: number): Promise<void> {
      try{
        const response = await fetch('https://localhost:7250/dashboard/DeleteDashBoard?id='+id, {
          method: 'DELETE'
          })
      }
      catch{
        alert("Не удалось добавить данные");
      }
    }
  
    async postDashboards(id: number, title: string): Promise<void> {
      try{
        const response = await fetch('https://localhost:7250/dashboard/PostDashBoard?'+title+'&CreatorId='+id, {
          method: 'POST'
          })

      }
      catch{
        alert("Не удалось добавить данные");
      }
      
    }
    async getDashboards(id: number): Promise<DashBoardData[]> {
      try{
        const response = await fetch("https://localhost:7250/dashboard/GetDashBoard?id="+id,{method:'GET'});   
        const data: DashBoardData[] = await response.json();
        return data;
      }    
      catch{
        alert("Не удалось получить данные");
        return [];
      }         
    }

    
}