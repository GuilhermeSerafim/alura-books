const botoes = document.querySelectorAll('.btn');
botoes.forEach((botao) => {
    botao.addEventListener('click', () => filtrarLivros(botao.value))
})

function filtrarLivros(categoria) {
    let livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade()
        : livrosAPI.filter(livro => livro.categoria == categoria);
    exibirLivros(livrosFiltrados);
    if (categoria == 'disponivel') {
        exibirTotalDosLivrosDisponiveis();
    }
}

function filtrarPorDisponibilidade() {
    return livrosAPI.filter((livroAPI) => livroAPI.quantidade > 0);
}

function exibirTotalDosLivrosDisponiveis() {
    valorTotalLivrosDisponiveis.innerHTML = `
     <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">299,00</span></p>
    </div>`
}