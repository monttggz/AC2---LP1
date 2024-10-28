let numeros = [1.2, 3.7, 4.5, 6.1, 8.9]
function arredondar(item){
    let arrendondado = Math.round(item)
    return arrendondado
}

numeros.forEach(arredondar)

console.log(numeros)