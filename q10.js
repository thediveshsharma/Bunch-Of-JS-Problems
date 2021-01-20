let sort = (num) => {
    let tmp = [];
    for(i=0;i < num.length; i++){
        for(j =0 ; j < num.length; j++){
            if(num[j]>num[j+1]){
                tmp = num[j];
                num[j] = num[j+1]
                num[j+1] = tmp

            }
        }
    }
    return num;
}
let numbers = [5,2,1,4,3,8]

console.log('----------------New Question-------------')
console.log(sort(numbers))



