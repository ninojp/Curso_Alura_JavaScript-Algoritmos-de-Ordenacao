const listaLivros = require('./arrayOrdenado');

function busca(array, deOnde, ateOnde, valorBuscado){
    console.log('De Onde, Até Onde', deOnde, ateOnde);
    const indiceMeio = Math.floor((deOnde + ateOnde)/2);
    const objAtual = array[indiceMeio];
    // if(deOnde > ateOnde){
    //     return -1;
    // }
    if(valorBuscado === objAtual.preco){
        return indiceMeio;
    }
    if(valorBuscado < objAtual.preco){
        return busca(array, deOnde, indiceMeio -1, valorBuscado);
    }
    if(valorBuscado > objAtual.preco){
        return busca(array, indiceMeio +1, ateOnde, valorBuscado);
    }
}
console.log(busca(listaLivros, 0, listaLivros.length -1, 40));
// console.log(busca(listaLivros, 0, listaLivros.length -1, 60)); //RangeError: Maximum call stack size exceeded.
// console.log(busca(listaLivros, 0, listaLivros.length - 1, 1)); //TypeError: Cannot read property 'preco' of undefined
// console.log(busca(listaLivros, 0, listaLivros.length - 1, 36)); //RangeError: Maximum call stack size exceeded

// Nesta aula, aprendemos:

// Aplicamos novamente o paradigma “dividir para conquistar” para desenvolver o algoritmo de busca chamado busca binária;
// Utilizamos recursão para manipular um array ordenado e buscar um elemento, seguindo o fluxo da busca binária que foi visto nas simulações e testes;
// Desenvolvemos código em JavaScript para implementar o algoritmo de busca binária;
// Continuamos a prática de funções recursivas, vendo o funcionamento do “caso base”, que pode ser considerada como a condição de parada de uma função recursiva.