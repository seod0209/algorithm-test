function solution(num, n) {
    var answer = 0;
    // 나머지가 0 인경우 배수
    if(num%n === 0){
      answer = 1
    }
    
    return answer;
}