let num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let totalCount = 0
let oddno = 0
for(let int of num){
    if(int%2==0){
        totalCount = totalCount+1
    }
    else{
        oddno = oddno +int
    }
}
console.log("total even no. in list is:", totalCount)
console.log("sum of total odd no:", oddno)
