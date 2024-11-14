import React, { useState, useEffect } from 'react';
import CustomerNavbar from './../AllNavbars/CustomerNavbar/CustomerNavbar';
import Footer from './Footer';
import fetchCustomerData from './../../services/customer/fetchCustomerData';
import Loading from '../Loading/Loading';
import perfilImg from './../../assets/Login/perfil.png';
import ModalCliente from '../Modais/ModalClient/ModalCliente';
import Modal from './Modal';

const ProfilePage = () => {
  const [tickets, setTickets] = useState([]);
  const [customerData, setCustomerData] = useState({ name: '', email: '', phone: '' });
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [ticketModal, setTicketModal] = useState({});
  const userImage = perfilImg;

  const closeModal = () => {
    setShowModal(false);
  };

  const handleRowClick = (ticket) => {
    setTicketModal(ticket);
    setShowModal(true)
  };

  useEffect(() => {
    const fetchData = async () => {
      const userId = sessionStorage.getItem("userId");
      if (!userId) {
        console.error("User ID not found");
        setLoading(false);
        return;
      }

      try {
        const data = await fetchCustomerData(userId);
        if (data) {
          setCustomerData({ name: data.name, email: data.email, phone: data.phone });
          setTickets(data.tickets);
        }
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const getStatusClass = (status) => {
    switch (status) {
      case 'Pendente':
        return 'text-yellow-500';
      case 'Fechado':
        return 'text-green-600';
      case 'Em impedimento':
        return 'text-red-600';
      case 'Em atendimento':
        return 'text-blue-600';
      default:
        return 'text-gray-500';
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <CustomerNavbar />
      <div className="container mx-auto p-6 bg-white rounded-lg shadow-lg mt-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src={userImage} alt="Perfil" className="w-28 h-28 rounded-full border-2 border-gray-300 shadow-md mr-4" />
            <div>
              <h2 className="text-2xl font-semibold">{customerData.name || 'Nome não encontrado'}</h2>
              <p className="text-gray-700">{customerData.email || 'Email não encontrado'}</p>
              <p className="text-gray-700">{customerData.phone || 'Telefone não encontrado'}</p>
            </div>
          </div>
          {/* ModalCliente recebe dados para editar */}
          <ModalCliente initialData={customerData} />
        </div>
      </div>

      <div className="container mx-auto mt-6 p-6 bg-white rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4">Meus Tickets</h3>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-700 border border-gray-300">
            <thead className="bg-gray-200 text-gray-900 uppercase">
              <tr>
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Data de Abertura</th>
                <th className="px-4 py-2">Título</th>
                <th className="px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
            {tickets.slice(0, 100).map(ticket => (
                <tr 
                  className="hover:bg-gray-100 transition duration-150" 
                  key={ticket.id}
                  onClick={() => handleRowClick(ticket)}
                >
                  <td className="px-4 py-3 font-medium text-[#379E53]">{ticket.id}</td>
                  <td className="px-4 py-3">{ticket.date}</td>
                  <td className="px-4 py-3 overflow-hidden whitespace-nowrap text-ellipsis max-w-xs">{ticket.title}</td>
                  <td className={`px-4 py-3 ${getStatusClass(ticket.status)}`}>{ticket.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
      <Modal
        isOpen={showModal}
        onClose={closeModal}
        ticket={ticketModal}
      />
    </div>
  );
};

export default ProfilePage;
