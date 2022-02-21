var maxSubArray = function(nums) {
    var len = nums.length
    var max = nums[0]
    for(var idx = 1; idx< len; idx++){
        if(nums[idx-1] + nums[idx] >= nums[idx])
            nums[idx] = nums[idx-1] + nums[idx]
        if(nums[idx] > max)
            max = nums[idx]
    }
    return max
};