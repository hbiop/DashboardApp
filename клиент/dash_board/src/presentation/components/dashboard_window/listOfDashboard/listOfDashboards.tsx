import ServiceStatusDashboard from "./dashboardComponent/dashboardComponent";
import "./listOfDashBoards.css"
import { FC, useEffect, useState } from "react";
import { DashboardController } from "../../../../domain/controllers/DashBoardServiceControler";
import { DashBoardData } from "../../../../domain/entities/DashboardEntity";
import { GetIdUseCase } from "../../../../domain/use_cases/getIdUseCase";
import { ErrorService } from "../../../../domain/ErrorService";
import {useNavigate} from 'react-router-dom';

const ListOfDashboards:FC = (): JSX.Element => {
    const [dashboards, setDashboards] = useState<DashBoardData[]>([]);
    const dashboardController = new DashboardController();
    const getIdUseCase = new GetIdUseCase();
    const errorService = new ErrorService();
    const navigation = useNavigate();
    const getDashboards = async () => {
        try {
          const id = getIdUseCase.getUser();
          if(id === null){
            throw new Error("Авторизируйтесь в системе");     
          }else{

            setDashboards(await dashboardController.getDashboards(getIdUseCase.getUser()!!))
          }
        } catch (error) {
          errorService.handle(error);
        }
    };
    useEffect(() => {
        getDashboards();
    }, []);
    return (
        <div id="dashboardList">
            {dashboards.map(title =>  ServiceStatusDashboard(title.id,title.nazvanie, navigation))}
        </div>
    );
  };
  
export default ListOfDashboards;