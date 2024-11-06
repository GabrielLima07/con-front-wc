import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const putTicketDepartment = async (ticketId, newDepartment) => {
  try {
    const token = sessionStorage.getItem("token");
    const response = await axios.put(`${API_BASE_URL}/ticket/${ticketId}`, {department: {id: newDepartment}}, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error updating ticket department', error);
    return null;
  }
};

export default putTicketDepartment;
