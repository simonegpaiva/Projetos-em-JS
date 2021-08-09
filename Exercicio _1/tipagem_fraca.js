/*let  qualquer = 'legal'
console.log(typeof qualquer)

qualquer = 3.1516
console.log(qualquer)
console.log(typeof qualquer)*/

const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const aval1 = 9.876
const aval2 = 6.894

const total = aval1 * peso1 + aval2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2))