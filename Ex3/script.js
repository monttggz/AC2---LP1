let numeros = [1.2, 3.7, 4.5, 6.1, 8.9]
let novos_numeros = []

function arredondar(item){
    let arrendondado = Math.ceil(item)
    novos_numeros.push(arrendondado)
}

numeros.forEach(arredondar)
console.log(numeros)