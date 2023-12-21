const btnFiltrarLivrosDeFront = document.getElementById('btnFiltrarLivrosFront');
btnFiltrarLivrosDeFront.addEventListener('click', filtrarLivrosDeFront);

function filtrarLivrosDeFront() {
    let livrosFiltrados = livrosAPI.filter(livro => livro.categoria == "front-end");
    console.table(livrosFiltrados)
}