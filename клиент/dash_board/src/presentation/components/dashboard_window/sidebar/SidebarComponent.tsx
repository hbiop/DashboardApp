import "./SidebarComponent.css"
import {useNavigate } from 'react-router-dom';
import { DeleteIdUseCase } from "../../../../domain/use_cases/deleteIdUseCase";
const Sidebar = () => {
  const deleteIdUseCase = new DeleteIdUseCase();
  const navigate = useNavigate();
    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault();
        navigate('/dashboards', { replace: true })
    }
    const handleExit = (e:React.FormEvent) => {
      e.preventDefault();
      deleteIdUseCase.deleteUser();
      navigate('/', { replace: true });
  }
  return (
    <aside id="left">
				<ul className="sidebar_list">
          <li>
            <button className="button" onClick={handleSubmit}>
              Дэшборды
            </button>
          </li>
          <li>
            <button className="button">
              Настройки
            </button>
          </li>
          <li>
            <button className="button sign_out" onClick={handleExit}>
              Выйти
            </button>
          </li>
        </ul>
		</aside>
  );
};

export default Sidebar;