import React, { useEffect, useState, useRef } from 'react';
import getCustomerByTicketId from './../../services/ticket/getCustomerByTicketId';
import Modal from '../EmployeeTicketsModal/Modal';
import Draggable from '../Draggable/Draggable';

const Card = ({ ticket }) => {
  const [customerName, setCustomerName] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDraggingDisabled, setIsDraggingDisabled] = useState(false);

  const pressTimer = useRef(null);

  useEffect(() => {
    const fetchCustomerName = async () => {
      const customer = await getCustomerByTicketId(ticket.id);
      if (customer) {
        setCustomerName(customer.name);
      }
    };

    fetchCustomerName();
  }, [ticket.id]);

  const openModal = (event) => {
    event.stopPropagation();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsDraggingDisabled(false);
  };

  const handleMouseDown = () => {
    pressTimer.current = setTimeout(() => {
      setIsDraggingDisabled(false); 
    }, 100); 
  };

  const handleMouseUp = (event) => {
    clearTimeout(pressTimer.current);
    if (!isDraggingDisabled) {
      openModal(event); 
    }
    setIsDraggingDisabled(true); 
  };

  return (
    <Draggable id={ticket.id} isDraggingDisabled={isDraggingDisabled}>
      <div 
        onMouseDown={handleMouseDown} 
        onMouseUp={handleMouseUp} 
        onClick={(e) => e.stopPropagation()}
      >
        <div className='flex flex-row mt-1 mr-2 bg-[#F4F4F4] border border-[#BAB8B8] rounded-md cursor-pointer px-2 py-1'>
          <div>
            <p className='text-[#1E1E1E] text-sm'>{ticket.title}</p>
            <p className='text-[#666363] text-xs'>{ticket.id}</p>
            <p className='text-[#1E1E1E] text-sm'>Aberto dia {ticket.date} por {customerName}</p>
          </div>
        </div>
      </div>
      <Modal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        ticket={ticket} 
        customerName={customerName}
      />
    </Draggable>
  );
};

export default Card;
