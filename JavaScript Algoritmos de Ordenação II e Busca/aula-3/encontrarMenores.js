const listaLivros = require("./array");

function encontraMenores(pivo, array){
    let menores = 0;
    for(let atual = 0; atual < array.length; atual++){
        let produtoAtual = array[atual]
        if (produtoAtual.preco < pivo.preco){
            menores++
        }
    }
    trocaLugar(array, array.indexOf(pivo), menores);
    return array;
}
function trocaLugar(array, deOnde, paraOnde){
    const elem1 = array[deOnde]
    const elem2 = array[paraOnde]
    array[paraOnde] = elem1
    array[deOnde] = elem2
}
function divideNoPivo(array){
    let objPivo = array[Math.floor(array.length/2)];
    console.log(objPivo);
    encontraMenores(objPivo, array);
    let valoresMenores = 0;
    for(let analisando = 0; analisando < array.length; analisando++){
        let atual = array[analisando];
        if(atual.preco <= objPivo.preco && atual !== objPivo){
            trocaLugar(array, analisando, valoresMenores);
            valoresMenores++;
        }
    }
    return array;
}
// console.log(divideNoPivo(listaLivros));
// console.log(encontraMenores(listaLivros[2], listaLivros));
module.exports = trocaLugar;