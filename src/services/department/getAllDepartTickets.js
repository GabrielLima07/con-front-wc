import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const getAllDepartTickets = async (department_id) => {
  try {
    const token = sessionStorage.getItem("token");
    if (!token) {
      throw new Error("Token não encontrado");
    }
    
    const response = await axios.get(`${API_BASE_URL}/department/tickets/${department_id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar os tickets:", error);
  }
}


export default getAllDepartTickets;