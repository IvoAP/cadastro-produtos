import React from "react";
//HashRouter tem que englobar todas as rotas
//Routes é semelhante ao switch , temos que definir os cases das rotas
//Route
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import CadastroProduto from "./views/produtos/cadastro";
import Home from "./views/home";

const Rotas = () => {
    return(
        //HashRouter tem que englobar todas as rotas
        <BrowserRouter>
            <Routes>
                <Route path="/cadastro-produtos" element = {<CadastroProduto/>}/>
                <Route path= "/" element = {<Home/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas