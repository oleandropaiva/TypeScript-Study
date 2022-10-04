/*eslint-disable*/
let nome: string = 'Leandro'; //Qualquer tipo de strings: "" '' ``
let idade: number = 30; //10, 1.57, -5.55, 0xf00d, 0b1010, 0o7744
let adulto: boolean = true; //True ou false
let simbolo: symbol = Symbol('qualquer-symbol'); //Symbol
//let big: bigint = 10n; //bigint

//Arrays
let arrayDeNumeros: Array<number> = [1, 2, 3, 4, 5];
let arrayDeNumeros2: number[] = [1, 2, 3, 4, 5];
let arrayDeStrings: Array<string> = ['a', 'b', 'c'];
let arrayDeStrings2: string[] = ['a', 'b', 'c'];

//Objetos
let pessoa: {nome: string, idade: number, adulto?: boolean} = {
  idade: 30,
  nome: 'Leandro'
};

// Funções
function soma(x:number, y:number): number {
  return x + y;
}
const soma2: (x:number, y:number) => number = (x, y) => x + y;
