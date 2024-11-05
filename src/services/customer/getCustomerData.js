import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// por enquanto só retorna o nome
const getCustomerData = async(id) => {
  try {
    const token = sessionStorage.getItem("token");
    const response = await axios.get(`${API_BASE_URL}/customer/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      },
    });
    return response.data.name;
  } catch (error) {
    console.log(error);
  }
}

export default getCustomerData;