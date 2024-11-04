import React, { useState, useEffect } from "react";
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const ModalCliente = ({ initialData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    password: ''
  });

  const customerId = sessionStorage.getItem("userId");

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    } else {
      console.error("initialData não foi fornecido.");
    }
  }, [initialData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSaveClick = async () => {
    try {
      const token = sessionStorage.getItem("token");
      await axios.put(`${API_BASE_URL}/customer/${customerId}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert("Perfil atualizado com sucesso!");
      setIsOpen(false);
    } catch (error) {
      console.error("Erro ao atualizar perfil:", error);
      alert("Falha ao atualizar perfil. Tente novamente.");
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
      >
        Editar Perfil
      </button>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-md shadow-lg w-full max-w-lg mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-center text-gray-700">Editar Perfil</h2>
            <form>
              {['name', 'phone', 'email', 'password'].map((field) => (
                <div className="mb-4" key={field}>
                  <label className="block text-gray-700">{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                  <input
                    type={field === 'password' ? 'password' : 'text'}
                    name={field}
                    value={formData[field] || ''}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md mt-2"
                    placeholder={`Digite seu novo ${field}`}
                    required
                  />
                </div>
              ))}
              <div className="flex justify-end space-x-4 mt-4">
                <button
                  type="button"
                  onClick={handleSaveClick}
                  className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
                >
                  Salvar
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition"
                >
                  Descartar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalCliente;
