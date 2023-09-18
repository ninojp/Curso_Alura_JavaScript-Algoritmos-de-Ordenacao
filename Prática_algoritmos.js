// Nessa primeira aula, você aprendeu (ou deveria kkk)
// Que algoritmos são sequências finitas de passos lógicos para a resolução de um problema
//e que podem representar tanto problemas comuns em programação quanto qualquer situação que envolva passos lógicos;
// Que pensar de forma algorítmica não se resume a código e nem precisa necessariamente começar pelo código em si;
// Como traduzir os passos de um algoritmo para a linguagem de programação que escolhemos trabalhar (no caso, JavaScript),
//através de estruturas fundamentais da linguagem como variáveis, laços de repetição e condicionais.

const listaLivros = [25, 15, 30, 50, 45, 20]
let maisBarato = 0;
// No caso MAISBARATO e ATUAL referece a posição(indice) no array. 
for (let atual = 0 ; atual < listaLivros.length ; atual++){
    // console.log(listaLivros[atual])
    // console.log(listaLivros[maisBarato])
// já listaLivros[atual] referece ao VALOR[indice] no array
    if (listaLivros[atual] < listaLivros[maisBarato]){
        maisBarato = atual;
    }
}
console.log(`O Livro mais barato custa: ${listaLivros[maisBarato]}`);
console.log('');
// ------------------------------------------------------------------------------------------------------

// Exercício proposto, Percorrer o array em busca do livro mais caro
let maisCaro = 0;
for(let indiceAtual = 0; indiceAtual < listaLivros.length ; indiceAtual++){
    if(listaLivros[indiceAtual] > listaLivros[maisCaro]){
        maisCaro = indiceAtual;
    }
}
console.log(`O Livro mais Caro custa: ${listaLivros[maisCaro]}`);
