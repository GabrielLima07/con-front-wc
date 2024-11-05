import React, { useEffect, useState } from 'react'
import AdminNavbar from "../AllNavbars/AdminNavbar/AdminNavbar"
import atencao from "../../assets/Dashboard/atencao.png"

const DashboardComponent = () => {
  //apenas para visualizar o frontend
  const [departamentos, setDepartamentos] = useState([
    { nome: "Financeiro", quantidade: 37 },

  ])

  useEffect(() => {
    const fetchDepartamentos = async () => {
      try {
        const response = await fetch('');
        const data = await response.json();
        setDepartamentos(data);
      } catch (error) {
        console.error("Erro ao buscar departamentos:", error);
      }
    }
  }, [])

  const total = departamentos.reduce((acc, dep) => acc + dep.quantidade, 0);

  const totalSemDP = departamentos
  .filter(dep => dep.nome === "Sem departamento")
  .reduce((acc, dep) => acc + dep.quantidade, 0)

  return (
    <section className='dashboard-container'>
      <AdminNavbar/>

      <div className='dashboard m-14'>
        <div className='titulos text-#5B5B5B flex flex-col gap-10 mt-28'>
          <h1 className='text-5xl font-black'>Central de monitoramento</h1>
          <h3 className='text-xl font-semibold'>Departamentos</h3>
        </div>

        <div className='informativos flex gap-6 text-sm text-#5B5B5B mt-6 ml-4'>
          <h6 className='hover:font-black'>Todos ({total})</h6>
          <h6 className='hover:font-black'>Sem departamento ({totalSemDP})</h6>
          {departamentos.map((dep, index) => (
            <h6 key={index} className='hover:font-black'>
              {dep.nome} ({dep.quantidade})
            </h6>
          ))}
        </div>

        <div className='linha w-full h-px font-black bg-#BAB8B8 my-4'></div>

        <div className='departamentos flex flex-wrap gap-6 mt-6 text-#379E53'>
          {departamentos.map((dep, index) => (
           
           <div key={index} className='caixinha p-4 border border-#379E53 rounded-lg text-center bg-white w-72'>
             
              <h4 className='font-semibold text-left'>{dep.nome}</h4>

              <div className='itens flex gap-44 mt-4'>
              <p className='text-2xl font-bold text-red-600'>{dep.quantidade}</p>
              <span className='w-7'>
                <img src={atencao}  alt="" />
              </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DashboardComponent;
