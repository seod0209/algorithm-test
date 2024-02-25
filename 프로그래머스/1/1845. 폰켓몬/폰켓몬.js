function solution(nums) {
    var answer = 0;
    // 가장 많은 종류의 n/2
    const limit = nums.length/2
    let map = {}

    
     for (let i = 0; i < nums.length; i++) {

        // map이라는 객체에서 nums[i]라는 키를 찾는다.
        // 만약 map 객체에 nums[i]라는 키가 존재하지 않으면(즉, 해당 숫자가 등장한 적이 없으면) 0을 반환
        // 찾은 횟수에 1을 더한다.
        // map[nums[i]]에는 각 숫자의 등장 횟수가 저장한다.
        map[nums[i]] = (map[nums[i]] || 0) + 1;
  }

  // 주어진 객체(map)의 모든 열거 가능한 속성 이름(키)을 포함하는 배열을 반환.
  // .length를 통해 배열의 길이를 구하여 객체(map)의 속성(키)의 개수를 구한다.
  let objectLength = Object.keys(map).length;
     
      
    

  answer= objectLength > limit ? limit : objectLength
    return answer
}
