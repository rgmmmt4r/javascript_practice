/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    Dict = {}
    for(let i =0; i <nums.length ;i++){
        if(!(nums[i] in Dict)){
            Dict[nums[i]] = i
        }
    }
    for(let i = 0; i<nums.length; i++){
        if(target - nums[i] in Dict & i != Dict[target - nums[i] ] )
            return [i, Dict[target - nums[i] ] ]
    }
};