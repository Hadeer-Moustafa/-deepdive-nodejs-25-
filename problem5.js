
function getSecondLargest(nums) {
    
    nums.sort((a,b)=>b-a);
 for(let i =0;i<nums.length ;i++){
    if(nums[0]===nums[1]){
      nums.shift();
    }
   
 }
  return nums[1];
}
