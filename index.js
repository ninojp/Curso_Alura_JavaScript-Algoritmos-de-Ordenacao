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