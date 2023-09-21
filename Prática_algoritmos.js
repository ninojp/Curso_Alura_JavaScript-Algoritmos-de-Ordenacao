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
//==============================================================================================

// Exercício proposto Aula 2: RECURSÃO, Recursividade ou Funções Recursivas
// 1) Um método utilizado para resolver problemas de computação em que a resolução
//consiste em solucionar instâncias menores do mesmo problema;
// 2) Um método em que uma função ou algoritmo chama a si uma ou mais vezes até que se atinja
//uma condição específica, quando o resultado de cada repetição é processado desde a última
//chamada até a primeira.

// Abaixo é definida uma função para controlar a frequência com que os números são incrementados
//durante a execução da função recursiva incrementaNumero(), que será definida a seguir:
console.log('Exercício proposto Aula 2: Recursividade');
function dorme(milissegundos){
    return new Promise(resolve => setTimeout(resolve, milissegundos));
}
async function incrementaNumero(numero){
    console.log(numero)
    // await dorme(2000)
    await dorme(1000)
    //Aqui é implementada o caso base(base case) que fará com que a função pare a recursão
    //quando o valor do parâmetro numero for igual a 10:
    if (numero === 10) {
        return 'finalizou'
    }
    return incrementaNumero(numero + 1)
  }
incrementaNumero(1)
console.log('');
//==================================================================================================

//AMÉN, Além do objeto console do JavaScript tem muito mais métodos do que o log().
//Ele também conta com um método chamado trace() que, além de imprimir mensagens, também fornece um stack trace, 
//uma espécie de rastro de execução das funções executadas.
console.log('console.TRACE()');
function ola(){
    function mundo() {
        console.trace('Ola Mundo');
      }
  mundo();
}
ola();
// O console.trace() é muito vantajoso quando pensamos em cenários complexos,
//pois fornece um stack trace (rastreamento de pilha) completo, com informações sobre os locais,
//módulos ou arquivos em que os métodos são chamados.