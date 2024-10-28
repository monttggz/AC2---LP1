let numeros = [2, 5, 8, 13, 16, 21]
const multiplicador = Math.floor(Math.random() * 10)

let numeros_impares = numeros.filter(function(num){
    if (num%2 == 1) {
        return num * multiplicador
    }
})
let numeros_pares = numeros.filter(function(num){
    if (num%2 == 0) {
        return num
    }
})

let numeros_novo = numeros_pares.concat(numeros_impares)

console.log(numeros_novo)