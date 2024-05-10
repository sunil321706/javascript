function myfunc(arr){
    let  largest_num = arr[0]
    for(let x = 1; x < arr.length; x++){
        if (largest_num < arr[x]){
            largest_num = arr[x]
        }
    }
     console.log(largest_num)
    }

const arr =[5, 10, 20, 15]
myfunc(arr)