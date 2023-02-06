function simpleArraySum(arr) {
    // if(typeof arr !== 'object') return "You're mean for not giving me an array"
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log(simpleArraySum([1, 2, 3])) //expects 6
console.log(simpleArraySum([4, 12, 3])) //expects 19

function sumMultiplesOfThreeAndFive(num) {
    let sum = 0;
    for(let i = 3; i < num; i++) {
        if(i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    return sum;
}

console.log(sumMultiplesOfThreeAndFive(10)); //Gives me 23
console.log(sumMultiplesOfThreeAndFive(1000)); //Gives me 233168


function factor(num1, num2) {
    if(num1 % num2 === 0) {
        return true
    };
    return false;
}

function prime(num) {
    for(let i = 2; i <= Math.sqrt(num); i++) {
        if(num % i === 0) return false;
    }
    return true;
}

function largestPrimeFactor(num) {
    if(prime(num)) return num;
    for(let i = num/2; i > 0; i--) {
        // console.log(`i is ${i} and it is a factor? ${factor(num, i)}`)
        if(factor(num, i) && prime(i)) return i;
    }
    return "No solution";
}

console.log(largestPrimeFactor(13195)) //expects 29
console.log(largestPrimeFactor(10)) //expects 5
console.log(largestPrimeFactor(600851475143)) //expects 5