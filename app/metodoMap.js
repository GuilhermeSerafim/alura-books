function aplicarDesconto (livrosAPI) {
    const desconto = 0.3;
    const livrosComDesconto = livrosAPI.map(livroAPI => { // Metodo map retorna um novo array com as modificações
        // Spread Operator - Usado para expandir arrays, objetos ou strings em locais onde múltiplos elementos ou argumentos são esperados.
        return {...livroAPI, preco: livroAPI.preco - (livroAPI.preco * desconto)}; 
    })
    return livrosComDesconto;
};