function solution(nums) {
    var answer = 0;
    // 가장 많은 종류의 n/2
    const limit = nums.length/2
    let map = {}

    
     for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = (map[nums[i]] || 0) + 1;
  }
 
  let objectLength = Object.keys(map).length;
     
      
    

  answer= objectLength > limit ? limit : objectLength
    return answer
}