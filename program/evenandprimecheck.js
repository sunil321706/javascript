let userInput = parseInt(prompt("Enter a number is "))
let is_prime = true
for(let i = 2; i < userInput; i++){
    if(userInput%i==0){
        is_prime = false
        break
    }
}
if (is_prime){
    console.log(userInput, "is a prime no.")
}else{
     console.log(userInput, "is not a prime no.")
}
