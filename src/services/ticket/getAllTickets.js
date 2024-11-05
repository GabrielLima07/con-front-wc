import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const getAllTickets = async () => {
  try {
    const token = sessionStorage.getItem("token");
    const response = await axios.get(`${API_BASE_URL}/ticket`, {
      headers: {
        Authorization: `Bearer ${token}`
      
      }
  
    });

    return response.data ;
  
  } catch (error) {
    console.error('Error fetching tickets', error);
    return null;
  }
};

export default getAllTickets;
