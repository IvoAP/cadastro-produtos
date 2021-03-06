const PRODUTOS = "_PRODUTOS";

export function ErroValidacao(errors){
    this.errors = errors;
}

export default  class ProdutoService{

    validar = (produto) =>{
        const errors =  [];

        if(!produto.nome){
            errors.push("O campo nome é obrigatório");
        }

        if(!produto.sku){
            errors.push("O campo SKU é obrigatório");
        }

        if(produto.preco <= 0){
            errors.push("O campo preco deve ter um valor maior que 0");
        }

        if(!produto.fornecedor){
            errors.push("O campo fornecedor é obrigatório")
        }
        
        if(errors.length > 0){
            throw new ErroValidacao(errors);
        }

    }

    obterProdutos = () =>{
        const produtos = localStorage.getItem(PRODUTOS);
        return JSON.parse(produtos);
    }

    salvar = (produto) => {
        this.validar(produto);

        let produtos = localStorage.getItem(PRODUTOS);
        // console.log("Passei aqui")
        if(!produtos){
            produtos = []
        }else{
            // vai transformar o array de strings em um array d eobjetos JSON
            produtos = JSON.parse(produtos);
        }

        produtos.push(produto);
        localStorage.setItem(PRODUTOS, JSON.stringify(produtos))
    }
}