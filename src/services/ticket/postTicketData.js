import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const token = sessionStorage.getItem("token");

const createTicket = async (data) => {
  try {
    console.log(data);
    const response = await axios.post(`${API_BASE_URL}/ticket`, data, {
      headers: {
        Authorization: `Bearer ${token}`, // Enviando o token de autenticação
      }
    });
    return JSON.stringify(response.status);
  } catch (error) {
    console.log('Erro ao criar o ticket:', error);
    return error.response ? error.response.status : 'Erro inesperado!';
  }
};

export default createTicket;
