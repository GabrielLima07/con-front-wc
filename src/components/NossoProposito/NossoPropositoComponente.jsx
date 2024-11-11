import React from 'react';
import Footer from './Footer';  // Certifique-se de importar o Footer corretamente
import CustomerNavbar from '../AllNavbars/CustomerNavbar/CustomerNavbar'; // Certifique-se de importar o Navbar corretamente

const NossoProposito = () => {
  return (
    <div>
      {/* Navbar */}
      <CustomerNavbar />
      
      {/* Conteúdo principal da página */}
      <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 bg-gray-100">
        <h1 className="font-bold text-gray-700 text-3xl sm:text-4xl lg:text-5xl mb-10 text-center">
          Nosso Propósito
        </h1>
        <div className="flex flex-col items-center gap-6 sm:gap-8 w-full max-w-4xl">
          <p className="text-base sm:text-lg text-gray-900 text-center mb-6">
            Aqui, na WayClient, nosso propósito é proporcionar a melhor experiência para nossos clientes,
            oferecendo soluções inovadoras e personalizadas para cada necessidade.
          </p>
          <p className="text-base sm:text-lg text-gray-900 text-center mb-6">
            Nossa missão é ser a ponte que conecta você a soluções tecnológicas eficazes e seguras, sempre
            com um foco no atendimento de qualidade e em resultados que realmente importam para você.
          </p>
          <p className="text-base sm:text-lg text-gray-900 text-center">
            Trabalhamos incansavelmente para garantir que sua experiência conosco seja simples, segura e
            transformadora. Nosso compromisso é com você, o cliente, em cada passo dessa jornada.
          </p>
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default NossoProposito;
