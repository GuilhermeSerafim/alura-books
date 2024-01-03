const botoes = document.querySelectorAll('.btn');
botoes.forEach((botao) => {
    botao.addEventListener('click', () => filtrarLivros(botao.value))
})

function filtrarLivros(categoria) {
    let livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade()
        : livrosAPI.filter(livro => livro.categoria == categoria);
    exibirLivros(livrosFiltrados);
    if (categoria == 'disponivel') {
        const valorTotal = calcularTotalDosLivrosDisponiveis(livrosFiltrados);
        exibirTotalDosLivrosDisponiveis(valorTotal);
    }
}

function filtrarPorDisponibilidade() {
    return livrosAPI.filter((livroAPI) => livroAPI.quantidade > 0);
}

function exibirTotalDosLivrosDisponiveis(valorTotal) {
    valorTotalLivrosDisponiveis.innerHTML = `
     <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>`
}