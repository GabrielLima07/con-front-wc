import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { isEquals } from './../../utils/isEquals';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import signUpCustomer from '../../services/auth/signUpCustomer';
import Loading from '../Loading/Loading';

const MainSection = () => {
  const navigate = useNavigate();
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmeSenha, setConfirmeSenha] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false)
  const [emailError, setEmailError] = useState('');

  const handleEmailChange = (event) => {
    const inputEmail = event.target.value;
    setEmail(inputEmail);
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(inputEmail)) {
      setEmailError("Por favor, insira um email válido.\nExemplo: exemplo@dominio.com");

    } else {
      setEmailError('');
    }
  };

  // Função para formatar o telefone no formato (DD) 99999-9999
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

  const handleTelefoneChange = (e) => {
    const { value } = e.target;
    setTelefone(formatarTelefone(value));
  };

  const handleNomeCompletoChange = (e) => {
    const value = e.target.value;

    const regex = /^[A-Za-zÀ-ÿ\s]*$/;

    if (regex.test(value)) {
      setNomeCompleto(value);
    }
  };

  const toggle = () => {
    setOpen(!open)
  }

  const handleSenhaChange = (event) => {
    setSenha(event.target.value);
  };

  const handleConfirmeSenhaChange = (event) => {
    setConfirmeSenha(event.target.value);
  };

  const handleCadastrarClick = async () => {
    if (emailError || !email) {
      alert("Por favor, insira um email válido. Exemplo: exemplo@dominio.com");
      return;
    }

    if (isEquals(senha, confirmeSenha)) {
      setIsLoading(true);

      try {
        let data = getFormData();
        let response = await signUpCustomer(data);
        sessionStorage.setItem("debug-response", response);

        if (response === '200') {
          setIsModalOpen(true);
        } else {
          alert("Falha ao cadastrar");
        }
      } catch (error) {
        alert('Ocorreu um erro no cadastro');
      } finally {
        setIsLoading(false)
      }

    } else {
      alert("As senhas devem ser idênticas");
    }
  };

  const getFormData = () => {
    return {
      name: nomeCompleto,
      phone: telefone,
      email: email,
      role: "CUSTOMER",
      password: senha
    };
  };

  const handleGoToLogin = () => {
    navigate('/login');
  };

  return (
    <div className="flex flex-wrap justify-center items-center m-4 mt-20 md:mt-4">
      <section id="su-col-one" className="flex flex-col justify-center items-center gap-y-8 w-full md:w-1/2 mb-8">
        <div>
          <h1 className="text-4xl text-green-500 font-bold" id="su-col-one-main-title">
            WayClient
          </h1>
        </div>
        <div>
          <h2 className="text-2xl text-green-500 text-center" id="su-col-one-sec-title">
            Com a gente o seu caminho fica mais seguro.
          </h2>
        </div>
      </section>

      {
        isLoading
          ?
          <Loading />
          :
          <section id="su-col-two" className="flex flex-col items-center justify-center w-full md:w-1/2 bg-white rounded-lg shadow-[0_10px_60px_-20px_rgba(0,0,0,0.3)] p-4 max-w-xl">
            <div className="text-2xl text-center mb-4 mt-2" id="su-col-two-main-title">
              Cadastre-se
            </div>
            <div className="su-input w-full max-w-sm mb-3">
              <label className="ls-text text-sm font-semibold">Nome completo:</label>
              <input
                className="su-form-field w-full py-2 px-3 text-lg border border-[#379E53] rounded-lg"
                type="text"
                value={nomeCompleto}
                onChange={handleNomeCompletoChange}
                placeholder="José Silva"
              />
            </div>
            <div className="su-input w-full max-w-sm mb-3">
              <label className="ls-text text-sm font-semibold">Telefone:</label>
              <input
                className="su-form-field w-full py-2 px-3 text-lg border border-[#379E53] rounded-lg"
                type="tel"
                value={telefone}
                onChange={handleTelefoneChange}
                maxLength="15"
                placeholder="(81) 99999-9999"
              />
            </div>
            <div className="su-input w-full max-w-sm mb-3">
              <label className="ls-text text-sm font-semibold">
                Email:
              </label>
              <input
                className={`w-full px-3 py-3 text-lg text-gray-600 border ${emailError ? 'border-red-600' : 'border-green-600'} rounded-lg focus:outline-none focus:ring ${emailError ? 'focus:ring-red-300' : 'focus:ring-green-300'}`}
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="exemplo@dominio.com"
              />
              {emailError && <p className="text-red-600 text-sm mt-2">{emailError}</p>}
            </div>
            <div className="su-input w-full max-w-sm mb-3 relative">
              <label className="ls-text text-sm font-semibold">
                Senha:
              </label>
              <input
                className="su-form-field w-full py-2 px-3 text-lg border border-[#379E53] rounded-lg"
                type={(open === false ? 'password' : 'text')}
                value={senha}
                onChange={handleSenhaChange}
              />
              <div className='text-2xl absolute bottom-3 right-5'>
                {
                  (open === false) ? <AiOutlineEye onClick={toggle} /> :
                    <AiOutlineEyeInvisible onClick={toggle} />
                }
              </div>
            </div>
            <div className="su-input w-full max-w-sm mb-3 relative">
              <label className="ls-text text-sm font-semibold">
                Confirme sua senha:
              </label>
              <input
                className="su-form-field w-full py-2 px-3 text-lg border border-[#379E53] rounded-lg"
                type={(open === false ? 'password' : 'text')}
                value={confirmeSenha}
                onChange={handleConfirmeSenhaChange}
              />
              <div className='text-2xl absolute bottom-3 right-5'>
                {
                  (open === false) ? <AiOutlineEye onClick={toggle} /> :
                    <AiOutlineEyeInvisible onClick={toggle} />
                }
              </div>
            </div>
            {/* <div className="mt-3 flex items-center">
              <input type="checkbox" className="border rounded-lg mr-2 border-[#379E53]" />
              <span className='text-xs'>
                Eu aceito os <a href="#" className="text-custom-color font-semibold text-[#379E53]">Termos de uso</a> & <a href="#" className="text-custom-color font-semibold text-[#379E53]">Privacy Policy</a>
              </span>
            </div> */}
            <div className="mt-4">
              <button
                className="bg-green-500 py-2 px-6 text-center text-white rounded-lg hover:bg-green-600 transition duration-300 block mx-auto text-lg"
                onClick={handleCadastrarClick}
              >
                Cadastrar
              </button>
            </div>
          </section>
      }
      {isModalOpen && (
        <div className="modal-overlay fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="modal bg-white p-8 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Cadastro realizado com sucesso!</h2>
            <p className="mb-4">Agora você pode fazer o login.</p>
            <button
              className="bg-[#379E53] text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300"
              onClick={handleGoToLogin}
            >
              Ir para Login
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainSection;
