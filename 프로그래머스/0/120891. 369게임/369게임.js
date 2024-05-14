function solution(order) {
    var answer = 0;
    const arr = String(order).split('')
    for(let value of arr){
      if(Number(value)!==0 &&Number(value)%3 === 0){
        answer += 1
      }
    }
    return answer;
}