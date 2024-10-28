import { useNavigate } from "react-router-dom"
import CustomerNavbar from "../AllNavbars/CustomerNavbar/CustomerNavbar"
import CentralFooter from "../Cliente/CentralFooter"
import { useState } from "react";
import Loading from "../Loading/Loading";

const ClienteHome = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    if (isLoading) {
        return <Loading />
    }

    return (
        <div>
            <CustomerNavbar />

            <h1 className="font-lexend ml-32 mt-16 text-4xl text-slate-700">Bem-vindo!</h1>

            <p className="font-lexend font-light text-lg ml-32 mt-12"> Nossa plataforma foi projetada para
                tornar mais fácil a sua experiência com o nosso atendimento. <br />Aqui está um breve
                guia sobre como navegar e usar os nossos serviços: </p>

            <ol>
                <li className="font-lexend list-decimal text-slate-700 text-2xl mt-8 ml-36"> Abra seus tickets em apenas alguns passos:
                    <ol>
                        <li className="font-lexend list-disc text-slate-700 text-lg font-light mt-4">No menu de navegação selecione o botão 
                            <a className="ml-0.5 cursor-pointer text-green-500 hover:text-green-400" onClick={() => navigate("/Create-ticket")}>
                                “Abrir ticket”
                            </a>
                        </li>
                        <li className="font-lexend list-disc text-slate-700 text-lg font-light">Você será direcionado à tela de criação de ticket, onde você poderá detalhar sua solicitação de forma rápida e simples</li>
                    </ol>
                </li>

                <li className="font-lexend list-decimal text-slate-700 text-2xl mt-12 ml-36">Acompanhe o progresso do seu ticket:
                    <ol>
                        <li className="font-lexend list-disc text-slate-700 text-lg font-light mt-4">Após fazer o login, você pode visualizar todos os seus tickets em andamento</li>
                        <li className="font-lexend list-disc text-slate-700 text-lg font-light">Fique atualizado sobre o status do seu pedido, desde a confirmação até a entrega</li>
                    </ol>
                </li>

                <li className="font-lexend list-decimal text-slate-700 text-2xl mt-12 ml-36">Assista ao nosso vídeo tutorial:
                    <ol>
                        <li className="font-lexend list-disc text-slate-700 text-lg font-light mt-4">Abaixo, você encontrará um vídeo explicativo detalhando como usar todos os recursos da nossa plataforma</li>
                        <video width="750" height="500" controls className="mt-8" >
                            <source src="..Videos/video1.mp4" type="video/mp4" />
                        </video>
                    </ol>
                </li>

                <li className="font-lexend list-decimal text-slate-700 text-2xl mt-12 ml-36">Precisa de ajuda? Entre em contato conosco
                    <ol>
                        <li className="font-lexend list-disc text-slate-700 text-lg font-light mt-4 mb-32">Se tiver alguma dúvida ou precisar de assistência,
                            nossa equipe está sempre disponível para ajudar.
                            Para entrar em <br />contato conosco <a href="#" className="text-green-500 hover:text-green-400">clique aqui</a>.</li>
                    </ol>
                </li>

            </ol>

            <CentralFooter />

        </div>

    )
}

export default ClienteHome;