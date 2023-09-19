// Neste exercício vamos criar uma função com o codigo criado na aula do selectionSort.js,
//para troca de posição dos objetos da nossa lista
function troca(lista, analise){
    let itemAnalise = lista[analise];
    let itemAnterior = lista[analise -1];
    lista[analise] = itemAnterior;
    lista[analise -1] = itemAnalise;
}
module.exports = troca;
// Veja que a função troca() está fazendo alterações direto na lista que está sendo
//passada por parâmetro; assim, essa função não precisa retornar nenhum valor.
//========================================================================================
