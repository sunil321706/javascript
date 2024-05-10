let x = parseInt(prompt("write a table"))
let y = 1
for(let y = 1; y <= 10; y++){
    if(y===5){
        continue;
    }
    console.log(x + "*" + y + "=" + x*y)
}