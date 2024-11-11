import React from 'react';
import Footer from './Footer';
import CustomerNavbar from '../AllNavbars/CustomerNavbar/CustomerNavbar';

// Importe os ícones das redes sociais
import { FaInstagram, FaFacebook } from 'react-icons/fa'; 

const FaleConosco = () => {
  return (
    <div>
      <CustomerNavbar />
      
      <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 bg-gray-100">
        <h1 className="font-bold text-gray-700 text-3xl sm:text-4xl lg:text-5xl mb-8 text-center">
          Fale Conosco
        </h1>

        <div className="flex flex-col items-center gap-6 sm:gap-8 w-full max-w-4xl">
          <p className="text-base sm:text-lg text-gray-900 text-center mb-6">
            Estamos aqui para ajudar no que for necessário. Se você tem dúvidas, sugestões ou precisa de suporte,
            nossa equipe está pronta para atendê-lo da melhor forma possível.
          </p>

          {/* Informações de Atendimento */}
          <div className="w-full max-w-lg bg-white shadow-xl rounded-lg p-8 mt-8">
            <h2 className="font-semibold text-2xl text-gray-700 mb-4 text-center">Atendimento</h2>
            <p className="text-lg text-gray-800 mb-6 text-center">
              Segunda à Sexta-feira, das 8h às 18h
            </p>
            
            {/* Redes sociais e contato */}
            <div className="flex flex-col items-center space-y-6 mt-8">
              <p className="text-lg text-gray-800 text-center">
                Nos encontre também nas nossas redes sociais!
              </p>

              {/* Redes sociais */}
              <div className="flex space-x-6">
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram size={40} className="text-pink-500 hover:text-pink-700" />
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <FaFacebook size={40} className="text-blue-600 hover:text-blue-800" />
                </a>
              </div>

              <p className="text-lg text-gray-800 text-center mt-6">
                Também estamos disponíveis no WhatsApp: <strong>(81) 99999-9999</strong>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FaleConosco;
