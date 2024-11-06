import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const putTicketEmployee = async (ticketId, newEmployee) => {
  try {
    const token = sessionStorage.getItem("token");
    console.log(newEmployee)
    console.log(ticketId)
    const response = await axios.put(`${API_BASE_URL}/ticket/${ticketId}`, {employee: {id: newEmployee}}, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error updating ticket employee', error);
    return null;
  }
};

export default putTicketEmployee;
