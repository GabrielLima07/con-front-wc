import { useState, useEffect } from 'react';
import Footer from './Footer';
import MinhasImg from '../../assets/images/MinhasImg.jpeg';
import relogio from '../../assets/images/relogio.png';
import email from '../../assets/images/email.png';
import CustomerNavbar from '../AllNavbars/CustomerNavbar/CustomerNavbar';
import createTicket from '../../services/ticket/postTicketData';
import Loading from '../Loading/Loading';
import getAllDepartments from '../../services/department/getAllDepartmens';


function CreateTicket() {
  const [departments, setDepartments] = useState([]);
  const [departmentId, setDepartmentId] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const id = sessionStorage.getItem("userId");
  const [isLoading, setIsLoading] = useState(false);

  function getCurrentDate() {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
  
    return `${day}/${month}/${year}`;
  }
  useEffect(() => {
    const fetchDepartments = async () => {
      const data = await getAllDepartments();
      setDepartments(data);
    };

    fetchDepartments();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(departmentId)

    // Validações
    if (!departmentId || !title || !description) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    const ticketData = {
      department: { id: departmentId },
      title,
      description,
      status: "Pendente",
      date: getCurrentDate(),
      customer: {id : id} ,
      product: null,
      service: null,
    };

    const ticketDataWithoutDepartment = {
      title,
      description,
      status: "Pendente",
      date: getCurrentDate(),
      customer: {id : id} ,
      product: null,
      service: null,
    };

    try {
      setIsLoading(true)
      
      let responseStatus;

      // Chama a função para criar o ticket
      if(departmentId === "Sem departamento") {
        responseStatus = await createTicket(ticketDataWithoutDepartment);
      } else {
        responseStatus = await createTicket(ticketData);
      }

      if (responseStatus === '201') {
        alert('Ticket enviado com sucesso!');
        // Limpar campos após envio
        setDepartmentId('');
        setTitle('');
        setDescription('');
      } else {
        alert(responseStatus);
        //console.log(responseStatus);
      }
    } catch (error) {
      console.log("Error creating ticket")
    } finally {
      setIsLoading(false)
    }
  };

  return (
    <div>
      <CustomerNavbar />
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow flex flex-col md:flex-row">
          <div className="flex w-full md:w-1/2 bg-gray-100 p-8 items-center justify-center">
            <div className="w-full max-w-md p-4">
              <h2 className="text-2xl font-bold mb-6 text-center">Abertura de Ticket</h2>
              {isLoading
              ?
              <Loading />
              :
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="department" className="block text-gray-700">Departamento</label>
                  <select
                    id="department"
                    value={departmentId}
                    onChange={(e) => setDepartmentId(e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option value="">Selecione um departamento</option>
                    <option value="Sem departamento">Não tenho certeza</option>
                    {departments.map(department => (
                      <option key={department.id} value={department.id}>{department.name}</option>
                    ))}
                  </select>
                </div>
                <div className="mb-4">
                  <label htmlFor="title" className="block text-gray-700">Título</label>
                  <input
                    type="text"
                    id="title"
                    value={title}
                    maxLength={255}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="description" className="block text-gray-700">Descrição</label>
                  <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    rows="4"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  Enviar
                </button>
              </form>
              }
            </div>
          </div>
          <div className="flex w-full md:w-1/2 bg-white p-8 items-center justify-center">
            <div className="w-full max-w-md p-4">
              <h2 className="text-2xl font-bold mb-6 text-center">Contato</h2>
              <div className="mb-4 flex items-center">
                <img src={MinhasImg} alt="Telefone" className="w-6 h-6 mr-5" />
                <span>(81) 99999-9999</span>
              </div>
              <div className="mb-4 flex items-center">
                <img src={email} alt="Email logo" className="w-6 h-6 mr-5" />
                <span>graficashow@gmail.com</span>
              </div>
              <div className="mb-4 flex items-center">
                <img src={relogio} alt="Horário de Funcionamento" className="w-6 h-6 mr-5" />
                <span>Segunda à Sexta das 8 às 18h</span>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default CreateTicket;
