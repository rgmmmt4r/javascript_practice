// This is a TLE solution, need to be reviced
var searchInsert = function(nums, target) {
    num_len = nums.length
    for(var i = 0;i<num_len;i++){
        if(target <= nums[i])
            return i
    }
    return num_len
};