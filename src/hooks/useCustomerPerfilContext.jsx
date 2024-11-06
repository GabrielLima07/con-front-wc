import { useContext } from "react"
import { CustomerPerfilContext } from "../components/context/CustomerPerfilContext";

 const useCostumerPerfilContext = () =>{
    const context = useContext(CustomerPerfilContext);
    if(context === undefined){
        throw new Error("Não esta dentro do contexto")
    }

    return context;
}

export default useCostumerPerfilContext;