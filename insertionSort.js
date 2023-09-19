const livros = require("./listaLivros");
const troca = require("./troca");

console.log('Entendendo o insertionSort');
function insertionSort(lista){
    for(let atual = 0; atual < lista.length; atual++){
        let analise = atual;
        while(analise > 0 && lista[analise].preco < lista[analise -1].preco){
            let itemAnalise = lista[analise];
            let itemAnterior = lista[analise -1];
            lista[analise] = itemAnterior;
            lista[analise -1] = itemAnalise;
            analise--;
        }
    }
    console.log(lista);
}
insertionSort(livros);
console.log('\n');
// Comentamos durante a aula sobre testes de mesa, ou desk checking, em inglês.
//Um teste de mesa é justamente o processo manual de verificar todas as linhas de um código
//e executá-lo passo a passo com ajuda de, por exemplo, papel e lápis para anotar qual os 
//valores das variáveis em cada passo de cada linha. É como compilar/interpretar um bloco de código
//usando o cérebro como compilador/interpretador.
//====================================================================================================

// Exercício proposto, usando uma função externa para a troca de posição dos itens
console.log('função externa para a troca de posição dos itens');
function insertionSort2(lista){
    for(let atual = 0; atual < lista.length; atual++){
        let analise = atual;
        while(analise > 0 && lista[analise].preco < lista[analise -1].preco){
            preco(lista, analise);
            analise--;
        }
    }
    console.log(lista);
}
insertionSort2(livros);
console.log('\n');