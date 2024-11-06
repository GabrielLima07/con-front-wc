import React, { useState, useEffect } from "react";
import getDepartmentTickets from '../../services/department/getAllDepartTickets';
import getAllDepartments from "../../services/department/getAllDepartmens";
import "tailwindcss/tailwind.css";
import setaCima from "../../assets/HomeAdm/setaCima.png";
import setaBaixo from "../../assets/HomeAdm/setaBaixo.png";
import perfil from "../../assets/funcionario/perfil.png"
import Loading from "../Loading/Loading";

const SidebarAdm = () => {
  const [departments, setDepartments] = useState([]);
  const [tickets, setTickets] = useState([])
  const [isOpen, setIsOpen] = useState({})

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const departmentsData = await getAllDepartments()
        
        if (departmentsData && Array.isArray(departmentsData)) {
          setDepartments(departmentsData)
  
          const ticketsData = {}
          for (const department of departmentsData) {
            const departmentTickets = await getDepartmentTickets(department.id)
            ticketsData[department.id] = departmentTickets || []
          }
          setTickets(ticketsData)
        } else {
          console.error("Dados dos departamentos com formato inesperado:", departmentsData)
        }
      } catch (error) {
        console.error("Erro ao buscar departamentos:", error)
      }
    }
  
    fetchDepartments()
  }, [])

  const toggleMenu = (department_id) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [department_id]: !prevState[department_id]
    }));
  }

  return (
    <section className="sidebar bg-[#F9F6EE] flex flex-col p-4 shadow-md fixed bottom-0 left-0 z-10 w-full md:w-1/3 lg:w-1/4 h-auto md:h-screen overflow-y-scroll">
      <div className="flex flex-col space-y-4 mt-8 md:mt-36">
        {
        departments.length == 0
        ?
        <Loading />
        :
        departments.length > 0 && departments.map((dept) => (
          <div key={dept.id} className="department-section">
            <div className="flex justify-between items-center mb-4 mx-8">
              <div className="departamentos">
                <h2 className="font-bold text-base">{"Departamento " + dept.name}</h2>
              </div>
              <img
                src={isOpen[dept.id] ? setaCima : setaBaixo}
                alt="toggle menu"
                onClick={() => toggleMenu(dept.id)}
                className="cursor-pointer"
              />
            </div>
  
            {isOpen[dept.id] && (
              <div className="text-black flex flex-col gap-6">
                <div className="text-sm flex flex-col gap-2">
                  <div className="linha-verde border border-green-500 opacity-40 mb-2"></div>
                  <p className="text-gray-600 text-xs">Situação dos tickets</p>
                  <p>Abertos: {tickets[dept.id]?.filter(ticket => ticket.status === 'Pendente').length || 0}</p>
                  <p>Em atendimento: {tickets[dept.id]?.filter(ticket => ticket.status === 'Em Atendimento').length || 0}</p>
                  <p>Fechados: {tickets[dept.id]?.filter(ticket => ticket.status === 'Fechado').length || 0}</p>
                </div>
  
                <div>
                  <div className="linha-verde border border-green-500 opacity-40 mb-4"></div>
                  <h3 className="text-xs text-gray-600">Membros do departamento</h3>
                  <ul className="space-y-2 mt-2 text-sm">
                    {dept.employees && dept.employees.length > 0 ? (
                      dept.employees.map((member) => (
                        <li key={member.id} className="flex items-center space-x-2">
                          <img src={perfil} alt="perfil" className="w-6 h-6 rounded-full bg-gray-300" />
                          <span>{member.name}</span>
                        </li>
                      ))
                    ) : (
                      <p className="text-black">Sem membros</p>
                    )}
                  </ul>
                  <div className="linha-verde border border-green-500 opacity-40 mt-2 mb-2"></div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default SidebarAdm
