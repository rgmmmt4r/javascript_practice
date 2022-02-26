var climbStairs = function(n) {
    if(n === 1)
        return 1
    if(n === 2)
        return 2
    steps = [1,2]
    for(let i = 2;i<n;i++){
        steps[i] = (steps[i-1]+steps[i-2])
    }
    return steps[n-1]
};