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
