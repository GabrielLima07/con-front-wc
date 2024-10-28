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
      question: "Como o sistema de gestão de atendimento pode beneficiar minha empresa?",
      answer: "O sistema pode aumentar a eficiência, melhorar a comunicação e fornecer relatórios detalhados para uma gestão mais eficaz."
    },
    {
      question: "Posso personalizar o sistema de acordo com as necessidades da minha empresa?",
      answer: "Sim, o sistema é altamente personalizável para atender às necessidades específicas de cada empresa."
    },
    {
      question: "Como posso acompanhar o desempenho da minha equipe?",
      answer: "Você pode usar o sistema para gerar relatórios de desempenho e acompanhar métricas importantes em tempo real."
    },
    {
      question: "O sistema é seguro?",
      answer: "Sim, implementamos as melhores práticas de segurança para proteger seus dados e garantir a confidencialidade."
    },
    {
      question: "Posso integrar o sistema com outras ferramentas que minha empresa já utiliza?",
      answer: "Sim, nosso sistema suporta integração com várias ferramentas e aplicativos existentes."
    },
    {
      question: "Outros",
      answer: "Se você tiver outras perguntas, entre em contato com nosso suporte para obter mais informações."
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
