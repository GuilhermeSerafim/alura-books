const botoes = document.querySelectorAll('.btn');
botoes.forEach((botao) => {
    botao.addEventListener('click', () => filtrarLivros(botao.value))
})

function filtrarLivros(categoria) {
    let livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade()
        : livrosAPI.filter(livroAPI => livroAPI.categoria == categoria);
    exibirLivros(livrosFiltrados);
    if (categoria == 'disponivel') {
        const calculoDosLivrosDisponiveis = calcularTotalDosLivrosDisponiveis(livrosFiltrados);
        exibirTotalDosLivrosDisponiveis(calculoDosLivrosDisponiveis);
    }
}

function filtrarPorDisponibilidade() {
    return livrosAPI.filter((livroAPI) => livroAPI.quantidade > 0);
}

function exibirTotalDosLivrosDiDisponiveis(calculoDosLivrosFiltrados) {
    valorTotalLivrosDisponiveisDOM.innerHTML = `
     <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${calculoDosLivrosDisponiveis}</span></p>
    </div>`
}