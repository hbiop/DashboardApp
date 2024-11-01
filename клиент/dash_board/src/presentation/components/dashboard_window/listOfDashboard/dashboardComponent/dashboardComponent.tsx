import {NavigateFunction } from "react-router-dom";

const ServiceStatusDashboard = (key:number,title: string, navigation:NavigateFunction) => {
    async function handleSubmit(e:React.FormEvent, id: number){
        e.preventDefault();
        
        navigation('/dashboard/' + JSON.stringify(key), { replace: true })
    }
    return(
        <div key={key} className='dashboard-card' onClick={(e) => handleSubmit(e,key)}>
            {title}
        </div>
    );
};

export default ServiceStatusDashboard;