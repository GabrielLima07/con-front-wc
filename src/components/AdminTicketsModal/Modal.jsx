import React, { useState } from "react";

export default function Modal({ 
  isOpen, 
  onClose, 
  ticket, 
  departments, 
  onAssignDepartment, 
  onAssignEmployee, 
  onChangeEmployee 
}) {
  const [showDepartmentList, setShowDepartmentList] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [showEmployeeList, setShowEmployeeList] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [employees, setEmployees] = useState([]);

  if (!isOpen) return null;

  // Função para fechar e resetar o estado
  const handleOnClose = () => {
    setShowDepartmentList(false);
    setShowEmployeeList(false);
    setSelectedDepartment(null);
    setSelectedEmployee(null);
    onClose();
  };

  // Função para abrir a lista de departamentos
  const handleAssignDepartmentClick = () => {
    setShowDepartmentList(true);
  };

  // Função para abrir a lista de funcionários
  const handleAssignEmployeeClick = () => {
    const department = departments.find(dept => dept.name === ticket.departmentName);
    if (department) {
      setEmployees(department.employees); // Carrega os funcionários do departamento atual
      setShowEmployeeList(true);
    }
  };

  // Função para confirmar a atribuição do departamento
  const handleConfirmDepartment = () => {
    if (selectedDepartment) {
      onAssignDepartment(ticket.id, selectedDepartment.id);
      setShowDepartmentList(false);
    }
  };

  // Função para confirmar a atribuição do funcionário
  const handleConfirmEmployee = () => {
    if (selectedEmployee) {
      onAssignEmployee(ticket.id, selectedEmployee.id);
      setShowEmployeeList(false);
    }
  };

  // Lógica para exibir o botão correto baseado no status do ticket
  const renderButton = () => {
    if (!ticket.departmentName || ticket.departmentName === "Sem departamento") {
      // Caso 1: Sem departamento e sem funcionário
      return (
        <button
          className="bg-[#5B5B5B] text-white font-bold uppercase text-sm ml-auto px-6 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={handleAssignDepartmentClick}
        >
          Atribuir departamento
        </button>
      );
    } else if (ticket.departmentName && ticket.employeeName === "Nenhum") {
      // Caso 2: Com departamento, mas sem funcionário
      return (
        <button
          className="bg-[#5B5B5B] text-white font-bold uppercase text-sm ml-auto px-6 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={handleAssignEmployeeClick}
        >
          Atribuir responsável
        </button>
      );
    } else if (ticket.departmentName && ticket.employeeName) {
      // Caso 3: Com departamento e com funcionário
      return (
        <button
          className="bg-[#5B5B5B] text-white font-bold uppercase text-sm ml-auto px-6 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={handleAssignEmployeeClick}
        >
          Alterar responsável
        </button>
      );
    }
    return null;
  };

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative my-6 mx-auto max-w-5xl">
          {/* Conteúdo */}
          <div className="border-0 rounded-lg shadow-sm relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-black text-2xl font-semibold">
                {ticket.title}
              </h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={handleOnClose}
              >
                <span className="text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                  X
                </span>
              </button>
            </div>

            {/* Corpo */}
            <div className="flex p-6">
              <div className="w-2/3 pr-6">
                <span className="text-gray-400 text-xs">Aberto por:</span>
                <p className="text-black text-sm mb-4">
                  {ticket.customerName} em {ticket.date}
                </p>
                <span className="text-gray-400 text-xs">Departamento responsável:</span>
                <p className="text-black text-sm mb-4">
                  {ticket.departmentName || "Sem departamento"}
                </p>
                <span className="text-gray-400 text-xs">Funcionário responsável:</span>
                <p className="text-black text-sm mb-4">
                  {ticket.employeeName || "Nenhum funcionário atribuído"}
                </p>
                <span className="text-gray-400 text-xs">Descrição:</span>
                <p className="text-black text-sm leading-relaxed">
                  {ticket.description}
                </p>
              </div>

              {/* Lista de departamentos */}
              {showDepartmentList && (
                <div className="w-1/3 pl-6 border-l">
                  <h4 className="text-lg font-semibold mb-2">Selecione o departamento:</h4>
                  <div className="space-y-2">
                    {departments.map((dept) => (
                      <div key={dept.id} className="flex items-center mb-2">
                        <input
                          type="radio"
                          id={dept.id}
                          name="department"
                          value={dept.name}
                          onChange={() => setSelectedDepartment(dept)}
                          className="mr-2"
                        />
                        <label htmlFor={dept.id} className="text-sm">
                          {dept.name}
                        </label>
                      </div>
                    ))}
                  </div>

                  {/* Botões de confirmação */}
                  <div className="flex mt-6 space-x-4">
                    <button
                      className="bg-transparent border border-black text-black font-bold uppercase text-sm px-6 py-2 rounded shadow hover:bg-gray-200 outline-none focus:outline-none ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowDepartmentList(false)}
                    >
                      Cancelar
                    </button>
                    <button
                      className="bg-gray-500 text-white font-bold uppercase text-sm px-6 py-2 rounded shadow hover:bg-gray-600 outline-none focus:outline-none ease-linear transition-all duration-150"
                      type="button"
                      onClick={handleConfirmDepartment}
                      disabled={!selectedDepartment}
                    >
                      Confirmar
                    </button>
                  </div>
                </div>
              )}

              {/* Lista de funcionários */}
              {showEmployeeList && (
                <div className="w-1/3 pl-6 border-l">
                  <h4 className="text-lg font-semibold mb-2">Selecione o funcionário:</h4>
                  <div className="space-y-2">
                    {employees.map((employee) => (
                      <div key={employee.id} className="flex items-center mb-2">
                        <input
                          type="radio"
                          id={employee.id}
                          name="employee"
                          value={employee.name}
                          checked={selectedEmployee ? selectedEmployee.id === employee.id : ticket.employeeName === employee.name}
                          onChange={() => setSelectedEmployee(employee)}
                          className="mr-2"
                        />
                        <label htmlFor={employee.id} className="text-sm">
                          {employee.name}
                        </label>
                      </div>
                    ))}
                  </div>
                  
                  {/* Botões de confirmação */}
                  <div className="flex mt-6 space-x-4">
                    <button
                      className="bg-transparent border border-black text-black font-bold uppercase text-sm px-6 py-2 rounded shadow hover:bg-gray-200 outline-none focus:outline-none ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowEmployeeList(false)}
                    >
                      Cancelar
                    </button>
                    <button
                      className="bg-gray-500 text-white font-bold uppercase text-sm px-6 py-2 rounded shadow hover:bg-gray-600 outline-none focus:outline-none ease-linear transition-all duration-150"
                      type="button"
                      onClick={handleConfirmEmployee}
                      disabled={!selectedEmployee}
                    >
                      Confirmar
                    </button>
                  </div>
                </div>
              )}
            </div>


            <div className="flex p-6 border-t border-solid border-blueGray-200 rounded-b">
              <button
                className="bg-transparent border border-black text-black font-bold uppercase px-6 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={handleOnClose}
              >
                Fechar
              </button>
              {!showDepartmentList && !showEmployeeList && renderButton()}
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-35 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}
