// Responsável pela requisição da api
const endpointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
getBuscarLivrosDaAPI();

async function getBuscarLivrosDaAPI() {
    const res = await fetch(endpointAPI);
    livrosAPI = await res.json();
    console.table(livrosAPI);
    exibirLivros(livrosAPI)
}
