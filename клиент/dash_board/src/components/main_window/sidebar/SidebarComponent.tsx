import "./SidebarComponent.css"
import {useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault();
        navigate('/dashboards', { replace: true })
    }
  return (
    <aside id="left">
				<ul className="sidebar_list">
          <li>
            <button className="button" onClick={
              handleSubmit
            }>
              Дэшборды
            </button>
          </li>
          <li>
            <button className="button">
              Настройки
            </button>
          </li>
          <li>
            <button className="button sign_out">
              Выйти
            </button>
          </li>
        </ul>
		</aside>
  );
};

export default Sidebar;