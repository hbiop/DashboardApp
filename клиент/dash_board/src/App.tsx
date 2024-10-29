import './App.css'
import MainWindowComponent from './components/main_window/MainWindowComponent'
import AuthForm from './components/login_window/LoginComponent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddComponentWindow from './components/add_component_window/AddComponentWindow';
import DashBoardComponent from './components/dashboard_window/MainWindowComponent';
function App() {
    return (
      <Router>
            <Routes>
                <Route path='/' element={<AuthForm />} />
                <Route path='/dashboard' element={<MainWindowComponent />} />
                <Route path='/add_component' element={<AddComponentWindow />} />
                <Route path='/dashboards' element={<DashBoardComponent />} />
            </Routes>
        </Router>
    );
}

export default App
