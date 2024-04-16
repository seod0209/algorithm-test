function solution(numbers) {
    var answer = 0;
    const length = numbers.length
    let sum = 0;
    for(let i = 0; i < length; i++){
      sum += numbers[i]
    }
  
    answer = sum/length
    return answer;
}