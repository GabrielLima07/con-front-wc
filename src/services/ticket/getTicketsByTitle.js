import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Função para buscar tickets por título e ID do cliente
const getTicketsByTitle = async (customerId, title) => {
  try {
    const token = sessionStorage.getItem("token");  // Obtém o token de autenticação
    if (!token) {
      throw new Error("Usuário não autenticado. Token não encontrado.");
    }

    // Requisição ao backend com os parâmetros customerId e title
    const response = await axios.get(`${API_BASE_URL}/ticket/search/${customerId}`, {
      params: { title }, // Passando o parâmetro title corretamente
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data; // Retorna os tickets encontrados
  } catch (error) {
    console.error('Erro ao buscar tickets:', error);
    throw error; // Propaga o erro para ser tratado no componente
  }
};

export default getTicketsByTitle;
