var removeElement = function(nums, val) {
    slow = -1;
    for(fast = 0;fast<nums.length;fast ++){
        if(nums[fast] !== val){
            nums[slow+1] = nums[fast]
            slow ++
        }
    }
    return slow +1
};