import "./SidebarComponent.css"
const Sidebar = () => {
  return (
    <aside id="left">
				<ul className="sidebar_list">
          <li>
            <button className="button">
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