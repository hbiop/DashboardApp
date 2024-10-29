import { Link, useNavigate } from 'react-router-dom';
import "./AddComponentWindow.css"
const AddComponentWindow = () => {
    

    return(
        <div className="container">
            <h2>Добавить новый компонент</h2>
            <form id="addComponentForm">
                <label htmlFor="componentName">Название компонента:</label>
                <input type="text" id="componentName" name="componentName" required/>

                <label htmlFor="componentDescription">Описание компонента:</label>
                <textarea id="componentDescription" name="componentDescription" required></textarea>

                <label htmlFor="componentType">Тип компонента:</label>
                <select id="componentType" name="componentType" required>
                    <option value="">--Выберите тип--</option>
                    <option value="chart">График</option>
                    <option value="table">Таблица</option>
                    <option value="list">Список</option>
                    <option value="card">Карточка</option>
                </select>

                <button type="submit">Добавить компонент</button>
            </form>
        </div>
    )
}
















export default AddComponentWindow;