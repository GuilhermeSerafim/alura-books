function calcularTotalDosLivrosDisponiveis(livrosDisponiveis) {
    // Acumulador + Valor Atual, Valor Inicial
    return livrosDisponiveis.reduce((acc, livroDisponivel) => acc + livroDisponivel.preco, 0).toFixed(2); 
}