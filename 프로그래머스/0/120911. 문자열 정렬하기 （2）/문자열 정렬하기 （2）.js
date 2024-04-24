function solution(my_string) {
    var answer = '';
    answer = [...my_string.toLowerCase()].sort((a,b)=> a.charCodeAt()- b.charCodeAt()).join("")
   
    return answer;
}