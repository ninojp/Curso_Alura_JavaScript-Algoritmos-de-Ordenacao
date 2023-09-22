const listaLivros = require("./array");
const trocaLugar = require("./encontrarMenores");

function quickSort(array, esquerda, direita){
    if(array.length > 1){
        let indiceAtual = particiona(array, esquerda, direita);
        if(esquerda < indiceAtual -1){
            quickSort(array, esquerda, indiceAtual -1);
        }
        if(indiceAtual < direita){
            quickSort(array, indiceAtual, direita);
        }
    }
    return array;
}
function particiona(array, esquerda, direita){
    console.log('Array', array);
    console.log('Esquerda e Direita', esquerda, direita);
    let objPivo = array[Math.floor((esquerda + direita)/2)]
    let atualEsquerda = esquerda;
    let atualDireita = direita;
    while(atualEsquerda <= atualDireita){
        while(array[atualEsquerda].preco < objPivo.preco){
            atualEsquerda++;
        }
        while(array[atualDireita].preco > objPivo.preco){
            atualDireita--;
        }
        if(atualEsquerda <= atualDireita){
            trocaLugar(array, atualEsquerda, atualDireita);
            atualEsquerda++;
            atualDireita--;
        }
    }
    return atualEsquerda;
}
console.log(quickSort(listaLivros, 0, listaLivros.length -1));

// Nesta aula, aprendemos:
// Trabalhamos com o conceito de pivô, entendemos como selecionar um elemento pivô no código e como posicionar este elemento em uma lista, comparando valores e contando elementos menores;
// Após posicionar um elemento pivô em um array, desenvolvemos um código em JavaScript que percorre uma lista e separa todos os elementos entre maiores e menores que o pivô, através da função encontraMenores();
// A partir do conceito de elemento pivô, entendemos o funcionamento do algoritmo de ordenação quick sort, fazendo mais simulações e testes;
// Após entendermos o algoritmo, implementamos o código utilizando JavaScript e reaproveitando funções e conceitos das aulas anteriores, como a função trocaLugar() e a recursão.