// program to generate fibonacci series up to n terms
// take input from the user
function fibo(number) {
    let n1 = 0, n2 = 1, nextTerm;
    let result = [];
    for (let i = 1; i <= number; i++) {
        result.push(n1);
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
    return result;
}


module.exports = {
    fibo
};


