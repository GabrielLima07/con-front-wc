import React, { useState } from "react";

export default function Modal({ 
  isOpen, 
  onClose, 
  ticket
}) {

  const handleOnClose = () => {
    onClose();
  }


  if (!isOpen) return null;

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative my-6 mx-auto max-w-5xl">
          {/* Conteúdo */}
          <div className="border-0 rounded-lg shadow-sm relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-black text-2xl font-semibold">
                {ticket.title}
              </h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={handleOnClose}
              >
                <div className="text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                  X
                </div>
              </button>
            </div>

            {/* Corpo */}
            <div className="flex p-6">
              <div className="w-2/3 pr-6">
                <span className="text-gray-400 text-xs">Aberto por:</span>
                <p className="text-black text-sm mb-4">
                  {ticket.customerName} em {ticket.date}
                </p>
                <span className="text-gray-400 text-xs">Departamento responsável:</span>
                <p className="text-black text-sm mb-4">
                  {ticket.departmentName || "Sem departamento"}
                </p>
                <span className="text-gray-400 text-xs">Funcionário responsável:</span>
                <p className="text-black text-sm mb-4">
                  {ticket.employeeName || "Nenhum funcionário atribuído"}
                </p>
                <span className="text-gray-400 text-xs">Descrição:</span>
                <p className="text-black text-sm leading-relaxed">
                  {ticket.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-35 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}
