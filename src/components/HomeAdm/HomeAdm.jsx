import React from "react";
import Navbar from "../NavbarAdm2.jsx/MenuAdm"
import "tailwindcss/tailwind.css";
import cadastro from "../../assets/HomeAdm/cadastro.png"
import ticket from "../../assets/HomeAdm/tickets.png"
import historico from "../../assets/HomeAdm/historico.png"
import atualizar from "../../assets/HomeAdm/atualizar.png"
import departamento from "../../assets/HomeAdm/departamentos.png"
import SidebarAdm from "./sidebarAdm"
import Footer from "./footerAdm"

const HomeAdm = () => {
  return (
    <div className="homeAdm-container min-h-screen flex flex-col bg-[#D9D9D9]">
      <section className="navbar fixed top-0 left-0 w-full z-20">
        <Navbar />
      </section>

      <section className="flex-grow mt-16 md:mt-32 px-4 md:px-36 ">
        <div className="homeAdm flex flex-col items-center content-center space-x-72">
          
        <div className="titulo pl-72 mt-8 sm:mt-36 md:mt-0">
  <h1 className="text-[#5B5B5B] font-black text-xl md:text-4xl text-center mb-8">
    Bem vindo ao{" "}
    <span className="text-[#379E53] font-black">WayClient</span>
  </h1>
</div>

          <div className="tabela flex flex-row md:flex-row md:gap-x-24 justify-center">
            <ul className="mb-8 md:mb-0 space-y-8 text-center text-[#379E53]">
              <li className="font-bold bg-[#F4F4F4] p-4 flex items-center justify-between text-lg md:text-2xl shadow-md rounded-xl 
              hover:bg-slate-300 ">
                Cadastrar cliente
                <img
                  className="object-cover object-center h-3 md:h-3 ml-2"
                  src={cadastro}
                  alt="sinal de soma"
                />
              </li>
              <li className="font-bold bg-[#F4F4F4] p-4 flex items-center justify-center text-lg md:text-2xl shadow-md rounded-xl *: hover:bg-slate-300">
                Atualizar dados
                <img
                  className="object-cover object-center h-4 md:h-5 ml-2"
                  src={atualizar}
                  alt="setas indicando atualização"
                />
              </li>
              <li className="font-bold bg-[#F4F4F4] p-4 flex items-center justify-center text-lg md:text-2xl shadow-md rounded-xl  hover:bg-slate-300">
                Departamentos
                <img
                  className="object-cover object-center h-4 md:h-5 ml-2"
                  src={departamento}
                  alt="ícone de departamentos"
                />
              </li>
            </ul>
            <ul className="space-y-8 text-center text-[#379E53]">
              <li className="font-bold bg-[#F4F4F4] p-4 flex items-center justify-between text-lg md:text-2xl shadow-md rounded-xl  hover:bg-slate-300">
                Cadastrar Funcionário
                <img
                  className="object-cover object-center h-4 md:h-3 ml-2"
                  src={cadastro}
                  alt="sinal de soma"
                />
              </li>
              <li className="font-bold bg-[#F4F4F4] p-4 flex items-center justify-center text-lg md:text-2xl shadow-md rounded-xl  hover:bg-slate-300">
                Tickets
                <img
                  className="object-cover object-center h-4 md:h-5 ml-2"
                  src={ticket}
                  alt="ícone de ticket"
                />
              </li>
              <li className="font-bold bg-[#F4F4F4] p-4 flex items-center justify-center text-lg md:text-2xl shadow-md rounded-xl  hover:bg-slate-300">
                Histórico
                <img
                  className="object-cover object-center h-4 md:h-5 ml-2"
                  src={historico}
                  alt="ícone de histórico"
                />
              </li>
            </ul>
          </div>
        </div>
      </section>

      <SidebarAdm />

      <Footer className="mt-auto" />
    </div>
  )
}

export default HomeAdm
