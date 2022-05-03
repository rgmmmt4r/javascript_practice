var reverseBits = function(n) {
    normal = n.toString(2)
    normal = "00000000000000000000000000000000".substr(normal.length) + normal
    revserse = reverseString(normal)
    

    return  parseInt(revserse.toString(10),2)
};

function reverseString(str) {
    return str.split("").reverse().join("");
}



console.log(reverseBits(12))