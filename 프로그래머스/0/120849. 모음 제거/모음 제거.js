function solution(my_string) {
    var answer = '';
     const vowels = ['a', 'e', 'i', 'o', 'u'];
    const arr = [...my_string];
  
    for(const value of arr){
      const isIncluded = vowels.includes(value)
     
      if(!isIncluded){
        answer += value
      }
    }
    return answer;
}