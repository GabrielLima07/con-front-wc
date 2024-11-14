import React, { useState } from "react";
import { isEquals } from './../../utils/isEquals';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import signUpCustomer from "../../services/auth/signUpCustomer";
import twitterLogo from "../../assets/Home/twitter.png";
import instagramLogo from "../../assets/Home/instagram.png";
import facebookLogo from "../../assets/Home/facebook.png";
import EmployeeNavbar from "../AllNavbars/EmployeeNavbar/EmployeeNavbar"
import Loading from "../Loading/Loading";

const CadastroCliente = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [nomeCliente, setNomeCliente] = useState('');
    const [emailCliente, setEmailCliente] = useState('');
    const [senhaCliente, setSenhaCliente] = useState('');
    const [telefoneCliente, setTelefoneCliente] = useState('');
    const [senhaRepetidaCliente, setSenhaRepetidaCliente] = useState('');
    const [emailError, setEmailError] = useState('');

    const formatarTelefone = (valor) => {
        // Remove tudo que não for número
        valor = valor.replace(/\D/g, '');
    
        if (valor.length <= 2) {
          return `(${valor}`;
        }
        if (valor.length <= 6) {
          return `(${valor.slice(0, 2)}) ${valor.slice(2)}`;
        }
        return `(${valor.slice(0, 2)}) ${valor.slice(2, 7)}-${valor.slice(7, 11)}`;
    };

    //Função para mostrar senha
    const [open, setOpen] = useState(false)

    const toggle = () => {
        setOpen(!open)
    }

    const handleNomeClienteChange = (e) => {
        const value = e.target.value;
    
        const regex = /^[A-Za-zÀ-ÿ\s]*$/;
    
        if (regex.test(value)) {
            setNomeCliente(e.target.value);
        }
    };

    const handleEmailClienteChange = (event) => {
        const inputEmail = event.target.value;
        setEmailCliente(event.target.value);
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(inputEmail)) {
          setEmailError("Por favor, insira um email válido.\nExemplo: exemplo@dominio.com");
    
        } else {
          setEmailError('');
        }
    };

    const handleTelefoneClienteChange = (event) => {
        const { value } = event.target;
        setTelefoneCliente(formatarTelefone(value));
    };

    const handleSenhaClienteChange = (event) => {
        setSenhaCliente(event.target.value);
    };

    const handleSenhaRepetidaClienteChange = (event) => {
        setSenhaRepetidaCliente(event.target.value);
    };

    const handleCadastroClienteClick = async () => {
        if (emailError || !emailCliente) {
            alert("Por favor, insira um email válido. Exemplo: exemplo@dominio.com");
            return;
        }
        
        if (isEquals(senhaCliente, senhaRepetidaCliente)) {
            setIsLoading(true);

            let data = getCustomerFormData();

            try {
                let response = await signUpCustomer(data);

                if (response == 200) {
                    resetCustomerFormFields();
                    alert('Cliente cadastrado com sucesso');
                } else {
                    alert('Falha ao cadastrar cliente');
                }
            } catch (error) {
                alert('Ocorreu um erro ao cadastrar o cliente');
            } finally {
                setIsLoading(false);
            }
        }
    };

    const getCustomerFormData = () => {
        return {
            email: emailCliente,
            name: nomeCliente,
            password: senhaCliente,
            role: "CUSTOMER",
            phone: telefoneCliente
        }
    }

    const resetCustomerFormFields = () => {
        setEmailCliente('')
        setNomeCliente('')
        setTelefoneCliente('')
        setSenhaCliente('')
        setSenhaRepetidaCliente('')
    }

    return (
        <div>
            <EmployeeNavbar />

            <div className="rounded-lg border border-gray-500 bg-white flex flex-col items-left mx-[14%] mt-[5%] p-[3%]">
                <h1 className="text-gray-600 text-4xl">Cadastro de Cliente</h1>
            </div>


            <div className="mx-[14%]">

                {isLoading
                    ?
                    <Loading />
                    :

                    <section className="rounded-lg border border-gray-500 bg-white flex flex-col items-left mt-[5%] p-[6%]">
                        <h1 className="text-gray-600 text-4xl">Cadastro de Cliente</h1>

                        <div className="flex">
                            <div className="flex flex-col w-[45%] mt-5 mb-2">
                                <label className="text-gray-600 text-xl">Nome Completo</label>
                                <input type="text" id="input-nome" placeholder="José Silva" value={nomeCliente} onChange={handleNomeClienteChange} className="pl-2 text-gray-600 h-[6vh] text-lg rounded-full border border-green-700 mb-4 outline-none" />
                                <label className="text-gray-600 text-xl">E-mail</label>
                                <input type="text" id="input-email" placeholder="Exemplo@dominio.com" value={emailCliente} onChange={handleEmailClienteChange} className="pl-2 text-gray-600 h-[6vh] text-lg rounded-full border border-green-700 mb-4 outline-none" />
                                {emailError && <p className="text-red-600 text-sm -mt-4 mb-2">{emailError}</p>}
                                <label className="text-gray-600 text-xl">Telefone</label>
                                <input type="text" id="telefone" placeholder="(81) 99999-9999" value={telefoneCliente} onChange={handleTelefoneClienteChange} className="pl-2 text-gray-600 h-[6vh] text-lg rounded-full border border-green-700 mb-4 outline-none" />
                            </div>

                            <div className="flex flex-col w-[45%] mt-5 mb-2 ml-7">

                                <div className="su-input relative">
                                    <label className="text-gray-600 text-xl">Senha de Acesso</label>
                                    <input type={(open === false ? 'password' : 'text')} id="input-senha" value={senhaCliente} onChange={handleSenhaClienteChange}
                                        className="pl-2 w-full text-gray-600 h-[6vh] text-lg rounded-full border border-green-700 mb-4 outline-none" />
                                    <div className='text-2xl absolute bottom-6 right-5'>
                                        {
                                            (open === false) ? <AiOutlineEye onClick={toggle} /> :
                                                <AiOutlineEyeInvisible onClick={toggle} />
                                        }
                                    </div>
                                </div>

                                <div className="su-input relative">
                                    <label className="text-gray-600 text-xl">Confirme a senha</label>
                                    <input type={(open === false ? 'password' : 'text')} id="input-senha-repetida" value={senhaRepetidaCliente} onChange={handleSenhaRepetidaClienteChange}
                                        className="pl-2 w-full text-gray-600 h-[6vh] text-lg rounded-full border border-green-700 mb-4 outline-none" />
                                    <div className='text-2xl absolute bottom-6 right-5'>
                                        {
                                            (open === false) ? <AiOutlineEye onClick={toggle} /> :
                                                <AiOutlineEyeInvisible onClick={toggle} />
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                }
                <button onClick={handleCadastroClienteClick} className="rounded-full w-[18%] border-none bg-green-700 shadow-lg cursor-pointer text-white text-lg mt-4 ml-[82%] p-3 hover:shadow-xl active:shadow-md"
                >Cadastrar cliente</button>
            </div>

            <footer className="text-white mt-8">
                <div className="bg-[#379E53] rodape flex justify-around text-center pt-24 px-4 h-64">
                    <div className="col1 flex flex-col items-center">
                        <h3 className="font-semibold mb-4 text-center">Institucional</h3>
                        <ul className="list-none flex flex-col text-left">
                            <li><a href="#" className="text-white">Sobre</a></li>
                            <li><a href="#" className="text-white">Contato</a></li>
                            <li><a href="#" className="text-white">Política de Privacidade</a></li>
                            <li><a href="#" className="text-white">Termos de Uso</a></li>
                        </ul>
                    </div>
                    <div className="col2 flex flex-col items-center">
                        <h3 className="font-semibold mb-4">Atendimento</h3>
                        <ul className="list-none text-center">
                            <li>Segunda à Sexta das 8 às 18h</li>
                            <li>(81) 99999-9999</li>
                        </ul>
                    </div>
                    <div className="col3 flex flex-col items-center">
                        <h3 className="font-semibold mb-4">Nossas Redes</h3>
                        <div className="flex justify-center space-x-4">
                            <a href="#" className="w-8 h-8 bg-contain bg-center bg-no-repeat">
                                <img src={twitterLogo} alt="Twitter Logo" className="w-full h-full" />
                            </a>
                            <a href="#" className="w-8 h-8 bg-contain bg-center bg-no-repeat">
                                <img src={instagramLogo} alt="Instagram Logo" className="w-full h-full" />
                            </a>
                            <a href="#" className="w-8 h-8 bg-contain bg-center bg-no-repeat">
                                <img src={facebookLogo} alt="Facebook Logo" className="w-full h-full" />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default CadastroCliente;