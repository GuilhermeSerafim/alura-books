const livrosDOM = document.getElementById('livros');

function exibirLivros(livrosAPI) {
    // Toda vez que essa função for chamada, os livrosDOM vão ser limpados, e ira exibir livrosDOM de acordo com o botão selecionado
    livrosDOM.innerHTML = "";
    // Percorrendo livros na api e exibindo na pagina
    livrosAPI.forEach(livroAPI => {
        // Verificando disponibilidade
        let disponibilidade = livroAPI.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel';
        livrosDOM.innerHTML += `
        <div class="livro">
            <img class="${disponibilidade}" src="${livroAPI.imagem}" alt="${livroAPI.alt}" />
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
