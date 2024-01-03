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

var strings = ["banana", "maçã", "abacaxi", "uva"];

// Retornar 0, deixa a e b inalterados em relação um ao outro
console.log("Ordenação iguais")
strings.sort(() => {
    return 0;
});
console.log(strings);

console.log("Alfabética (padrão)")
strings.sort();
strings.sort(() => {
    return 1;
});
console.log(strings);

console.log("Ordenação contrária")
strings.sort(() => {
    return -1;
});
console.log(strings);

// strings.sort((a, b) => {
//     if (a é menor que b em algum critério de ordenação) {
//         return -1;
//       }
//       if (a é maior que b em algum critério de ordenação) {
//         return 1;
//       }
//       if(a deve ser igual a b) {
//           return 0;
//       }
// })