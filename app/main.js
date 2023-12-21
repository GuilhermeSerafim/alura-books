const livrosDOM = document.getElementById('livros');

// Responsável pela requisição da api
const endpointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
getBuscarLivrosDaAPI();

async function getBuscarLivrosDaAPI() {
    const res = await fetch(endpointAPI);
    livrosAPI = await res.json();
    console.table(livrosAPI);
    exibirLivros(livrosAPI)
}

function exibirLivros(livrosAPI) {
    livrosAPI.forEach(livroAPI => {
        livrosDOM.innerHTML += `
        <div class="livro">
            <img class="livro__imagens" src="${livroAPI.imagem}" alt="${livroAPI.alt}" />
            <h2 class="livro__titulo">
                ${livroAPI.titulo}
            </h2>
            <p class="livro__descricao">${livroAPI.autor}</p>
            <p class="livro__preco" id="preco">${livroAPI.preco}</p>
            <div class="tags">
                <span class="tag">${livroAPI.categoria}</span>
            </div>
        </div>
        `
    });
}