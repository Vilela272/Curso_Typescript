"use strict";
// string
var nome = 'João';
console.log(nome);
//nome = 28
//numbers
var idade = 27;
console.log(idade);
//boolean
var possuiHobbies = true;
console.log(possuiHobbies);
//tipos explícitos
var mult;
mult = 3;
console.log(mult);
mult = 'Desenvolvedor Junior';
console.log(mult);
//array de strings
var hobbies = ["cozinhar", "Praticar Esportes"];
console.log(hobbies[0]);
console.log(hobbies[1]);
//array de inteiros
hobbies = [10, 20, 30];
console.log(hobbies[0]);
console.log(hobbies[1]);
console.log(hobbies[2]);
//tuplas
var endereco = ["Av Principal", 41];
console.log(endereco);
endereco = ["Rua importante", 1260];
console.log(endereco);
//enums
var diaDaSemana;
(function (diaDaSemana) {
    diaDaSemana[diaDaSemana["Segunda"] = 0] = "Segunda";
    diaDaSemana[diaDaSemana["Ter\u00E7a"] = 1] = "Ter\u00E7a";
    diaDaSemana[diaDaSemana["Quarta"] = 2] = "Quarta";
    diaDaSemana[diaDaSemana["Quinta"] = 3] = "Quinta";
    diaDaSemana[diaDaSemana["Sexta"] = 4] = "Sexta";
    diaDaSemana[diaDaSemana["S\u00E1bado"] = 5] = "S\u00E1bado";
    diaDaSemana[diaDaSemana["Domingo"] = 6] = "Domingo";
})(diaDaSemana || (diaDaSemana = {}));
console.log(diaDaSemana[6]);
console.log(diaDaSemana[0]);
//any
var carro = 'BMW';
console.log(carro);
carro = { marca: 'BMW', ano: '2020' };
console.log(carro);
