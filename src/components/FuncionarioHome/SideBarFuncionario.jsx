import { useState, useEffect } from "react";

import getDepartmentByEmployeeId from '../../services/department/getDepartmentByEmployeeId';
import getDepartmentTickets from '../../services/department/getDepartmentTickets';
import { countPedente } from '../../utils/countPedente';
import { countEmAtendimento } from '../../utils/countEmAtendimento';
import { countEmImpedimento } from '../../utils/countEmImpedimento';
import { countFechado } from '../../utils/countFechado';
import Membrosdep from '../funcionario/membrosdep';
import Loading from "../Loading/Loading";

const SideBarFuncionario = () =>{
    const [department, setDepartment] = useState(null);
    const [tickets, setTickets] = useState([]);
    const [abertos, setAbertos] = useState(0);
    const [emAtendimento, setEmAtendimento] = useState(0);
    const [emImpedimento, setEmImpedimento] = useState(0);
    const [fechados, setFechados] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
  
    useEffect(() => {
      const fetchDepartment = async () => {
        try {
          setIsLoading(true)
          const employeeId = sessionStorage.getItem("userId");
          const data = await getDepartmentByEmployeeId(employeeId);
          setDepartment(data);
          sessionStorage.setItem("department_id", data.id)
        } catch (error) {
          console.log("Error fetching departments")
        } finally {
          setIsLoading(false)
        }
      };
  
      fetchDepartment();
    }, []);
  
    useEffect(() => {
        const fetchDepartmentTickets = async() => {
            const data = await getDepartmentTickets();
            setTickets(data);
            setAbertos(countPedente(data));
            setEmAtendimento(countEmAtendimento(data))
            setEmImpedimento(countEmImpedimento(data))
            setFechados(countFechado(data))
        }
  
        fetchDepartmentTickets();
    }, [])
  
    if (!department) {
      return <Loading />
    }
  
    return (
      <div className="flex flex-col h-full sm:h-full border-r border-[#379E53] sm:border-r sm:border-[#379E53]
        lg:h-full lg:border-r lg:border-[#379E53] bg-begepalido
        "
      >
        {isLoading 
        ?
        <Loading />
        :
        <div>
        {/* department name */}
        <section>
          <h3 className="flex justify-center text-md md:text-lg py-1 px-4 text-center"> Departamento {department.name}</h3>
        </section>
  
        <hr />
  
        <div className='flex flex-col'>
          {/* department tickets sitaution */}
          <section className='px-2 lg:px-4 py-2'>
            <h3 className='text-[#0e0e0e73] text-sm md:text-sm lg:text-base'>Situações dos Tickets</h3>
            <div className='flex flex-col gap-1 text-xs md:text-sm lg:text-base'>
              <h3 className='text-inherit'>Abertos: {abertos ? abertos : 12}</h3>
              <h3 className='text-inherit'>Em atendimento: {emAtendimento ? emAtendimento : 12}</h3>
              <h3 className='text-inherit'>Em impedimento: {emImpedimento ? emImpedimento : 12}</h3>
              <h3 className='text-inherit'>Fechados: {fechados ? fechados : 12}</h3>
            </div>
          </section>
  
          <hr />
  
          {/* department employees */}
          <section className='flex flex-col md:gap-2 px-2 lg:px-4 py-2 text-sm lg:text-base'>
            <h3 className="text-[#0e0e0e73]">Membros do Departamento</h3>
              <div className='flex flex-col flex-wrap gap-1 lg:h-auto md:h-24 sm:h-auto'>
                {department.employees.map(employee => (
                  <Membrosdep key={employee.id} employee={employee} />
                ))}
              </div>
          </section>
        </div>
  
        <hr />
        </div>
        }
      </div>
    );
}

export default SideBarFuncionario;
