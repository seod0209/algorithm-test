function solution(my_string, k) {
    var answer = '';
    let count = k
    while(count > 0){
        answer = answer + my_string
        count--
    }
   
    return answer;
}