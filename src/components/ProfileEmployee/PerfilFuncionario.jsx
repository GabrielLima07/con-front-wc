import React, { useState, useEffect } from "react";
import profilepic from "../../assets/funcionario/perfil.png";
import getEmployeeData from '../../services/employee/getEmployeeData';
import getDepartmentByEmployeeId from '../../services/department/getDepartmentByEmployeeId';
import Loading from "../Loading/Loading";

const PerfilFuncionario = () => {
  const [employeeData, setEmployeeData] = useState({ name: '', id: '', department: '' });
  const [activities, setActivities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [activityModal, setActivityModal] = useState({});

  const closeModal = () => {
    setShowModal(false);
  };

  const handleRowClick = (activity) => {
    setActivityModal(activity);
    setShowModal(true);
  };

  useEffect(() => {
    const fetchEmployeeInfo = async () => {
      try {
        const userId = sessionStorage.getItem("userId");
        const employeeInfo = await getEmployeeData(userId);
        const deptData = await getDepartmentByEmployeeId(userId);

        setEmployeeData({ 
          name: employeeInfo, 
          id: userId, 
          department: deptData.name 
        });

        // Exemplo de atividades para exibir
        setActivities([
          { id: "027", cliente: "Marcelly Freitas", data: "18 de Abril de 2024", descricao: "Valor Pago" },
          { id: "152", cliente: "João Paulo", data: "15 de Abril de 2024", descricao: "Desconto" },
        ]);
      } catch (error) {
        console.log("Erro ao buscar dados do funcionário ou departamento:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEmployeeInfo();
  }, []);

  if (isLoading) return <Loading />;

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-6 bg-white rounded-lg shadow-lg mt-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src={profilepic} alt="Perfil" className="w-28 h-28 rounded-full border-2 border-gray-300 shadow-md mr-4" />
            <div>
              <h2 className="text-2xl font-semibold">{employeeData.name || 'Nome não encontrado'}</h2>
              <p className="text-gray-700">ID: {employeeData.id}</p>
              <p className="text-gray-700">Departamento: {employeeData.department}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-6 p-6 bg-white rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4">Minhas Atividades</h3>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-700 border border-gray-300">
            <thead className="bg-gray-200 text-gray-900 uppercase">
              <tr>
                <th className="px-4 py-2">ID Atividade</th>
                <th className="px-4 py-2">Cliente</th>
                <th className="px-4 py-2">Data</th>
                <th className="px-4 py-2">Descrição</th>
              </tr>
            </thead>
            <tbody>
              {activities.slice(0, 10).map(activity => (
                <tr
                  className="hover:bg-gray-100 transition duration-150"
                  key={activity.id}
                  onClick={() => handleRowClick(activity)}
                >
                  <td className="px-4 py-3 font-medium text-[#379E53]">{activity.id}</td>
                  <td className="px-4 py-3">{activity.cliente}</td>
                  <td className="px-4 py-3">{activity.data}</td>
                  <td className="px-4 py-3">{activity.descricao}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* <Modal 
        isOpen={showModal}
        onClose={closeModal}
        activity={activityModal}
      /> */}
    </div>
  );
};

export default PerfilFuncionario;
