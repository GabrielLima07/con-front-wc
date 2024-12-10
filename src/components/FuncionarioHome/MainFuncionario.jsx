import { Link } from "react-router-dom";

const MainFuncionario = () =>{
    return(
        <div className="flex flex-col items-center bg-white  ">
           <div className="flex items-center m-4 mb-10">
                <h1 className="sm:text-3xl text-gray100 font-black ">Bem Vindo ao</h1><h1 className="ml-1.5 text-greenh sm:text-3xl">WayClient</h1>
           </div>
           <div className="flex flex-col items-center justify-center space-x-0 sm:flex-row sm:space-x-20 space-y-4 sm:space-y-0">
                <div className="space-y-8">
                    <Link to="/CadastroCliente" className="link text-inherit hover:text-#379E53">
                        <button className="flex whitespace-nowrap w-[12rem] bg-green-600 sm:w-[14rem] justify-center items-center rounded-lg shadow-xl px-4 py-4 text-white hover:border-greenh focus:outline-none focus:ring-greene focus:ring-2 hover:ring-offset-greene hover:bg-white hover:text-#379E53">
                            <span className="text-base sm:text-xl">Cadastrar Cliente</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 m-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        </button>
                    </Link>
              
                </div>
                <div className="space-y-4 sm:space-y-8">
                    <button className="flex w-[12rem] sm:w-[14rem] bg-green-600  justify-center items-center rounded-lg shadow-xl px-6 py-4 text-white hover:border-greenh focus:outline-none focus:ring-greene focus:ring-2 hover:ring-offset-greene hover:bg-white hover:text-#379E53">
                        <span className="text-base sm:text-xl "><Link to="/department-tickets" className="link text-inherit  hover:text-#379E53 ">Tickets</Link></span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 m-1 mt-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z" />
                        </svg>

                    </button>
                 
                </div>
           </div>
        </div>
    )
}

export default MainFuncionario;