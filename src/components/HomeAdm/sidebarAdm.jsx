import React, { useState, useEffect } from "react";
import getDepartmentByEmployeeId from '../../services/department/getDepartmentByEmployeeId';
import getDepartmentTickets from '../../services/department/getDepartmentTickets';
import { countPedente } from '../../utils/countPedente';
import { countEmAtendimento } from '../../utils/countEmAtendimento';
import { countEmImpedimento } from '../../utils/countEmImpedimento';
import { countFechado } from '../../utils/countFechado';
import Membrosdep from '../funcionario/membrosdep';

import "tailwindcss/tailwind.css";
import setaCima from "../../assets/HomeAdm/setaCima.png";
import setaBaixo from "../../assets/HomeAdm/setaBaixo.png";

const SidebarAdm = () => {
  const [department, setDepartment] = useState(null);
  const [tickets, setTickets] = useState([]);
  const [abertos, setAbertos] = useState(0);
  const [emAtendimento, setEmAtendimento] = useState(0);
  const [emImpedimento, setEmImpedimento] = useState(0);
  const [fechados, setFechados] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  
  useEffect(() => {
    const fetchDepartment = async () => {
      const employeeId = sessionStorage.getItem("userId");
      if (employeeId) {
        try {
          const data = await getDepartmentByEmployeeId(employeeId);
          setDepartment(data);
          sessionStorage.setItem("department_id", data.id);
        } catch (error) {
          console.error("Erro ao buscar departamento:", error);
        }
      }
    }
    fetchDepartment()
  }, [])


  useEffect(() => {
    const fetchDepartmentTickets = async () => {
      const departmentId = sessionStorage.getItem("department_id")
      if (departmentId) {
        try {
          const data = await getDepartmentTickets(departmentId)
          setTickets(data)
          setAbertos(countPedente(data))
          setEmAtendimento(countEmAtendimento(data))
          setEmImpedimento(countEmImpedimento(data))
          setFechados(countFechado(data))
        } catch (error) {
          console.error("Erro ao buscar tickets:", error)
        }
      }
    };
    fetchDepartmentTickets();
  }, [department]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="sidebar bg-[#F9F6EE] flex flex-col p-4 shadow-md fixed bottom-0 left-0 z-10 w-full md:w-1/3 lg:w-1/4 h-auto md:h-screen">
      <div className="flex flex-col space-y-4 mt-8 md:mt-36">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-lg">
            {department ? department.name : "Departamento"}
          </h2>
          <img
            src={isOpen ? setaCima : setaBaixo}
            alt="toggle menu"
            onClick={toggleMenu}
            className="cursor-pointer"
          />
        </div>
        {isOpen && (
          <div className="text-#1E1E1E">
            <div className="text-sm">
              <p className="text-gray-600">Situação dos tickets</p>
            </div>
            <p>Abertos: {abertos}</p>
            <p>Em atendimento: {emAtendimento}</p>
            <p>Fechados: {fechados}</p>
          </div>
        )}
        {isOpen && (
          <div>
            <h3 className="text-sm text-gray-600">Membros do departamento</h3>
            <ul className="space-y-2 mt-2">
              {department && department.employees ? (
                department.employees.map((employee, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <span className="w-6 h-6 bg-red-500 text-white rounded-full text-center">
                      {employee.name[0]}{employee.name[1]} 
                    </span>
                    <span>{employee.name}</span> 
                  </li>
                ))
              ) : (
                <p>Sem membros</p>
              )}
            </ul>
          </div>
        )}
      </div>
    </section>
  )
}

export default SidebarAdm
