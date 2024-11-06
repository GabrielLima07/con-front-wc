import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const getCustomerByName = async (name) => {
  try {
    const token = sessionStorage.getItem("token");
    const encodedName = encodeURIComponent(name); // Codificando o nome
    const response = await axios.get(`${API_BASE_URL}/customer/name/${encodedName}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data; 
  } catch (error) {
    console.error("Erro ao buscar cliente:", error);
  }
};


export default getCustomerByName;
