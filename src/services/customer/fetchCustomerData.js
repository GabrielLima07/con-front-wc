import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Agora retorna um objeto completo com nome, email e telefone
const fetchCustomerData = async (id) => {
  try {
    const token = sessionStorage.getItem("token");
    const response = await axios.get(`${API_BASE_URL}/customer/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data; // Retorna todos os dados do cliente
  } catch (error) {
    console.log(error);
  }
}

export default fetchCustomerData;
