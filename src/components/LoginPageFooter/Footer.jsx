import React from 'react';
import instagramLogo from "../../assets/Home/instagram.png";
import facebookLogo from "../../assets/Home/facebook.png";

const Footer = () => {
  return (
    <div>
      <footer className="rodape-home  text-white p-10 bg-#379E53 list-none text-center">
        <div className="rodape flex flex-col md:flex-row justify-around">
          <div id="col1" className="mb-6 md:mb-">
            <li className="font-bold text-xl ">Institucional</li>
            <br />
            <ul className="text-left hover:text-#5B5B5B ">Sobre</ul>
            <ul  className="text-left hover:text-#5B5B5B">Contato</ul>
            <ul  className="text-left hover:text-#5B5B5B">Política de Privacidade</ul>
            <ul  className="text-left hover:text-#5B5B5B">Termos de Uso</ul>
          </div>
          <div id="col2" className="mb-6 md:mb-0">
            <li className="font-bold text-xl ">Atendimento</li>
            <br />
            <ul>Segunda à Sexta das 8 às 18h</ul>
            <ul>(81) 99999-9999</ul>
          </div>
          <div id="col3">
            <li className="font-semibold text-xl ">Nossas Redes</li>
<br />

            <div className="flex justify-around">
    
            <ul id="icon-5">
            <img className="object-cover object-center h-auto w-6" 
          src={instagramLogo} 
          alt="ícone" />
            </ul>
            <ul id="icon-6">
            <img className="object-cover object-center h-auto w-6" 
          src={facebookLogo} 
          alt="ícone" />
            </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer;
