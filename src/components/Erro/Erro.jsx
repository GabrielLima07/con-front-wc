import React from "react";
import erroImg from "../../assets/Erro/404.png"
import { useNavigate } from "react-router-dom";
const Erro = () =>{
  const navigate = useNavigate()
 return (
      <section  className="error">
        
        <div className="bg-greenh flex items-center ">
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
          <div className="relative flex h-16 items-center ">

          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <h1
                  className="text-white text-2xl sm:text-3xl font-bold cursor-pointer"
                  onClick={() => navigate(-1)}
                >
                  WayClient</h1>
              </div>

            </div>
          </div>
          </div>
          
        </div>
        <div className="imagem404 flex justify-center items-center mt-40 flex-col ">
        <img src={erroImg} alt="erroImg"  
        className=" w-3/12"  />
      <h2 className="text-#379E53 text-xl font-bold mt-4">  PÁGINA NÃO ENCONTRADA</h2>

      <div className="WayClient text-center fixed bottom-0 w-full pb-4 ">
      <h1 className="text-#379E53 font-bold text-4xl">WayClient</h1>

      <p className="text-#5B5B5B font-bold ">
      <span className="text-#379E53 "> - </span> espera e <span className="text-#379E53 font-bold">+</span> 
      vendas,totalmente  <br />  automático.
      </p>
  
        </div>
        </div>
      </section>
    )
}
export default Erro