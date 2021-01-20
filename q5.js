let reverseString =(str) => {
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
console.log('----------------New Question-------------')
console.log('ReverseString :-'+ "   " + reverseString('awesome'));