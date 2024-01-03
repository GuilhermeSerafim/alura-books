const botoes = document.querySelectorAll('.btn');
botoes.forEach((botao) => {
    botao.addEventListener('click', () => filtrarLivros(botao.value))
})

function filtrarLivros(categoria) {
    let livrosFiltrados = categoria == 'disponivel' ? livrosAPI.filter((livroAPI) => livroAPI.quantidade > 0) //Exibindo apenas livros disponiveis
        : livrosAPI.filter(livro => livro.categoria == categoria);
    exibirLivros(livrosFiltrados);
}