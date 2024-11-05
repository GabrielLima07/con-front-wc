import React from 'react';
import twitterLogo from "../../assets/Home/twitter.png";
import instagramLogo from "../../assets/Home/instagram.png";
import facebookLogo from "../../assets/Home/facebook.png";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#379E53] text-white mt-5">
        <div className="rodape flex justify-around text-center py-20 px-4 h-62"> 
          <div className="col1">
            <h3 className="font-semibold mb-4 text-left">Institucional</h3>
            <ul className="list-none text-left">
              <li><a href="#" className="text-white">Sobre</a></li>
              <li><a href="#" className="text-white">Contato</a></li>
              <li><a href="#" className="text-white">Política de Privacidade</a></li>
              <li><a href="#" className="text-white">Termos de Uso</a></li>
            </ul>
          </div>
          <div className="col2">
            <h3 className="font-semibold mb-4">Atendimento</h3>
            <ul className="list-none">
              <li>Segunda à Sexta das 8 às 18h</li>
              <li>(81) 99999-9999</li>
            </ul>
          </div>
          <div className="col3">
            <h3 className="font-semibold mb-4">Nossas Redes</h3>
            <div className="flex justify-center space-x-4">
              <a href="#" className="w-8 h-8 bg-contain bg-center bg-no-repeat">
                <img src={twitterLogo} alt="Twitter Logo" className="w-full h-full" />
              </a>
              <a href="#" className="w-8 h-8 bg-contain bg-center bg-no-repeat">
                <img src={instagramLogo} alt="Instagram Logo" className="w-full h-full" />
              </a>
              <a href="#" className="w-8 h-8 bg-contain bg-center bg-no-repeat">
                <img src={facebookLogo} alt="Facebook Logo" className="w-full h-full" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer;
