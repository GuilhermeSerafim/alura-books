let livrosAPI = []; // Declaramos em um escopo global para usarmos em outros arquivos
// Responsável pela requisição da api
const endpointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
getBuscarLivrosDaAPI();

async function getBuscarLivrosDaAPI() {
    const res = await fetch(endpointAPI);
    livrosAPI = await res.json();
    let livrosComDescontoAplicado = aplicarDesconto(livrosAPI);
    exibirLivros(livrosComDescontoAplicado);
}