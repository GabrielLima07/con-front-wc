import React from 'react';
import { useNavigate } from 'react-router-dom';
import way from "../../assets/cliente/way.png";
import way2 from "../../assets/cliente/way2.png";
import ask from "../../assets/cliente/ask.png";
import communicate from "../../assets/cliente/communicate.png";
import handshake from "../../assets/cliente/handshake.png";
import perfil from "../../assets/cliente/perfil.png";
import ticket from "../../assets/cliente/ticket.png";
import idea from "../../assets/cliente/idea.png";

const imagem1 = way;
const imagem2 = way2;

const CentralDeAjuda = () => {
  const navigate = useNavigate();

  
  const handleTicketsButtonClick = () => {
    navigate('/perfil');
  };

  const handleFAQButtonClick = () => {
    navigate('/Perguntas-Frequentes');
  };

  const handlePerfilButtonClick = () => {
    navigate('/perfil');
  };

  const handleNossoPropositoButtonClick = () => {
    navigate('/nosso-proposito');
  };

  
  const handleNossosServicosButtonClick = () => {
    navigate('/nosso-serviço');
  };

  
  const handleFaleConoscoButtonClick = () => {
    navigate('/Fale-conosco');  
  };

  return (
    <div className="flex justify-center items-center">
      <div className="flex shadow-[0_10px_60px_-20px_rgba(0,0,0,0.3)] flex-col justify-center items-center mt-10 w-4/5">
        <h1 className="text-greenh text-5xl mt-10">WayClient</h1>
        <div className="flex w-3/4 justify-center items-center">
          <h2 className=" mt-12 text-3xl">Como posso ajudar?</h2>
        </div>
        <div className="flex flex-row m-4 mt-8 space-x-6">
          <div className="flex flex-col w-1/3 mb-8 space-y-4">
            <button
              onClick={handleFAQButtonClick} 
              className="border-greenh bg-transparent flex flex-col items-center justify-center h-32 w-full border-2 p-4 hover:border-#d3d3d3 hover:bg-#d3d3d3"
            >
              <img src={ask} alt="Perguntas Frequentes" className="h-12 w-12" />
              <span className="text-sm text-black">Perguntas Frequentes</span>
            </button>
            <button
              onClick={handleNossoPropositoButtonClick} 
              className="border-greenh bg-transparent flex flex-col items-center justify-center h-32 w-full border-2 p-4 hover:border-#d3d3d3 hover:bg-#d3d3d3"
            >
              <img src={handshake} alt="Nosso Propósito" className="h-12 w-12" />
              <span className="text-sm text-black">Nosso Propósito</span>
            </button>
          </div>
          <div className="flex flex-col w-1/3 space-y-4">
            <button
              onClick={handleTicketsButtonClick} 
              className="border-greenh bg-transparent flex flex-col items-center justify-center h-32 w-full border-2 p-4 hover:border-#d3d3d3 hover:bg-#d3d3d3"
            >
              <img src={ticket} alt="Meus Tickets" className="h-12 w-12" />
              <span className="text-sm text-black">Meus Tickets</span>
            </button>
            <button
              onClick={handlePerfilButtonClick} 
              className="border-greenh bg-transparent flex flex-col items-center justify-center h-32 w-full border-2 p-4 hover:border-#d3d3d3 hover:bg-#d3d3d3"
            >
              <img src={perfil} alt="Sua Conta" className="h-12 w-12" />
              <span className="text-sm text-black">Sua Conta</span>
            </button>
          </div>
          <div className="flex flex-col w-1/3 space-y-4">
          
            <button
              onClick={handleNossosServicosButtonClick}  
              className="border-greenh bg-transparent flex flex-col items-center justify-center h-32 w-full border-2 p-4 hover:border-#d3d3d3 hover:bg-#d3d3d3"
            >
              <img src={idea} alt="Nossos Serviços" className="h-12 w-12" />
              <span className="text-sm text-black">Nossos Serviços</span>
            </button>
            <button
              onClick={handleFaleConoscoButtonClick}  
              className="border-greenh bg-transparent flex flex-col items-center justify-center h-32 w-full border-2 p-4 hover:border-#d3d3d3 hover:bg-#d3d3d3"
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
