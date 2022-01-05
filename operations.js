function addition(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function modulus(a, b) {
    return a % b;
}

function findLCM(num1, num2) {
    let min = (num1 > num2) ? num1 : num2;
    // while loop
    while (true) {
        if (min % num1 == 0 && min % num2 == 0) {
            return min;
        }
        min++;
    }
}

function findHCF(number1, number2) {
    let hcf;
    // looping from 1 to number1 and number2
    for (let i = 1; i <= number1 && i <= number2; i++) {

        // check if is factor of both integers
        if (number1 % i == 0 && number2 % i == 0) {
            hcf = i;
        }
    }
    return hcf;

}

module.exports = {
    addition,
    multiply,
    modulus,
    findLCM,
    findHCF
};