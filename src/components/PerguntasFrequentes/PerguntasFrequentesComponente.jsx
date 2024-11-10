import React, { useState } from 'react';
import Footer from './Footer';
import { PlusIcon } from '@heroicons/react/24/outline';
import CustomerNavbar from '../AllNavbars/CustomerNavbar/CustomerNavbar';
import Loading from '../Loading/Loading';

function PerguntasFrequentes() {
  const [openIndex, setOpenIndex] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "O que é um ticket?",
      answer: "Um ticket é uma solicitação de atendimento que você envia para a empresa. Ele é registrado no sistema para que a equipe responsável possa tratá-lo de forma rápida e eficiente."
    },
    {
      question: "Como posso criar um novo ticket?",
      answer: "Para criar um novo ticket, clique no botão 'Meus Tickets' na parte superior do sistema. Na página de criação, selecione o departamento, insira o título e a descrição do problema e, em seguida, clique em 'Enviar'."
    },
    {
      question: "Como posso acompanhar o status do meu ticket?",
      answer: "Para acompanhar o status do seu ticket, acesse seu perfil clicando na sua imagem no canto superior direito e selecione 'Perfil'. Lá, você verá a lista de seus tickets e outras informações do seu perfil."
    },
    {
      question: "Como entro em contato se encontrar algum erro?",
      answer: "Se encontrar algum erro, entre em contato com nosso suporte pelo telefone (81) 99999-9999. Nossa equipe estará pronta para ajudar."
    },
    {
      question: "Qual o horário de atendimento do suporte?",
      answer: "Nosso suporte atende de segunda a sexta-feira, das 8h às 18h, pelo telefone (81) 99999-9999."
    },
    {
      question: "Outros",
      answer: "Se você tiver outras dúvidas, entre em contato com nosso suporte para mais informações."
    }
  ];
  

  if (isLoading) {
    return <Loading />
  }

  return (
    <div>
      <CustomerNavbar />
      <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 bg-gray-100">
        <h1 className="font-bold text-gray-700 text-3xl sm:text-4xl lg:text-5xl mb-10 text-center">
          Perguntas Frequentes
        </h1>
        <div className="flex flex-col items-center gap-6 sm:gap-8 w-full max-w-4xl">
          {faqData.map((item, index) => (
            <div key={index} className="w-full">
              <button 
                onClick={() => handleToggle(index)}
                className="bg-white p-5 sm:p-6 md:p-7 w-full flex items-center justify-between font-bold text-base sm:text-lg text-black rounded-lg border-2 sm:border-4 border-gray-900 transition duration-300 ease-in-out transform hover:scale-105">
                <span>{item.question}</span>
                <PlusIcon className="h-5 sm:h-6 w-5 sm:w-6 text-green-600" />
              </button>
              {openIndex === index && (
                <div className="mt-2 p-4 border-t-2 border-gray-300 w-full text-left sm:text-center">
                  <p className="text-base sm:text-lg text-gray-900">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PerguntasFrequentes;
