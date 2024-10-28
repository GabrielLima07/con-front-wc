import React, { useState } from "react";
import editar from "../../../assets/Modais/botaoeditar.png";

const ModalCliente = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [editingField, setEditingField] = useState(null)

  const handleEditClick = (field) => setEditingField(field)
  const handleSaveClick = () => {
    setEditingField(null)
    setIsOpen(false)
  };

  return (
    <>
      <button //esse button é como se fosse as configurações ou o editar quando for chamar na outra
        onClick={() => setIsOpen(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Editar Perfil
      </button>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md shadow-lg w-1/3">
            <h2 className="text-2xl font-bold mb-4 text-center text-# text-#5B5B5B">Editar Perfil</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 flex items-center">
                  Nome completo
                  {editingField !== 'name' && (
                    <span
                      onClick={() => handleEditClick('name')}
                      className="text-green-600 cursor-pointer ml-2"
                    >
                      <img src={editar} alt="editar" className="w-4 h-4" />
                    </span>
                  )}
                </label>
                {editingField === 'name' && (
                  <input
                    type="text"
                    className="w-full px-3 py-2 border rounded-md mt-2"
                    placeholder="Digite seu novo nome"
                  />
                )}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 flex items-center">
                  Telefone
                  {editingField !== 'phone' && (
                    <span
                      onClick={() => handleEditClick('phone')}
                      className="text-green-600 cursor-pointer ml-2"
                    >
                      <img src={editar} alt="editar" className="w-4 h-4" />
                    </span>
                  )}
                </label>
                {editingField === 'phone' && (
                  <input
                    type="text"
                    className="w-full px-3 py-2 border rounded-md mt-2"
                    placeholder="Digite seu novo telefone"
                  />
                )}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 flex items-center">
                  E-mail
                  {editingField !== 'email' && (
                    <span
                      onClick={() => handleEditClick('email')}
                      className="text-green-600 cursor-pointer ml-2"
                    >
                      <img src={editar} alt="editar" className="w-4 h-4" />
                    </span>
                  )}
                </label>
                {editingField === 'email' && (
                  <input
                    type="text"
                    className="w-full px-3 py-2 border rounded-md mt-2"
                    placeholder="Digite seu novo email"
                  />
                )}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 flex items-center">
                  Nova Senha
                  {editingField !== 'password' && (
                    <span
                      onClick={() => handleEditClick('password')}
                      className="text-green-600 cursor-pointer ml-2"
                    >
                      <img src={editar} alt="editar" className="w-4 h-4" />
                    </span>
                  )}
                </label>
                {editingField === 'password' && (
                  <>
                    <input
                      type="password"
                      className="w-full px-3 py-2 border rounded-md mt-2"
                      placeholder="Digite sua nova senha"
                    />
                    <input
                      type="password"
                      className="w-full px-3 py-2 border rounded-md mt-2"
                      placeholder="Confirme sua nova senha"
                    />
                  </>
                )}
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={handleSaveClick}
                  className="bg-green-500 text-white px-4 py-2 rounded-md"
                >
                  Salvar
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(false);
                    setEditingField(null);
                  }}
                  className="bg-gray-500 text-white px-4 py-2 rounded-md"
                >
                  Descartar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default ModalCliente
