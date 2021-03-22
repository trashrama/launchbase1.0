console.log("\n 1.4 - Usuários e Tecnologias \n")

const usuarios = [

    {
    nome: "Carlos",
    tecnologias: ["HTML", "CSS"] 
    },

    {
    nome: "Jasmine",
    tecnologias: ["JavaScript", "CSS"] 
    },
    {
    nome: "Tuane",
    tecnologias: ["HTML", "Node.js"] 
    }
]

for (usuario of usuarios){
   console.log(`${usuario.nome} trabalha com ${usuario.tecnologias.join(', ')}`)
}

console.log("\n1.5 - Busca por tecnologia\n")

function usaCSS(pessoa){
    for (tecnologias of pessoa.tecnologias){
        if(tecnologias == "CSS") return true
    }
}

for (let i = 0; i < usuarios.length; i++) {
    const usuarioTrabalhaComCSS = usaCSS(usuarios[i]);
  
    if (usuarioTrabalhaComCSS) {
      console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`);
    }
  }
