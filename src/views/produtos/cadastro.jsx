import React from "react";
import ProdutoService from "../../app/produtoService"

const estadoInicial = {
    nome : '',
    sku : '',
    descricao: '',
    preco : 0.00,
    fornecedor: '', 
    // variável que controla o alert
    sucesso: false,
    //variável de erros
    errors : []
}

class CadastroProduto extends React.Component{

    state = estadoInicial;

    constructor(){
        super();
        this.service = new ProdutoService();
    }

    //evento disparado quando digitar no campo
    onChange = (event) =>{
        const valor = event.target.value;
        const nomeCampo = event.target.name;
        this.setState({
            // o Java Script quando botamos entre colchete saberá que este campo é dianmico
            [nomeCampo] : valor
        })
    }

    onSubmit = (event) =>{
        
        const produto = {
            nome : this.state.nome,
            sku : this.state.sku,
            descricao: this.state.descricao,
            preco : this.state.preco,
            fornecedor: this.state.fornecedor
        }

       

        try{
            this.service.salvar(produto);
            console.log("C3");
            this.limpaCampos();
            this.setState({
                sucesso:true
            })
        }catch(erro){
           const errors =  erro.errors
           this.setState({
               errors: errors
           })
        }

        
        
        
    }

    limpaCampos = () =>{
        this.setState(estadoInicial);
        
    }
    
    render(){
        return(
            <div className="card">
                <div className="card-header">
                    Cadastro de Produto
                </div>
                <div className="card-body">
                    {
                        this.state.sucesso?
                        
                            <div class="alert alert-dismissible alert-success">
                                <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
                                <strong>Bem feito!</strong> Cadastro Realizado com sucesso.
                            </div> 
                        
                        : <></>

                    }

                    {
                        this.state.errors.length > 0 && 
                            this.state.errors.map(msg => {
                                return (
                            
                                    <div class="alert alert-dismissible alert-danger">
                                        <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
                                        <strong>Erro</strong> {msg}
                                    </div> 
                                );
                            })   
                    }

                   

                    
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Nome *</label>
                                <input 
                                    type = "text" 
                                    name="nome" 
                                    value={this.state.nome} 
                                    className="form-control"
                                    onChange = {this.onChange}>
                                </input>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="form-group">
                                <label>SKU *</label>
                                <input 
                                    type = "text" 
                                    name="sku" 
                                    value={this.state.sku} 
                                    className="form-control"
                                    onChange={this.onChange}>
                                </input>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label>Descrição</label>
                                <textarea 
                                    className="form-control" 
                                    name="descricao"
                                    onChange={this.onChange} 
                                    value={this.state.descricao}>
                                </textarea>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Preço *</label>
                                <input 
                                    type = "text" 
                                    name="preco" 
                                    value={this.state.preco} 
                                    onChange ={this.onChange}
                                    className="form-control">
                                </input>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Fornecedor *</label>
                                <input 
                                    type = "text" 
                                    name="fornecedor" 
                                    value={this.state.fornecedor} 
                                    onChange = {this.onChange}
                                    className="form-control">
                                </input>
                            </div>
                        </div>
                    </div>

                    <div className="modal-footer">
                        <div className="col-md-1">
                            <button  
                                className="btn btn-success"
                                onClick={this.onSubmit}
                                >Salvar
                                
                            </button>
                        </div>

                        <div className="col-md-1">
                            <button 
                                className="btn btn-primary"
                                onClick = {this.limpaCampos}
                                >
                                Limpar
                                
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CadastroProduto;