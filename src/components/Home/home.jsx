import React from "react";
import "tailwindcss/tailwind.css";
import { Link } from "react-router-dom";
import pchome from "../../assets/Home/pchome.png";
import gestao from "../../assets/Home/gestao.png";
import mulher from "../../assets/Home/mulher.png";
import servicos from "../../assets/Home/servicos.png";
import coment from "../../assets/Home/coment.png"
import pen from "../../assets/Home/pen.png"
import light from "../../assets/Home/light.png"
import insta from "../../assets/Home/instagram.png"
import face from "../../assets/Home/facebook.png"
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const navigate = useNavigate();

  const handleSignupClick = () => {
    navigate("/signup")
  }

  const handleLoginClick = () => {
    navigate("/login")
  }

  const handleLogoClick = () => {
    navigate("/")
  }

  return (
    <div>
      <nav className="menu-content navbar fixed top-0 left-0 w-full z-20">
        <div className="menu flex justify-between items-center p-3 ">
          <h2 id="logo" className="text-3xl ml-4" onClick={handleLogoClick}>WayClient</h2>

            <div className="textos flex">
              <h3 className="link text-inherit border-2 py-1.5 px-3 border-white rounded-3xl hover:text-#379E53 hover:bg-white" onClick={handleLoginClick}>Login</h3>
              <h3 id={"cadastre"} className="link text-inherit  hover:text-white" onClick={handleSignupClick}>Cadastre-se</h3>
            </div>
          </div>
        </nav>

      <section className="pc-content flex flex-col md:flex-row justify-evenly items-center p-10 md:p-20">
        <div className="imgPc bg-pchome bg-cover bg-no-repeat mt-12">
          <img className="object-cover object-center w-70 h-auto" src={pchome} alt="PC Home" />
        </div>
        <div className="frases flex items-center text-center md:text-left content-center mb-28 mt-36   relative md:ml-10">
          <h1 className="text-2xl md:text-4xl lg:text-6xl text-#379E53">
            <span className="font-extrabold text-4xl md:text-5xl lg:text-7xl ">WayClient</span>
            <p className="text-#5B5B5B text-2xl text-center font-bold mt-3"><span className="text-#379E53">-</span> espera e <span className="text-green-500">+</span> vendas, totalmente <br /> automático.</p>
          </h1>
        </div>
      </section>

      <section className="dicas-content bg-#83B791 h-auto md:h-96 p-10">
        <div className="dicas ">
          <div className="mb-8">
            <h1 className="text-white text-left  md:ml-24 w-full md:w-80 text-2xl md:text-3xl font-bold">Por que o WayClient?</h1>
          </div>
          <div className="caixas-content flex flex-col md:flex-row justify-around items-center space-y-6 md:space-y-0">
            <div id="caixas" className="bg-white w-full md:w-80 text-center p-4 rounded-3xl">
              <div id="icon-1" className="flex justify-center ">
              <img className="object-cover object-center h-auto" 
          src={coment} 
          alt="ícone" />
                
              </div>
              <h4 className="text-#379E53  font-bold text-xl">Melhorar seu atendimento</h4>
              <br />
              <p className="text-#5B5B5B  font-bold" >Maximize a eficiência operacional, melhore a satisfação do seu cliente e 
                impulsione o crescimento empresarial.</p>
            </div>
            <div id="caixas" className="bg-white w-full md:w-80 text-center p-4 rounded-3xl">
              <div id="icon-2" className="flex justify-center ">
              <img className="object-cover object-center h-auto" 
          src={pen} 
          alt="ícone" />
              </div>
              <h4 className="text-#379E53 text-xl font-bold">Personalização</h4>
              <br />
              <p className="text-#5B5B5B font-bold"> Ofereça uma experiência personalizada  ao cliente, aumentando sua satisfação e <br /> fidelidade.</p>
            </div>
            <div id="caixas" className="bg-white w-full md:w-80 text-center p-4 rounded-3xl">
              <div id="icon-3" className="flex justify-center ">
              <img className="object-cover object-center h-auto" 
          src={light} 
          alt="ícone" />
              </div>
              <h4 className="text-#379E53 text-xl font-bold">Eficiência</h4>
              <br />
              <p className="text-#5B5B5B font-bold">Automatiza processos, reduzindo <br /> tempo e esforço na gestão de <br />
               tickets e solicitações.</p>
               <br />
            </div>
          </div>
        </div>
      </section>

      <section className="gestao-content flex flex-col md:flex-row justify-evenly items-center p-10 md:p-20">
        <div className="gestao text-center md:text-left">
          <h1 className="text-#5B5B5B text-3xl md:text-5xl font-bold"><span className="text-#379E53 font-bold">Otimize</span> a gestão <br /> da sua equipe</h1>
          <br />
          <p className="text-#5B5B5B text-lg">Aumente a produtividade da sua equipe <br /> de suporte centralizando os registros de
        <br /> solicitações com seu cliente em um só <br /> lugar.</p>
        </div>
        <div id="img-1" className="imgGestao bg-cover bg-no-repeat">
          <img className="object-cover object-center h-auto" 
          src={gestao} 
          alt="Gestão" />
        </div>
      </section>

      <section className="satisfacao-content flex flex-col md:flex-row justify-evenly items-center bg-#83B791 p-10 md:p-20">
        <div id="img-2" className="imgMulher bg-cover bg-no-repeat">
          <img className="object-cover object-center h-auto" 
          src={mulher} 
          alt="Mulher" />
        </div>
        <div className="satisfacao text-white  md:text-left ">
          <div className="tituloAumenteNivel flex justify-end  ">
          <h1 className="text-2xl md:text-5xl tracking-wider font-bold p-6 text-right ">Aumente o nível <br /> de satisfação de <br /> seus clientes</h1> </div>
          <p id="p2" className="text-lg md:text-xl text-right">Ofereça uma experiência personalizada, <br /> distribuindo cada chamado para seu setor específico.</p>
        </div>
      </section>

      <section className="otimize-content flex flex-col md:flex-row-reverse justify-around items-center  p-10 md:p-20">
        <div id="img-3" className="imgServicos bg-cover bg-no-repeat w-40 flex items-center justify-center ">
          <img className="object-cover object-center h-auto" 
          src={servicos}
           alt="Serviços" />
        </div>
        <div className="otimize text-center md:text-left ">
          <h2 className="text-4xl  text-#5B5B5B  ">Otimize seu fluxo de <br /> atendimento!</h2>
          <p id="p3" className="text-2xl text-justify text-#5B5B5B ">Experimente nosso sistema de <br /> gestão de atendimentos e eleve a eficiência <br />
            da sua equipe. <br /> Aumente a satisfação do seu <br /> cliente e impulsione o<br /> crescimento do seu negócio com <br /> nossa plataforma.
          </p>
          <button id="bt" className="bg-#379E53 shadow md:shadow-xl
           hover:bg-white hover:border-#379E53 hover:text-#379E53 border-2
            border-#379E53 rounded-full text-2xl mt-8 md:p-3 w-60 max-h-20">Comece Agora!</button>

        </div>
      </section>

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
          src={insta} 
          alt="ícone" />
            </ul>
            <ul id="icon-6">
            <img className="object-cover object-center h-auto w-6" 
          src={face} 
          alt="ícone" />
            </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
