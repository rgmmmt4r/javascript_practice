var addBinary = function(a, b) {
    var num1 = BigInt(`0b${a}`)
    var num2 = BigInt(`0b${b}`)
    var sum = num1 + num2
    return sum.toString(2)
};