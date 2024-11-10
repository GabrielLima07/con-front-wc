import React from 'react';
import {XMarkIcon} from '@heroicons/react/24/outline'

const Modal = ({ isOpen, onClose, ticket, customerName }) => {
  if (!isOpen) return null;

  return (
    <div className="flex items-center justify-center fixed inset-0  bg-[#00000080]">
      <div className="flex flex-col items-start px-4 py-2 rounded-md bg-[#f4f4f4] shadow-2xl
        w-10/12 sm:w-3/5 md:w-2/5
        "
      >
        <div className="flex items-center justify-center rounded-full h-6 w-6  ml-auto  bg-red-500 cursor-pointer" onClick={onClose}>
          <XMarkIcon className="h-4 w-4"/>
        </div>
        <h2>{ticket.title}</h2>
        <p className='border border-blue-600 rounded-sm px-2 text-xs text-black'>{ticket.status}</p>
        <p className='my-1 text-xs text-gray-400'>ID: {ticket.id}</p>
        <p className='mt-1 text-xs text-gray-400'>Aberto por:</p>
        <p className='text-sm text-gray-950'>{customerName} em {ticket.date}</p>
        <p className='mt-1 text-xs text-gray-400'>Descrição:</p>
        <p className='mb-3 text-sm text-gray-950'>{ticket.description}</p>
      </div>
    </div>
  );
};

export default Modal;
