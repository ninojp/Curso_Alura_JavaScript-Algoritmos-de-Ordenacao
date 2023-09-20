const {edGalho, edFolha} = require("./arrays");

function juntaListas(lista1, lista2){
    let listaFinal = [];
    let posicaoAtualLista1 = 0;
    let posicaoAtualLista2 = 0;
    let posicaoAtualListaFinal = 0;

    while(posicaoAtualLista1 < lista1.length && posicaoAtualLista2 < lista2.length){
        let produtoAtuallista1 = lista1[posicaoAtualLista1];
        let produtoAtuallista2 = lista2[posicaoAtualLista2];
        console.log(`Comparando ${produtoAtuallista1.titulo} com ${produtoAtuallista2.titulo}`);
        if(produtoAtuallista1.preco < produtoAtuallista2.preco){
            listaFinal[posicaoAtualListaFinal] = produtoAtuallista1;
            posicaoAtualLista1++;
        }else{
            listaFinal[posicaoAtualListaFinal] = produtoAtuallista2;
            posicaoAtualLista2++;
        }
        posicaoAtualListaFinal++;
    }
    while(posicaoAtualLista1 < lista1.length){
        listaFinal[posicaoAtualListaFinal] = lista1[posicaoAtualLista1];
        posicaoAtualLista1++;
        posicaoAtualListaFinal++;
    }
    while(posicaoAtualLista2 < lista2.length){
        listaFinal[posicaoAtualListaFinal] = lista2[posicaoAtualLista2];
        posicaoAtualLista2++;
        posicaoAtualListaFinal++;
    }
    return listaFinal;
}
console.log(juntaListas(edGalho, edFolha));