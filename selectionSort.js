const livros = require("./listaLivros");
const menorValor = require("./menorValor");

for(let atual = 0; atual < livros.length -1 ; atual++){
    let menor = menorValor(livros, atual);

    let livroAtual = livros[atual];
    console.log('Posição atual', atual);
    console.log('Livro atual', livros[atual]);
    let livroMenorPreco = livros[menor];
    console.log('Livro menor Preco', livros[menor]);

    livros[atual] = livroMenorPreco;
    livros[menor] = livroAtual;
}
console.log(livros);

// O JavaScript tem outras formas de escrever laços de repetição além desse for “clássico” 
//e podemos reescrever o nosso código para testar com um método mais moderno, o forEach().
console.log('Usando o forEach()')
livros.forEach((_, indice) => {
    let menor = menorValor(livros, indice)
    let livroAtual = livros[indice];
    let livroMenorPreco = livros[menor];
    livros[indice] = livroMenorPreco
    livros[menor] = livroAtual 
   })
console.log(livros)
// Se examinarmos o laço, vemos que o primeiro parâmetro da função callback, livro, 
//não está sendo utilizado; nesse caso, podemos usar a notação do JavaScript para informar
//que o primeiro parâmetro não será utilizado no código, através do _:   
