import React from "react";
//HashRouter tem que englobar todas as rotas
//Routes é semelhante ao switch , temos que definir os cases das rotas
//Route
import {Route,Routes} from 'react-router-dom';
import CadastroProduto from "./views/produtos/cadastro";
import Home from "./views/home";
import { ConsultaProdutos } from "./views/produtos/consulta";

const Rotas = () => {
    return(
        //HashRouter tem que englobar todas as rotas
            <Routes>
                <Route path="/cadastro-produtos" element = {<CadastroProduto/>}/>
                <Route path = "/consulta-produtos" element = {<ConsultaProdutos/>}/>
                <Route path= "/" element = {<Home/>} />
                
            </Routes>
       
    )
}

export default Rotas