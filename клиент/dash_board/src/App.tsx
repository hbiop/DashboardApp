import './App.css'
import MainWindowComponent from './components/main_window/MainWindowComponent'
import AuthForm from './components/login_window/LoginComponent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
    return (
      <Router>
            <Routes>
                <Route path='/' element={<AuthForm />} />
                <Route path='/dashboard' element={<MainWindowComponent />} />
            </Routes>
        </Router>
    );
}

export default App
