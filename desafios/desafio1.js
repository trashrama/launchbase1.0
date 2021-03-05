
console.log("1.1 - Cálculo de IMC")
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

console.log("1.2 - Cálculo de Aposentadoria")

const usuario = [{
    
    nome: "Beto",
    idade: 50,
    sexo: "M",
    contribuicao: 60
 }
]
const anoContribM = 35
const anoContribF = 30
const calculoAposentadoria = usuario[0].idade + usuario[0].contribuicao


const aposentadoriaHomem = usuario.sexo === "M" && calculoAposentadoria >= 95 && usuario.contribuicao >= anoContribM
const aposentadoriaMulher = usuario.sexo === "F" && calculoAposentadoria >= 85 && usuario.contribuicao >= anoContribF
if(aposentadoriaHomem == true || aposentadoriaMulher == true) {
    console.log(`${usuario.nome}, você pode se aposentar!`)
}
else{
    console.log(`${usuario.nome}, você ainda não pode se aposentar!`)
}