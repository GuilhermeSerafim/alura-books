const livrosDOM = document.getElementById('livros');

function exibirLivros(livrosAPI) {
    // Percorrendo livros na api e exibindo na pagina
    livrosAPI.forEach(livroAPI => {
        livrosDOM.innerHTML += `
        <div class="livro">
            <img class="livro__imagens" src="${livroAPI.imagem}" alt="${livroAPI.alt}" />
            <h2 class="livro__titulo">
                ${livroAPI.titulo}
            </h2>
            <p class="livro__descricao">${livroAPI.autor}</p>
            <p class="livro__preco" id="preco">${livroAPI.preco.toFixed(2)}</p>
            <div class="tags">
                <span class="tag">${livroAPI.categoria}</span>
            </div>
        </div>
        `
    });
}