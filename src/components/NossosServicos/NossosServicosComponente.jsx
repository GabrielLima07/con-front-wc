import React from 'react';
import Footer from './Footer';  
import CustomerNavbar from '../AllNavbars/CustomerNavbar/CustomerNavbar'; 

const NossosServicos = () => {
  return (
    <div>
      <CustomerNavbar />
      
      <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 bg-gray-100">
        <h1 className="font-bold text-gray-700 text-3xl sm:text-4xl lg:text-5xl mb-10 text-center">
          Nossos Serviços
        </h1>
        <div className="flex flex-col items-center gap-6 sm:gap-8 w-full max-w-4xl">
          <p className="text-base sm:text-lg text-gray-900 text-center mb-6">
            Na WayClient, oferecemos uma gama de serviços pensados para atender às suas necessidades de maneira eficaz e inovadora.
          </p>
          <p className="text-base sm:text-lg text-gray-900 text-center mb-6">
            Nossa equipe está dedicada a proporcionar soluções que conectem você a ferramentas e tecnologias que melhoram sua experiência e aumentam a sua produtividade.
          </p>
          <p className="text-base sm:text-lg text-gray-900 text-center mb-6">
            Com um atendimento personalizado e foco em resultados, nosso objetivo é garantir que você tenha acesso às melhores soluções de forma simples e segura.
          </p>
          <p className="text-base sm:text-lg text-gray-900 text-center">
            Conte conosco para transformar sua jornada com serviços de alta qualidade e comprometimento com o seu sucesso.
          </p>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NossosServicos;
