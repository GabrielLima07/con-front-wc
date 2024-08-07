import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/home';
import CadastroColaborador from './components/CadastroColaborador/cadastroColaborador';
import App from './App';
import FuncionarioHomePage from './pages/funcionarioHomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import CustomerHome from './pages/CustomerHome';
import AdminHome from './pages/AdminHome';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import DepartmentTickets from './pages/DepartmentTickets';
import CreateTicket from './pages/CreateTicket'; 
import CentralDeAjudaPage from './pages/CentralDeAjudaPage'


function Main() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={
          <Home />
        } />
        <Route path="/teste" element={<CentralDeAjudaPage/>}/>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route
          path="/cadastroColaborador"
          element={
            <ProtectedRoute allowedTypes={['ADMIN']}>
              <CadastroColaborador />
            </ProtectedRoute>
          }
        />
        <Route path="/app" element={<App />} />
        <Route
          path="/funcionario"
          element={
            <ProtectedRoute allowedTypes={['EMPLOYEE']}>
              <FuncionarioHomePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/department-tickets"
          element={
            <ProtectedRoute allowedTypes={['EMPLOYEE']}>
              <DepartmentTickets />
            </ProtectedRoute>
          }
        />
        <Route
          path="/customerHome"
          element={
            <ProtectedRoute allowedTypes={['CUSTOMER']}>
              <CentralDeAjudaPage/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/adminHome"
          element={
            <ProtectedRoute allowedTypes={['ADMIN']}>
              <AdminHome />
            </ProtectedRoute>
          }
        />
        <Route path="/create-ticket" 
        element={
          <ProtectedRoute allowedTypes={'CUSTOMER'}>
        <CreateTicket />
        </ProtectedRoute> 
        }
        />
      </Routes>
    </Router>
  );
}

export default Main;
