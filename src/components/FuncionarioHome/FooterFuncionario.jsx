import coment from "../../assets/Home/coment.png";
import pen from "../../assets/Home/pen.png";
import light from "../../assets/Home/light.png";

const FooterFuncionario = ()=>{
    return(
       <div className='bg-greenf p-0 '>
            <h3 className='text-white p-4 text-2xl'>Por que o WayClient?</h3>
            <div className=" mx-2.5 my-2.5  space-x-4 flex flex-col shrink-0 sm:flex-row">
                <div className="flex flex-col p-4 bg-white w-50 justify-center items-center rounded-xl mb-2">
                    <img src={coment}  className="max-w-10"/>
                    <h2 className='text-greenh font-black text-2xl text-center'>Melhorar o seu atendimento</h2>
                    <p className="text-center">Maximize a eficiência operacional, melhore a satisfação do seu cliente e impulsione o crescimento empresarial.</p>
                </div>
                <div className="flex flex-col p-4 bg-white w-50 justify-center items-center rounded-xl mb-2">
                    <img  src={pen} className="max-w-10"/>
                    <h2 className='text-greenh font-black text-2xl'>Personalização</h2>
                    <p className="text-center">Ofereça uma experiência personalizada ao cliente, aumentando sua satisfação e fidelidade.</p>
                </div>
                <div className="flex flex-col p-4 bg-white w-50 justify-center items-center rounded-xl mb-2">
                    <img  src={light} className="max-w-10"/>
                    <h2 className='text-greenh font-black text-2xl'>Eficiência</h2>
                    <p className="text-center">Automatiza processos, reduzindo tempo e esforço na gestão de tickets e solicitações.</p>
                </div>
            </div>
       </div>
    )
}
export default FooterFuncionario;