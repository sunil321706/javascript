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
// console.log(loginUserMeggage());

function calculateCartPrice(num1, num2, ...num3){
    return num1
}

// console.log(calculateCartPrice(200, 300, 400, 1000, 3000))

const user = {
    username: "sunil",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is
     ${anyobject.prices}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 300, 400, 500]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 600]));