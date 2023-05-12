var search = function(nums, target) {
    var l = 0;
    var h = nums.length -1;
    while(l<=h){
        var m = Math.floor((l+h)/2);
        if(nums[m] === target){
            return m
        }

        if(nums[l] <= nums[m]){
            if(nums[l] <= target && nums[m] >= target){
                h = m - 1;
            }else{
                l = m + 1;
            }
        }else{
            if(nums[m] <= target && nums[h] >= target){
                l = m  +1;
            }else{
                h = m  -1;
            }
        }
    }
    return -1
};