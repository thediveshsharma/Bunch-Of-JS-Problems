let number = 23;
let arry = [1,2,3,4,5,5,23,2,33];
let findElement = (num , arr) =>{
    
        for(let i = 0 ; i < arr.length ; i++){
            if(arr[i]=== num)
             return i;
    }
    if(arr.length===0){
        return null
    }
    return null;
}
console.log('----------------New Question-------------')

console.log( findElement(number,arry));