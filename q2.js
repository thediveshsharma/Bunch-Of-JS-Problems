
let factorial = ( num ) => {
        let fact = 1
        for( i = num ; i >= 2 ; i-- ){
            fact = fact * i 
            console.log(fact)
        }
        return fact
    }
    console.log('----------------New Question-------------')
    console.log("Factorial of 6 is", factorial(6) )