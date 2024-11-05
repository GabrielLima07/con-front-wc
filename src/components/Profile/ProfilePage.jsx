import React, { useState, useEffect } from 'react';
import CustomerNavbar from './../AllNavbars/CustomerNavbar/CustomerNavbar';
import Footer from './Footer'; 
import fetchCustomerData from './../../services/customer/fetchCustomerData';
import Loading from '../Loading/Loading';
import perfilImg from './../../assets/Login/perfil.png';

const ProfilePage = () => {
  const [tickets, setTickets] = useState([]);
  const [customerData, setCustomerData] = useState({ name: '', email: '', phone: '' });
  const [loading, setLoading] = useState(true);

  const userImage = perfilImg; 

  useEffect(() => {
    const fetchData = async () => {
      const userId = sessionStorage.getItem("userId");
      if (!userId) {
        console.error("User ID not found");
        setLoading(false);
        return;
      }

      try {
        // const ticketData = await getAllTickets();
        // setTickets(ticketData);

        const data = await fetchCustomerData(userId); // Usando o novo serviço aqui
        if (data) {
          setCustomerData({ name: data.name, email: data.email, phone: data.phone });
          setTickets(data.tickets)
        }
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      } finally {
        setLoading(false); // Garanta que o loading seja definido como false ao final
      }
    };

    fetchData();
  }, []);

  const getStatusClass = (status) => {
    switch (status) {
      case 'Pendente':
        return 'text-yellow-500';
      case 'Fechado':
        return 'text-[#379E53]';
      case 'Em impedimento':
        return 'text-red-500';
      case 'Em atendimento':
        return 'text-blue-500';
      default:
        return 'text-gray-500';
    }
  };

  if (loading) {
    return <Loading />; 
  }

  return (
    <div>
      <CustomerNavbar />
      <div className="border border-gray-300 rounded-lg p-4 mb-4 max-w-7xl mx-auto mt-6">
        <h1 className="text-2xl font-bold mb-4">Perfil</h1>
        <div className="flex items-center">
          <img src={userImage} alt="Perfil" className="w-24 h-24 rounded-full mr-4" />
          <div>
            <h2 className="text-xl font-semibold">{customerData.name || 'Nome não encontrado'}</h2>
            <p className="text-gray-600">{customerData.email || 'Email não encontrado'}</p>
            <p className="text-gray-600">{customerData.phone || 'Telefone não encontrado'}</p>
          </div>
        </div>
      </div>

      <div className="border border-gray-300 rounded-lg p-4 max-w-7xl mx-auto">
        <h3 className="text-lg font-semibold mb-2">MEUS TICKETS</h3>
        <div className="flex flex-col items-center relative overflow-x-auto">
          <table className="w-full text-xs text-left text-gray-500 border border-gray-300">
            <thead className="text-gray-900 uppercase bg-gray-50">
              <tr>
                <th className="px-6 py-3">ID</th>
                <th className="px-6 py-3">Data de abertura</th>
                <th className="px-6 py-3">Título</th>
                <th className="px-6 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {tickets.slice(0, 10).map(ticket => (
                <tr className="hover:bg-gray-50" key={ticket.id}>
                  <td className="px-6 py-4 text-[#379E53]">{ticket.id}</td>
                  <td className="px-6 py-4 text-[#379E53]">{ticket.date}</td>
                  <td className="px-6 py-4 text-[#379E53]">{ticket.title}</td>
                  <td className={`px-6 py-4 ${getStatusClass(ticket.status)}`}>{ticket.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProfilePage;
