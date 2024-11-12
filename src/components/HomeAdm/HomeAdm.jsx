import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "tailwindcss/tailwind.css";
import cadastro from "../../assets/HomeAdm/cadastro.png"
import ticket from "../../assets/HomeAdm/tickets.png"
import historico from "../../assets/HomeAdm/historico.png"
import atualizar from "../../assets/HomeAdm/atualizar.png"
import departamento from "../../assets/HomeAdm/departamentos.png"
import SidebarAdm from "./sidebarAdm"
import Footer from "./footerAdm"
import AdminNavbar from "../AllNavbars/AdminNavbar/AdminNavbar";


const HomeAdm = () => {
  const navigate = useNavigate();

  return (
    <div className="homeAdm-container min-h-screen flex flex-col bg-[#D9D9D9]">
      <section className="navbar fixed top-0 left-0 w-full z-20">
        <AdminNavbar />
      </section>

      <section className="flex-grow mt-16 md:mt-32 px-4 md:px-36 ">
        <div className="homeAdm flex flex-col items-center content-center space-x-72">
          
        <div className="titulo pl-72 mt-8 sm:mt-36 md:mt-0">
  <h1 className="text-[#5B5B5B] font-black text-xl md:text-4xl text-center mb-8">
    Bem vindo ao{" "}
    <span className="text-[#379E53] font-black">WayClient</span>
  </h1>
</div>

<div className="tabela flex justify-center">
  <ul className="flex flex-col gap-6 items-center text-center text-[#379E53]">
    <li
      onClick={() => navigate("/cadastroColaborador")}
      className="w-96 h-18 font-bold bg-[#F4F4F4] p-4 flex items-center justify-center text-lg md:text-2xl shadow-md rounded-xl hover:bg-slate-300 cursor-pointer transition duration-300"
    >
      Cadastrar cliente
      <img className="ml-auto h-6 object-cover" src={cadastro} alt="sinal de soma" />
    </li>

    <li
      onClick={() => navigate("/cadastroColaborador")}
      className="w-96 h-18 font-bold bg-[#F4F4F4] p-4 flex items-center justify-center text-lg md:text-2xl shadow-md rounded-xl hover:bg-slate-300 cursor-pointer transition duration-300"
    >
      Cadastrar Funcionário
      <img className="ml-auto h-6 object-cover" src={cadastro} alt="sinal de soma" />
    </li>

    <li
      onClick={() => navigate("/admin-tickets")}
      className="w-96 h-18 font-bold bg-[#F4F4F4] p-4 flex items-center justify-center text-lg md:text-2xl shadow-md rounded-xl hover:bg-slate-300 cursor-pointer transition duration-300"
    >
      Tickets
      <img className="ml-auto h-6 object-cover" src={ticket} alt="ícone de ticket" />
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