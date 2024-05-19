function myfunction(){
    console.log("S");
    console.log("U");
    console.log("N");
    console.log("I");
    console.log("L");
}

// myfunction()

// function addtwonumber(num1, num2){
//      console.log(num1 + num2);
// }

function addtwonumber(num1, num2){
    // let result = num1 + num2
    // return result
    return num1 + num2
}

const result = addtwonumber(3, 4)

// console.log("Result: ", result);


function loginUserMeggage(username){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMeggage("sunil"));
console.log(loginUserMeggage());