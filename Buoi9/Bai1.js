const isPrime = (a) => {
    for(let i = 2;i <= Math.sqrt(a);i++ ){
        if(a % i == 0) return false;
    }
    return true;
};

console.log(isPrime(7)) //output: true;
console.log(isPrime(10)) //output: false;