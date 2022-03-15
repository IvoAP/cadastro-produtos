const PRODUTOS = "_PRODUTOS";

export default  class ProdutoService{
    salvar = (produto) => {
        let produtos = localStorage.getItem(PRODUTOS);
        console.log("Passei aqui")
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