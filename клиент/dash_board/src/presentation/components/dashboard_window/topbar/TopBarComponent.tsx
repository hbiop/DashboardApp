
import {useNavigate } from 'react-router-dom';

const TopBar = () => {
    const navigate = useNavigate();
    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault();
        navigate('/add_dashboard', { replace: true })
    }
    return (
        <header id="top">
            DashBoard
            <button className="add"onClick={
                handleSubmit
            }>Добавить</button>
        </header>
    );
};
  
export default TopBar;