import ServiceStatusDashboard from "./dashboardComponent/dashboardComponent";
import "./listOfDashBoards.css"
import { FC, useEffect, useState } from "react";

type Resp = {
    name: string
  }
const ListOfDashboards:FC = (): JSX.Element => {
    const [dashboards, setDashboards] = useState<Resp[]>([]);
    const getDashboards = async () => {
        try {
          const response = await fetch("https://localhost:7250/get_dashboard");
          
          // Проверяем, был ли запрос успешным
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
      
          const data: Resp[] = await response.json();
          setDashboards(data)
        } catch (error) {
          console.error('Fetch error:', error);
          throw error;
        }
    };
    useEffect(() => {
        getDashboards();
    }, []);
    return (
        <div id="dashboardList">
            {dashboards.map(title =>  ServiceStatusDashboard(title.name))}
        </div>
    );
  };
  
export default ListOfDashboards;