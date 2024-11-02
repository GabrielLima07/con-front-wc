import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import way from "../../assets/cliente/way.png";
import way2 from "../../assets/cliente/way2.png";
import ask from "../../assets/cliente/ask.png";
import communicate from "../../assets/cliente/communicate.png";
import handshake from "../../assets/cliente/handshake.png";
import perfil from "../../assets/cliente/perfil.png";
import ticket from "../../assets/cliente/ticket.png";
import idea from "../../assets/cliente/idea.png";
import Loading from '../Loading/Loading';

const imagem1 = way;
const imagem2 = way2;

const CentralDeAjuda = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  
  const handleTicketsButtonClick = () => {
    navigate('/Create-Ticket'); 
  };

  const handleFAQButtonClick = () => {
    navigate('/Perguntas-Frequentes'); 
  };

  const handlePerfilButtonClick = () => {
    navigate('/perfil'); 
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="flex justify-center items-center">
      <div className="flex shadow-[0_10px_60px_-20px_rgba(0,0,0,0.3)] flex-col justify-center items-center mt-10 w-4/5">
        <h1 className="text-greenh text-5xl mt-10">WayClient</h1>
        <h2 className="mt-32 text-3xl">Como posso ajudar?</h2>
        <div className="flex w-3/4">
          <img src={imagem1} alt="Way" className="hidden sm:block" />
          <input
            type="search"
            className="h-10 mt-12 ml-8 mr-8 sm:block md:w-full text-greene px-2 py-1 rounded-3xl m-2 outline-0 focus:border-greene focus:ring-1 focus:ring-greene sm:text-sm sm:leading-6 shadow-md shadow-greene"
            placeholder="search"
          />
          <img src={imagem2} alt="Way2" className="hidden sm:block" />
        </div>
        <div className="flex flex-row m-4 mt-20 space-x-6">
          <div className="flex flex-col w-1/3 space-y-4">
            <button
              onClick={handleFAQButtonClick} 
              className="border-greenh bg-transparent flex flex-col items-center justify-center h-32 w-full border-2 p-4 hover:border-greenh"
            >
              <img src={ask} alt="Perguntas Frequentes" className="h-12 w-12" />
              <span className="text-sm text-black">Perguntas Frequentes</span>
            </button>
            <button
              className="border-greenh bg-transparent flex flex-col items-center justify-center h-32 w-full border-2 p-4 hover:border-greenh"
            >
              <img src={handshake} alt="Nosso Propósito" className="h-12 w-12" />
              <span className="text-sm text-black">Nosso Propósito</span>
            </button>
          </div>
          <div className="flex flex-col w-1/3 space-y-4">
            <button
              onClick={handleTicketsButtonClick} 
              className="border-greenh bg-transparent flex flex-col items-center justify-center h-32 w-full border-2 p-4 hover:border-greenh"
            >
              <img src={ticket} alt="Meus Tickets" className="h-12 w-12" />
              <span className="text-sm text-black">Meus Tickets</span>
            </button>
            <button
              onClick={handlePerfilButtonClick} 
              className="border-greenh bg-transparent flex flex-col items-center justify-center h-32 w-full border-2 p-4 hover:border-greenh"
            >
              <img src={perfil} alt="Sua Conta" className="h-12 w-12" />
              <span className="text-sm text-black">Sua Conta</span>
            </button>
          </div>
          <div className="flex flex-col w-1/3 space-y-4">
            <button
              className="border-greenh bg-transparent flex flex-col items-center justify-center h-32 w-full border-2 p-4 hover:border-greenh"
            >
              <img src={idea} alt="Nossos Serviços" className="h-12 w-12" />
              <span className="text-sm text-black">Nossos Serviços</span>
            </button>
            <button
              className="border-greenh bg-transparent flex flex-col items-center justify-center h-32 w-full border-2 p-4 hover:border-greenh"
            >
              <img src={communicate} alt="Fale Conosco" className="h-12 w-12" />
              <span className="text-sm text-black">Fale Conosco</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CentralDeAjuda;
