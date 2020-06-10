// string
let nome: string  = 'João'
console.log(nome)
//nome = 28

//numbers
let idade: number = 27
console.log(idade)

//boolean
let possuiHobbies: boolean = true
console.log(possuiHobbies)

//tipos explícitos
let mult: any
mult = 3
console.log(mult)
mult = 'Desenvolvedor Junior'
console.log(mult)

//array de strings
let hobbies: any[] = ["cozinhar", "Praticar Esportes"]
console.log(hobbies[0])
console.log(hobbies[1])

//array de inteiros
hobbies = [10, 20, 30]
console.log(hobbies[0])
console.log(hobbies[1])
console.log(hobbies[2])

//tuplas
let endereco: [string, number] = ["Av Principal", 41]
console.log(endereco)

endereco = ["Rua importante", 1260]
console.log(endereco)

//enums
enum diaDaSemana {
    Segunda,
    Terça,
    Quarta,
    Quinta,
    Sexta,
    Sábado,
    Domingo
}

console.log(diaDaSemana[6])
console.log(diaDaSemana[0])

//any
let carro: any = 'BMW'
console.log(carro)
carro = {marca: 'BMW', ano: '2020'}
console.log(carro)

//funções
function retornaMeuNome(): string {
    nome = 'Seu nome'
    return nome
}
console.log(retornaMeuNome())

function digaOi(): void {
}
digaOi()
