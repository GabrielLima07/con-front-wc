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
                    <button className="flex w-[12rem] sm:w-[14rem] bg-green-600 justify-center items-center rounded-lg shadow-xl  px-5 py-4 text-white hover:border-greenh focus:outline-none focus:ring-greene focus:ring-2 hover:ring-offset-greene hover:bg-white hover:text-#379E53">
                        <span className="text-base sm:text-xl">Atualizar Dados</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 m-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                        </svg>
                    </button>
                </div>
                <div className="space-y-4 sm:space-y-8">
                    <button className="flex w-[12rem] sm:w-[14rem] bg-green-600  justify-center items-center rounded-lg shadow-xl px-6 py-4 text-white hover:border-greenh focus:outline-none focus:ring-greene focus:ring-2 hover:ring-offset-greene hover:bg-white hover:text-#379E53">
                        <span className="text-base sm:text-xl "><Link to="/department-tickets" className="link text-inherit  hover:text-#379E53 ">Tickets</Link></span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 m-1 mt-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z" />
                        </svg>

                    </button>
                    <button className="flex w-[12rem] sm:w-[14rem] bg-green-600  justify-center items-center rounded-lg shadow-xl px-4 py-4 text-white hover:border-greenh focus:outline-none focus:ring-greene focus:ring-2 hover:ring-offset-greene hover:bg-white hover:text-#379E53">
                        <span className="text-base sm:text-xl">Histórico</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 m-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                        </svg>
                    </button>
                </div>
           </div>
        </div>
    )
}

export default MainFuncionario;