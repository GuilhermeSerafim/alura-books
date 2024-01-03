const btnOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco');
btnOrdenarPorPreco.addEventListener('click', () => ordernarLivrosPorPreco());

function ordernarLivrosPorPreco() {
    let livrosOrdenados = livrosAPI.sort((a, b) => {
        // Ordem crescente numerical
        return a.preco - b.preco;
    })
    exibirLivros(livrosOrdenados);
};