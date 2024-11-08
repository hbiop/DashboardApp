import './App.css'
import MainWindowComponent from './presentation/components/main_window/MainWindowComponent';
import AuthForm from './presentation/components/login_window/LoginComponent';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AddComponentWindow from './presentation/components/add_component_window/AddComponentWindow';
import DashBoardComponent from './presentation/components/dashboard_window/MainWindowComponent';
import AddDashboardWindow from './presentation/components/add_dashboard_window/AddDashBoardWindow';
function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<AuthForm />} />
                <Route path='/dashboard/:idUser' element={<MainWindowComponent />} />
                <Route path='/add_component' element={<AddComponentWindow />} />
                <Route path='/add_dashboard' element={<AddDashboardWindow />} />
                <Route path='/dashboards' element={<DashBoardComponent />} />
            </Routes>
        </Router>
    );
}

export default App
