const livros = require("./listaLivros")
// Na primeira linha antes de qualquer coisa, estamos importando a nossa lista de livros

let maisBarato = 0;
// No caso MAISBARATO e ATUAL referece a posição(indice) no array. 
for (let atual = 0 ; atual < livros.length ; atual++){
    // console.log(livros[atual])
    // console.log(livros[maisBarato])
// já LIVROS[atual] referece ao VALOR[indice] no array
    if (livros[atual].preco < livros[maisBarato].preco){
        maisBarato = atual;
    }
}
console.log(`O Livro mais barato custa: ${livros[maisBarato].preco} e seu Titulo é: ${livros[maisBarato].titulo}`);
console.log('');

// Exercício proposto, Percorrer o array em busca do livro mais caro
let maisCaro = 0;
for(let indiceAtual = 0; indiceAtual < livros.length ; indiceAtual++){
    if(livros[indiceAtual].preco > livros[maisCaro].preco){
        maisCaro = indiceAtual;
    }
}
console.log(`O Livro mais Caro custa: ${livros[maisCaro].preco} e seu Titulo é: ${livros[maisCaro].titulo}`);

// Nessa aula, você aprendeu (ou deveria kkk)
// Que algoritmos são sequências finitas de passos lógicos para a resolução de um problema
//e que podem representar tanto problemas comuns em programação quanto qualquer situação que envolva passos lógicos;
// Que pensar de forma algorítmica não se resume a código e nem precisa necessariamente começar pelo código em si;
// Como traduzir os passos de um algoritmo para a linguagem de programação que escolhemos trabalhar (no caso, JavaScript),
//através de estruturas fundamentais da linguagem como variáveis, laços de repetição e condicionais.