import React, { useEffect, useState } from 'react';
import AdminNavbar from "../AllNavbars/AdminNavbar/AdminNavbar";
import atencao from "../../assets/Dashboard/atencao.png";
import getDepartment from '../../services/department/getAllDepartmens.js';

const DashboardComponent = () => {
  const [departamentos, setDepartamentos] = useState([]);

  useEffect(() => {
    const fetchDepartamentos = async () => {
      try {
        const data = await getDepartment();
        console.log(data);
        setDepartamentos(data);
      } catch (error) {
        console.error("Erro ao buscar tickets do departamento:", error);
      }
    };

    fetchDepartamentos();
  }, []);


  const countPendingTickets = (departamento) => {
    return departamento.tickets?.filter(ticket => ticket.status === "Pendente").length || 0;
  };

 
  const getTotalTickets = (departamentos) => {
    return departamentos.reduce((total, dep) => total + (dep.tickets?.length || 0), 0);
  };

  const totalTickets = getTotalTickets(departamentos);

  return (
    <section className='dashboard-container'>
      <AdminNavbar />

      <div className='dashboard m-14'>
        <div className='text-#5B5B5B flex flex-col gap-10 mt-28'>
          <h1 className='text-5xl font-black'>Central de monitoramento</h1>
          <h3 className='text-xl font-semibold'>Departamentos</h3>
        </div>

        <div className='flex gap-6 text-sm text-#5B5B5B mt-6'>
          
          <h6 className='hover:font-black'>Total ({totalTickets} tickets)</h6>
         
          {departamentos.map((dep, index) => (
            <div key={index}>
              <h6 className='hover:font-black'>{dep.name} ({dep.tickets?.length || 0} tickets)</h6>
            </div>
          ))}
        </div>

        <div className='w-full h-px font-black bg-#BAB8B8 my-4'></div>

        <div className='departamentos flex flex-wrap gap-6 mt-6 text-#379E53'>
          {departamentos.map((dep, index) => (
            <div key={index} className='caixinha p-4 border border-#379E53 rounded-lg text-center bg-white w-72'>
              <h4 className='font-semibold text-left text-#379E53'>{dep.name}</h4>
              <div className='flex gap-44 mt-4'>
              <div className="mt-2">
                <h6 className=' text-xl font-semibold text-red-600'>{countPendingTickets(dep)} </h6>
              </div>
                {countPendingTickets(dep) > 0 && (
                  <span className='w-7'>
                    <img src={atencao} alt="Atenção" />
                  </span>
                )}
              </div>

             
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DashboardComponent;
