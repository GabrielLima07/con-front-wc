import React, { useState, useEffect } from 'react';
import getAllTickets from './../../services/ticket/getAllTickets';
import getDepartments from '../../services/department/getDepartments';
import Modal from '../AdminTicketsModal/Modal';
import putTicketDepartment from '../../services/ticket/putTicketDepartment';
import putTicketEmployee from '../../services/ticket/putTicketEmployee';
import Loading from './../Loading/Loading';

const MainContent = () => {
  const [tickets, setTickets] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState('Todos');
  const [selectedStatus, setSelectedStatus] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [ticketModal, setTicketModal] = useState({});

  useEffect(() => {
    const fetchAllTickets = async () => {
      const data = await getAllTickets();
      setTickets(data);
    };

    const fetchDepartments = async () => {
      const data = await getDepartments();
      setDepartments(data);
    }

    fetchAllTickets();
    fetchDepartments();
  }, []);

  const handleDepartmentClick = (department) => {
    setSelectedDepartment(department);
  };

  const handleStatusClick = (status) => {
    setSelectedStatus(status);
  };

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleRowClick = (ticket) => {
    setTicketModal(ticket);
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false);
  };

  // filtrando tickets por departamento, status e input de busca
  const filteredTickets = tickets.filter(ticket => {
    const matchesDepartment = selectedDepartment === 'Todos' 
      || (selectedDepartment === 'Sem departamento' && !ticket.departmentName)
      || ticket.departmentName === selectedDepartment;

    const matchesStatus = selectedStatus === 'Todos' || ticket.status === selectedStatus;

    const matchesSearchTerm = 
      ticket.id.toString().includes(searchTerm) || 
      ticket.customerName.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesDepartment && matchesStatus && matchesSearchTerm;
  });

  return (
    <div className='flex flex-col pt-16 gap-8'>
      <h1 className="flex px-28 text-2xl font-bold text-[#5B5B5B]">
        Tickets
      </h1>

      {/* filtros de departamento */}
      <div className="px-28">
        <div className="flex px-4 gap-8 text-sm text-[#5B5B5B]">
          <div 
            className={`cursor-pointer ${selectedDepartment === 'Todos' ? 'font-bold border-b-2 border-black' : ''}`} 
            onClick={() => handleDepartmentClick('Todos')}
          >
            Todos
          </div>
          <div 
            className={`cursor-pointer ${selectedDepartment === 'Sem departamento' ? 'font-bold border-b-2 border-black' : ''}`} 
            onClick={() => handleDepartmentClick('Sem departamento')}
          >
            Sem departamento
          </div>
          {/* demais departamentos */}
          {departments.map((dept) => (
            <div 
              key={dept.id} 
              className={`cursor-pointer ${selectedDepartment === dept.name ? 'font-bold border-b-2 border-black' : ''}`} 
              onClick={() => handleDepartmentClick(dept.name)}
            >
              {dept.name}
            </div>
          ))}
        </div>
        <hr className="bg-gray-400 border-gray-400"/>
      </div>

      {/* filtros de status */}
      <div className="px-28">
        <div className="flex px-4 gap-8 text-sm text-[#5B5B5B]">
          <div 
            className={`cursor-pointer ${selectedStatus === 'Todos' ? 'font-bold border-b-2 border-black' : ''}`} 
            onClick={() => handleStatusClick('Todos')}
          >
            Todos
          </div>
          <div 
            className={`cursor-pointer ${selectedStatus === 'Pendente' ? 'font-bold border-b-2 border-black' : ''}`} 
            onClick={() => handleStatusClick('Pendente')}
          >
            Pendente
          </div>
          <div 
            className={`cursor-pointer ${selectedStatus === 'Em atendimento' ? 'font-bold border-b-2 border-black' : ''}`} 
            onClick={() => handleStatusClick('Em atendimento')}
          >
            Em atendimento
          </div>
          <div 
            className={`cursor-pointer ${selectedStatus === 'Em impedimento' ? 'font-bold border-b-2 border-black' : ''}`} 
            onClick={() => handleStatusClick('Em impedimento')}
          >
            Em impedimento
          </div>
          <div 
            className={`cursor-pointer ${selectedStatus === 'Fechado' ? 'font-bold border-b-2 border-black' : ''}`} 
            onClick={() => handleStatusClick('Fechado')}
          >
            Fechado
          </div>
        </div>
        <hr className="bg-gray-400 border-gray-400"/>
      </div>

      {/* busca por id ou noem */}
      <div className="px-28">
        <input 
          className="w-80 h-8 border border-gray-300 p-2 text-xs" 
          type="text" 
          placeholder="Buscar por ID do ticket ou Nome do Cliente" 
          value={searchTerm} 
          onChange={handleSearchInputChange} 
        />
      </div>

      {/* tabela */}
      <div className="flex flex-col items-center relative overflow-x-auto">
        {
          tickets.length == 0 
          ? 
          <Loading />
          :
        
        <table className="w-10/12 text-xs text-left rtl:text-right text-gray-500 dark:text-gray-400 border border-gray-300">
          <thead className="text-gray-900 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3"> id </th>
              <th scope="col" className="px-6 py-3"> Data de abertura </th>
              <th scope="col" className="px-6 py-3"> Título </th>
              <th scope="col" className="px-6 py-3"> Cliente </th>
              <th scope="col" className="px-6 py-3"> Funcionario </th>
              {/* <th scope="col" className="px-6 py-3"> Serviço </th>
              <th scope="col" className="px-6 py-3"> Produto </th> */}
              <th scope="col" className="px-6 py-3"> Status </th>
              <th scope="col" className="px-6 py-3"> Departamento </th>
            </tr>
          </thead>
          <tbody>
            {
            filteredTickets.map((ticket) => (
              <tr 
                className="hover:bg-gray-50 dark:hover:bg-gray-50 text-gray-600"
                onClick={() => handleRowClick(ticket)}
                key={ticket.id}
              >
                <th scope="row" className="px-6 py-4 whitespace-nowrap max-w-32 text-ellipsis overflow-hidden">
                  {ticket.id}
                </th>
                <td className="px-6 py-4">
                  {ticket.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap max-w-32 text-ellipsis overflow-hidden">
                  {ticket.title}
                </td>
                <td className="px-6 py-4">
                  {ticket.customerName}
                </td>
                {/* <td className="px-6 py-4">
                  {ticket.service == null ? "Nenhum" : ticket.service.name}
                </td>
                <td className="px-6 py-4">
                  {ticket.product == null ? "Nenhum" : ticket.product.name}
                </td> */}
                <td className="px-6 py-4">
                  {ticket.employeeName}
                </td>
                <td className="px-6 py-4">
                  {ticket.status}
                </td>
                <td className="px-6 py-4">
                  {ticket.departmentName}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        }
      </div>
      <div className="pb-16"></div>
      <Modal 
        isOpen={showModal}
        onClose={closeModal}
        ticket={ticketModal}
        departments={departments}
        employees={departments}
        onAssignDepartment={putTicketDepartment}
        onAssignEmployee={putTicketEmployee}
      />
    </div>
  );
}

export default MainContent;
