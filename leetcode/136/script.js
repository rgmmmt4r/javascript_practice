var singleNumber = function(nums) {
    xor = 0
    for(var i = 0;i<nums.length;i++){
        xor = xor ^ nums[i]
    }
    return xor
};