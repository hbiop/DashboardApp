
import {useNavigate } from 'react-router-dom';

const TopBar = () => {
    const navigate = useNavigate();
    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault();
        navigate('/add_component', { replace: true })
    }
    const handleBack = (e:React.FormEvent) => {
        e.preventDefault();
        navigate('/dashboards', { replace: true })
    }
    return (
        <header id="top">
            <button className="add"onClick={
                handleBack
            }>Н</button>
            <button className="add"onClick={
                handleSubmit
            }>Добавить</button>
            DashBoard
        </header>
    );
};
  
export default TopBar;