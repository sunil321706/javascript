let age = parseInt(prompt("Enter your age"))
let ages;
if (age>=151){
    console.log("invalid")
    return;
}
if (age>60){
    console.log("senior")
}

if (age>13 && age<=19){
    console.log("teanager")
}
if (age<=13){
    console.log("child")
}

