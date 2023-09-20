const listaLivros = require("./array");

function mergeSort(array){
    if(array.length > 1){
        const meio = Math.floor(array.length / 2);
        const parte1 = mergeSort(array.slice(0, meio));
        const parte2 = mergeSort(array.slice(meio, array.length));
        array = ordena(parte1, parte2);
    }
    return array;
}
function ordena(parte1, parte2){
    let posicaoAtualParte1 = 0
    let posicaoAtualParte2 = 0
    const arrayResultado = []

    while (posicaoAtualParte1 < parte1.length && posicaoAtualParte2 < parte2.length){
        let produtoAtualParte1 = parte1[posicaoAtualParte1]
        let produtoAtualParte2 = parte2[posicaoAtualParte2]

        if (produtoAtualParte1.preco < produtoAtualParte2.preco){
            arrayResultado.push(produtoAtualParte1)
            posicaoAtualParte1++
        }else{
            arrayResultado.push(produtoAtualParte2)
            posicaoAtualParte2++
        }
    }
    return arrayResultado.concat(posicaoAtualParte1 < parte1.length ? parte1.slice(posicaoAtualParte1) : parte2.slice(posicaoAtualParte2));
}
console.log(mergeSort(listaLivros));
//=====================================================================================================

// EXIBINDO OS NIVEIS DE ANINHAMENTO
function mergeSort2(array, nivelAninhamento = 0){
    console.log(`Nivel de Animhamento: ${nivelAninhamento}`);
    console.log(array);
    if(array.length > 1){
        const meio = Math.floor(array.length / 2);
        const parte1 = mergeSort2(array.slice(0, meio), nivelAninhamento++);
        const parte2 = mergeSort2(array.slice(meio, array.length), nivelAninhamento++);
        array = ordena2(parte1, parte2);
    }
    return array;
}
function ordena2(parte1, parte2){
    let posicaoAtualParte1 = 0
    let posicaoAtualParte2 = 0
    const arrayResultado = []

    while (posicaoAtualParte1 < parte1.length && posicaoAtualParte2 < parte2.length){
        let produtoAtualParte1 = parte1[posicaoAtualParte1]
        let produtoAtualParte2 = parte2[posicaoAtualParte2]

        if (produtoAtualParte1.preco < produtoAtualParte2.preco){
            arrayResultado.push(produtoAtualParte1)
            posicaoAtualParte1++
        }else{
            arrayResultado.push(produtoAtualParte2)
            posicaoAtualParte2++
        }
    }
    return arrayResultado.concat(posicaoAtualParte1 < parte1.length ? parte1.slice(posicaoAtualParte1) : parte2.slice(posicaoAtualParte2));
}
console.log(mergeSort2(listaLivros));