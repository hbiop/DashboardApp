import "./AddDashBoardWindow.css"
import { DashBoardService } from "../../../data/api/DashBoardService";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GetIdUseCase } from "../../../domain/use_cases/getIdUseCase";
import { ErrorService } from "../../../domain/ErrorService";
const AddDashboardWindow = () => {
    const [title, setTitle] = useState<string>("")
    const dashboardService = new DashBoardService();
    const getIdUseCase = new GetIdUseCase();
    const errorService = new ErrorService();
    const navigate = useNavigate();
    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault();
        if(getIdUseCase.getUser() == null){
            alert("Произошла ошибка");
            navigate('/', { replace: true })
        }else{
            try{
                dashboardService.postDashboards(getIdUseCase.getUser()!!, title);
            }
            catch(er){
                alert(errorService.handle(er));
            }
        } 
    }

    return(
        <div className="container">
            <h2>Добавить новый дэшборд</h2>
            <form id="addComponentForm">
                <label htmlFor="dashboardName">Название компонента:</label>
                <input
                    type="text" id="dashboardName"  
                    name="dashboardName" 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required/>
                <button type="submit" onClick={handleSubmit}>Добавить компонент</button>
            </form>
        </div>
    )
}


export default AddDashboardWindow