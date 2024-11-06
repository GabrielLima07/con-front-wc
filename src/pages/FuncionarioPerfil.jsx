import React from "react";
import EmployeeNavbar from "../components/AllNavbars/EmployeeNavbar/EmployeeNavbar";
import FooterFuncionario from "../components/FuncionarioHome/FooterFuncionario";
import PerfilFuncionario from "../components/ProfileEmployee/PerfilFuncionario";

const FuncionarioPerfil = () => {
    return (
        <div>
            <EmployeeNavbar />
            <PerfilFuncionario />
        </div>
    );
};

export default FuncionarioPerfil;