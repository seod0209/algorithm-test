function solution(cipher, code) {
    var answer = '';
    const arr = [...cipher]
    
  	for(let i = 0; i<arr.length; i++){
      if((i+1)%code===0){
        answer += arr[i]
      }
    }
    return answer;
}