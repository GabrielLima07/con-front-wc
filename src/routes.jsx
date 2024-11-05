import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/home';
import CadastroColaborador from './components/CadastroColaborador/cadastroColaborador';
import CadastroCliente from './components/CadastroCliente/CadastroCliente'
import App from './App';
import FuncionarioHomePage from './pages/funcionarioHomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import DepartmentTickets from './pages/DepartmentTickets';
import CentralDeAjudaPage from './pages/CentralDeAjudaPage'
import HomeAdmPage from './pages/HomeAdm';
import CreateTicket from './pages/CreateTicket';
import PerguntasFrequentes from './pages/PerguntasFrequentes';
import HomeAdm from './components/HomeAdm/HomeAdm';
import ClienteHome from './pages/HomeCliente'
import AdminTickets from './pages/AdminTickets';
import ModalCliente from './pages/ModalClientePage';
<<<<<<< HEAD
import CustomerPerfil from './components/Cliente/CustomerPerfil';
=======
import Perfil from './pages/Perfil';
import Erro from './pages/ErroPage'

>>>>>>> f1e675d3ed191e5b5e653bb2a5ba3f48bbfa3ea7


function Main() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <Home />
        } />

        {/* Acesso livre */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/modalCliente" element={<ModalCliente/>}/> 
        <Route path="*" element={<Erro/>}/> 

        {/* Apenas admin */}
        <Route
          path="/cadastroColaborador"
          element={
            <ProtectedRoute allowedTypes={['ADMIN']}>
              <CadastroColaborador />
            </ProtectedRoute>
          }
        />

        <Route
          path="/adminHome"
          element={
            <ProtectedRoute allowedTypes={['ADMIN']}>
              <HomeAdm />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin-tickets"
          element={
            <ProtectedRoute allowedTypes={['ADMIN']}>
              <AdminTickets />
            </ProtectedRoute>
          }
        />

        {/* Apenas funcionarios */}
        <Route path="/app" element={<App />} />
        <Route
          path="/funcionario"
          element={
            <ProtectedRoute allowedTypes={['EMPLOYEE']}>
              <FuncionarioHomePage />
            </ProtectedRoute>
          }
        />

        <Route path="/profile/:customer" element={<ProtectedRoute allowedTypes={['EMPLOYEE']}>
              <CustomerPerfil/>
            </ProtectedRoute>}/>

        <Route 
          path='department-tickets' 
          element={
            <ProtectedRoute allowedTypes={['EMPLOYEE']}>
              <DepartmentTickets />
            </ProtectedRoute>
          }
        />

        <Route
          path="/cadastroCliente"
          element={
            <ProtectedRoute allowedTypes={['EMPLOYEE']}>
              <CadastroCliente />
            </ProtectedRoute>
          }
        />

        {/* Apenas clientes */}
        <Route
          path="/central-de-ajuda"
          element={
            <ProtectedRoute allowedTypes={['CUSTOMER']}>
              <CentralDeAjudaPage/>
            </ProtectedRoute>
          }
        />

        <Route
        path="/Create-Ticket"
        element={
          <ProtectedRoute allowedTypes={['CUSTOMER']}>
            <CreateTicket/>
          </ProtectedRoute>
        
        }
        />

        <Route
        path="/Perguntas-Frequentes"
        element={
          <ProtectedRoute allowedTypes={['CUSTOMER']}>
            <PerguntasFrequentes/>
          </ProtectedRoute>
        
        }
        />

        <Route
        path="/clienteHome"
        element={
          <ProtectedRoute allowedTypes={['CUSTOMER']}>
            <ClienteHome/>
          </ProtectedRoute>
        }
        />
        <Route
          path="/perfil"
          element={
            <ProtectedRoute allowedTypes={['CUSTOMER']}>
              <Perfil />
            </ProtectedRoute>
          }
        />

      </Routes>
    </Router>
  );
}

export default Main;