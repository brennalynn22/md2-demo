let backpack = []

backpack.push("pokeballs")
backpack.push("potion")
backpack.push("pokedollars")

// backpack.shift()
backpack.splice(0,1)

let foundItem = 'waterstone';
backpack.push(foundItem)

backpack.pop()

let itemcount = backpack.length;
//console.log(itemcount)

backpack.push('great ball', 'antidote', 'revive')

//let satchel = backpack.splice(2,3)
//console.log(satchel)

//for (let i=0; i<backpack.length; i++){
//console.log(backpack[i])
//}

// if(backpack.length >=3){
//     console.log('hit 3 statement')
//     for (let i=0; i<3; i++){
//         console.log(backpack[i])  
//     } 
//      console.log(backpack.length)
// } else {
//     console.log('hit else')
//     for (let i=0; i<backpack.length; i++){
//         console.log(backpack[i])
        
//     }console.log(backpack.length)
// }
// //console.log(backpack)


let guessMe = 54

while (guessMe < 100) {
    console.log('-----',guessMe)
    if (guessMe % 4 === 0 || guessMe % 5 === 0) {
        guessMe += 25
        console.log('guessme is divisible by 4 or 5, add 25')
    } else if (guessMe % 3 === 0) {
        guessMe -= 27
        console.log('guessme is divisible by 3, subtracted 27')
    } else {
        guessMe += 3
        console.log('guessMe hit else, added 3')
    }
    guessMe += 22
    console.log(`Added 22, guessMe is now ${guessMe}`)
}


console.log('final value', guessMe)
