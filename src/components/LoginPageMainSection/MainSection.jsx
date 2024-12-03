import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import ReCAPTCHA from 'react-google-recaptcha';
import login from '../../services/auth/login';
import Loading from '../Loading/Loading';

const MainSection = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [captchaValue, setCaptchaValue] = useState(null);
  const RECAPTCHA_KEY = import.meta.env.VITE_API_RECAPTCHA_KEY;

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
    console.log("Captcha value:", value);
  };

  const toggle = () => {
    setOpen(!open);
  };

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

  const handleSenhaChange = (event) => {
    setSenha(event.target.value);
  };

  const handleLoginClick = async () => {
    if (emailError || !email) {
      alert("Por favor, insira um email válido. Exemplo: exemplo@dominio.com");
      return;
    }
  
    if (!captchaValue) {
      alert("Por favor, complete o reCAPTCHA.");
      return;
    }
  
    setIsLoading(true);
  
    let data = {
      email: email,
      password: senha,
      recaptchaToken: captchaValue
    };
  
    try {
      let response = await login(data);
      if (response && response.token && response.userType && response.userId) {
        sessionStorage.setItem("token", response.token);
        sessionStorage.setItem("userType", response.userType);
        sessionStorage.setItem("userId", response.userId);
        sessionStorage.setItem("isLogged", true);
  
        console.log("Login bem-sucedido!");
        redirectAfterLogin(response.userType);
      } else {
        console.error("A resposta da API não contém os campos esperados.");
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    } finally {
      setIsLoading(false);
    }
  };
  

  const handleSignupClick = () => {
    navigate("/signup");
  };

  const redirectAfterLogin = (userType) => {
    if (userType === "ADMIN") {
      navigate("/adminHome");
    } else if (userType === "EMPLOYEE") {
      navigate("/funcionario");
    } else {
      navigate("/clienteHome");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 pt-8 pb-8 mt-12">
      {
        isLoading
          ? <Loading />
          :
          <section className="bg-white rounded-lg shadow-lg p-8 w-2/4 max-w-2xl flex flex-col items-center">
            <h1 className="text-2xl font-bold text-gray-700 mb-6">Bem vindo de volta!</h1>
            <div className="w-full max-w-sm mb-4">
              <label className="block text-gray-700 text-lg mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                className={`w-full px-3 py-3 text-lg text-gray-600 border ${emailError ? 'border-red-600' : 'border-green-600'} rounded-lg focus:outline-none focus:ring ${emailError ? 'focus:ring-red-300' : 'focus:ring-green-300'}`}
              />
              {emailError && <p className="text-red-600 text-sm mt-2">{emailError}</p>}
            </div>
            <div className="w-full max-w-sm mb-4 relative">
              <label className="block text-gray-700 text-lg mb-2">Senha</label>
              <input
                type={open ? 'text' : 'password'}
                value={senha}
                onChange={handleSenhaChange}
                className="w-full px-3 py-3 text-lg text-gray-600 border border-green-600 rounded-lg focus:outline-none focus:ring focus:ring-green-300"
              />
              <div className="text-2xl absolute bottom-3.5 right-5">
                {open ? <AiOutlineEyeInvisible onClick={toggle} /> : <AiOutlineEye onClick={toggle} />}
              </div>
            </div>

            <ReCAPTCHA
              sitekey={RECAPTCHA_KEY}
              onChange={handleCaptchaChange}
              className="mt-4 mb-8 "
            />

            <div className="w-full max-w-sm mb-4 flex justify-center">
              <button
                onClick={handleLoginClick}
                className="bg-green-600 text-white py-3 px-6 rounded-full w-full text-lg hover:bg-green-700 transition-all"
              >
                Acessar
              </button>
            </div>
            <p className="text-gray-700 text-lg">Não possui uma conta?
              <a onClick={handleSignupClick} className="text-green-600 cursor-pointer ml-2 hover:underline">Cadastre-se</a>
            </p>
          </section>
      }
    </div>
  );
};

export default MainSection;
