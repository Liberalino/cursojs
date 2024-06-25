/*let num = [2,5,4,8,9,10]

    console.log(`nosso é o vetor o ${num}`) 

let num = [5,8,4]
num [3] = 6
num.push(7)
num.length
console.log(`nosso é o vetor o ${num})
*/
let num = [5,2,1,4,3]
num.push(1)
num.sort()
console.log(num)
console.log(`o vetor tem ${num.length} posiçoes`)
console.log(`o primeiro valor do vetor é ${num [0]}`)
let pos = num.indexOf(2) 
if(pos == -1 ){
    console.log('valor não encontrado')
} else{
    console.log(`o valor 4 está na posição ${pos}`)
}
