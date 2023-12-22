const botoes = document.querySelectorAll('.btn');
botoes.forEach((botao) => {
    botao.addEventListener('click', () => filtrarLivros(botao.value))
})

function filtrarLivros(categoria) {
    let livrosFiltrados = livrosAPI.filter(livro => livro.categoria == categoria);
    exibirLivros(livrosFiltrados);
}