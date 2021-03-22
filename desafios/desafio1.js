
console.log("\n1.1 - Cálculo de IMC\n")
const nome = "Marcos"
const peso = 69
const altura = 1.65

const imc = peso / (altura * altura)

if(imc >= 30){
    console.log(`${nome} você está acima do peso`)
}
else{
    console.log(`${nome} você não está acima do peso`)
}

console.log("\n1.2 - Cálculo de Aposentadoria\n")

const usuario = [{
    
    nome: "Beto",
    idade: 50,
    sexo: "M",
    contribuicao: 20
 }
]
const anoContribM = 35
const anoContribF = 30
const calculoAposentadoria = usuario[0].idade + usuario[0].contribuicao


const aposentadoriaHomem = usuario[0].sexo === "M" && calculoAposentadoria >= 95 && usuario[0].contribuicao >= anoContribM
const aposentadoriaMulher = usuario[0].sexo === "F" && calculoAposentadoria >= 85 && usuario[0].contribuicao >= anoContribF
if(aposentadoriaHomem == true || aposentadoriaMulher == true) {
    console.log(`${usuario[0].nome}, você pode se aposentar!`)
}
else{
    console.log(`${usuario[0].nome}, você ainda não pode se aposentar!`)
}