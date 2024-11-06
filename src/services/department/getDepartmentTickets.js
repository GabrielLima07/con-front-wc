import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const getDepartmentTickets = async() => {
  // recebe o id de um dept e retorna os tickets desse dept
  try {
    const token = sessionStorage.getItem("token");
    const department_id = sessionStorage.getItem("department_id");
    const response = await axios.get(`${API_BASE_URL}/department/tickets/${department_id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export default getDepartmentTickets;