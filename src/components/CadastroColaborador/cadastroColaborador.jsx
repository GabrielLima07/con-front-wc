import React, { useState } from "react";
import { isEquals } from './../../utils/isEquals';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import signUpEmployee from './../../services/auth/signUpEmployee';
import signUpCustomer from "../../services/auth/signUpCustomer";
import twitterLogo from "../../assets/Home/twitter.png";
import instagramLogo from "../../assets/Home/instagram.png";
import facebookLogo from "../../assets/Home/facebook.png";
import AdminNavbar from "../AllNavbars/AdminNavbar/AdminNavbar";
import Loading from "../Loading/Loading";

const cadastroColaborador = () => {
    const [isLoading, setIsLoading] = useState(false);

    //Cadastro dos funcionários
    const [nomeColaborador, setNomeColaborador] = useState('');
    const [emailColaborador, setEmailColaborador] = useState('');
    const [senhaColaborador, setSenhaColaborador] = useState('');
    const [senhaRepetidaColaborador, setSenhaRepetidaColaborador] = useState('');
    const [departamento, setDepartament] = useState('');

    //Cadastro dos clientes
    const [nomeCliente, setNomeCliente] = useState('');
    const [emailCliente, setEmailCliente] = useState('');
    const [senhaCliente, setSenhaCliente] = useState('');
    const [telefoneCliente, setTelefoneCliente] = useState('');
    const [senhaRepetidaCliente, setSenhaRepetidaCliente] = useState('');

    //Função para mostrar senha
    const [open, setOpen] = useState(false)

    const toggle = () => {
        setOpen(!open)
    }


    //Funções para funcionário
    const handleNomeColaboradorChange = (event) => {
        setNomeColaborador(event.target.value);
    };

    const handleEmailColaboradorChange = (event) => {
        setEmailColaborador(event.target.value);
    };

    const handleSenhaColaboradorChange = (event) => {
        setSenhaColaborador(event.target.value);
    };

    const handleSenhaRepetidaColaboradorChange = (event) => {
        setSenhaRepetidaColaborador(event.target.value);
    };

    const handleDepartamentoChange = (event) => {
        setDepartament(event.target.value);
    }

    //Funções para cliente
    const handleNomeClienteChange = (event) => {
        setNomeCliente(event.target.value);
    };

    const handleEmailClienteChange = (event) => {
        setEmailCliente(event.target.value);
    };

    const handleTelefoneClienteChange = (event) => {
        setTelefoneCliente(event.target.value);
    }

    const handleSenhaClienteChange = (event) => {
        setSenhaCliente(event.target.value);
    };

    const handleSenhaRepetidaClienteChange = (event) => {
        setSenhaRepetidaCliente(event.target.value);
    };

    //Função para o botão de cadastro do funcionário
    const handleCadastroColaboradorClick = async () => {
        if (isEquals(senhaColaborador, senhaRepetidaColaborador)) {
            setIsLoading(true);

            let data = getFormData();

            try {
                let response = await signUpEmployee(data);
                console.log(response)

                if (response == 200) {
                    resetEmployeeFormFields();
                    alert('Colaborador cadastrado com sucesso');
                } else {
                    alert('Falha ao cadastrar colaborador');
                }
            } catch (error) {
                alert('Ocorreu um erro ao cadastrar o colaborador');
            } finally {
                setIsLoading(false);
            }
        }
    };

    //Função para o botão de cadastro do cliente
    const handleCadastroClienteClick = async () => {
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

    const getFormData = () => {
        return {
            email: emailColaborador,
            name: nomeColaborador,
            password: senhaColaborador,
            role: "EMPLOYEE",
            departmentName: departamento
        }
    }

    const getCustomerFormData = () => {
        return {
            email: emailCliente,
            name: nomeCliente,
            password: senhaCliente,
            role: "CUSTOMER",
            phone: telefoneCliente
        }
    }

    const resetEmployeeFormFields = () => {
        setEmailColaborador('')
        setNomeColaborador('')
        setSenhaColaborador('')
        setSenhaRepetidaColaborador('')
        setDepartament('')
    }

    const resetCustomerFormFields = () => {
        setEmailCliente('')
        setNomeCliente('')
        setTelefoneCliente('')
        setSenhaCliente('')
        setSenhaRepetidaCliente('')
    }

    const [tipoCadastro, setTipoCadastro] = useState('Cadastro de Colaborador');

    const handleTipoCadastroChange = (event) => {
        setTipoCadastro(event.target.value);
    };

    const renderColaboradorForm = () => {
        return (
            <div>
                {isLoading
                    ?
                    <Loading />
                    :
                    <section className="rounded-lg border border-gray-500 bg-white flex flex-col items-left mt-[5%] p-[4%]">
                        <h1 className="text-gray-600 text-4xl">Cadastro de Colaborador</h1>

                        <div className="flex">
                            <div className="flex flex-col w-[45%] mt-5 mb-2">
                                <label className="text-gray-600 text-xl">Nome Completo</label>
                                <input type="text" id="input-nome" value={nomeColaborador} onChange={handleNomeColaboradorChange} className="pl-2 text-gray-600 h-[6vh] text-lg rounded-full border border-green-700 mb-4 outline-none" />

                                <label className="text-gray-600 text-xl">E-mail</label>
                                <input type="text" id="input-email" value={emailColaborador} onChange={handleEmailColaboradorChange} className="pl-2 text-gray-600 h-[6vh] text-lg rounded-full border border-green-700 mb-4 outline-none" />

                                <div className="su-input relative">
                                    <label className="text-gray-600 text-xl">Senha de Acesso</label>
                                    <input type={(open === false ? 'password' : 'text')} id="input-senha" value={senhaColaborador} onChange={handleSenhaColaboradorChange}
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
                                    <input type={(open === false ? 'password' : 'text')} id="input-senha-repetida" value={senhaRepetidaColaborador} onChange={handleSenhaRepetidaColaboradorChange}
                                        className="pl-2 w-full text-gray-600 h-[6vh] text-lg rounded-full border border-green-700 mb-4 outline-none" />
                                    <div className='text-2xl absolute bottom-6 right-5'>
                                        {
                                            (open === false) ? <AiOutlineEye onClick={toggle} /> :
                                                <AiOutlineEyeInvisible onClick={toggle} />
                                        }
                                    </div>
                                </div>

                            </div>

                            <div className="flex flex-col w-[45%] mt-5 mb-2 ml-7">
                                <label className="text-gray-600 text-xl">Departamento</label>
                                <input type="text" id="input-departamento" list="departamento" value={departamento} onChange={handleDepartamentoChange} className="pl-2 text-gray-600 h-[6vh] text-lg rounded-full border border-green-700 mb-4 outline-none" />
                                <datalist id="departamento">
                                    <option value="Financeiro"></option>
                                    <option value="Design"></option>
                                </datalist>
                            </div>
                        </div>

                    </section>
                }
                <button onClick={handleCadastroColaboradorClick} className="rounded-full w-[23%] border-none bg-green-700 shadow-lg cursor-pointer text-white text-lg mt-4 ml-[77%] hover:shadow-xl active:shadow-md"
                >Cadastrar colaborador</button>


            </div>
        );
    };

    const renderClienteForm = () => {
        return (
            <div>
                {isLoading
                    ?
                    <Loading />
                    :
                    <section className="rounded-lg border border-gray-500 bg-white flex flex-col items-left mt-[5%] p-[4%]">
                        <h1 className="text-gray-600 text-4xl">Cadastro de Cliente</h1>

                        <div className="flex">
                            <div className="flex flex-col w-[45%] mt-5 mb-2">
                                <label className="text-gray-600 text-xl">Nome Completo</label>
                                <input type="text" id="input-nome" value={nomeCliente} onChange={handleNomeClienteChange} className="pl-2 text-gray-600 h-[6vh] text-lg rounded-full border border-green-700 mb-4 outline-none" />
                                <label className="text-gray-600 text-xl">E-mail</label>
                                <input type="text" id="input-email" value={emailCliente} onChange={handleEmailClienteChange} className="pl-2 text-gray-600 h-[6vh] text-lg rounded-full border border-green-700 mb-4 outline-none" />
                                <label className="text-gray-600 text-xl">Telefone</label>
                                <input type="text" id="telefone" value={telefoneCliente} onChange={handleTelefoneClienteChange} className="pl-2 text-gray-600 h-[6vh] text-lg rounded-full border border-green-700 mb-4 outline-none" />
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
        );
    };

    return (
        <div>
            <AdminNavbar />

            <section className="rounded-lg border border-gray-500 bg-white flex flex-col items-left mx-[10%] mt-[5%] p-[3%]">
                <select
                    id="input-tipo-cadastro"
                    value={tipoCadastro}
                    onChange={handleTipoCadastroChange}
                    className="pl-2 text-gray-600 h-[6vh] text-4xl rounded-full border border-none mb-4 outline-none"
                >
                    <option value="Cadastro de Colaborador" className="text-xl">Cadastro de Colaborador</option>
                    <option value="Cadastro de Cliente" className="text-xl">Cadastro de Cliente</option>
                </select>
            </section>

            <section className="mx-[10%] mt-[2%]">
                {tipoCadastro === 'Cadastro de Colaborador' ? renderColaboradorForm() : renderClienteForm()}
            </section>

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

export default cadastroColaborador
