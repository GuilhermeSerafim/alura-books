function aplicarDesconto () {
    const desconto = 0.3;
    livrosComDesconto = livrosAPI.map(livroAPI => { // Map retorna um nv array com as modificações
        // Spread Operator - Usado para expandir arrays, objetos ou strings em locais onde múltiplos elementos ou argumentos são esperados.
        return {...livroAPI, preco: livroAPI.preco - (livroAPI.preco * desconto)}; 
    })
}