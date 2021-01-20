let num = 192;
let digitsum = (num) =>
{
    let string = num.toString();
    let sum = 0;
    for(let i = 0 ; i < string.length ; i++)
    {
    
        sum = sum + parseInt(string.substring(i,i+1));
    }
    return sum;
}
console.log('----------------New Question-------------')
console.log( "Sum of digits of the number " + num + " is ",digitsum(num));
console.log('----------------New Question-------------')
