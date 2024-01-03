function calcularTotalDosLivrosDisponiveis(livros) {
    // Acumulador + Valor Atual + Valor Inicial
    return livros.reduce((acc, livro) => acc + livro.preco, 0).toFixed(2); 
}