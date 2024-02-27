// 기존 답안
// function solution(phone_book) {
//     var answer = true;
//  	phone_book.sort()
//     const map = new Map()
    
//     for(let i = 0; i<phone_book.length; i++){
//        for(let j = i; j<phone_book.length; j++){
//          const a = (phone_book[i])
//          const b = (phone_book[j])
        
//          if(a !== b){
//        		if(b.includes(a)) return false
//    		 }
//     }
//     return answer;
// }

// 참고 답안
function solution(phone_book) {
 var answer = true;
  	const hashMap = {}
    
    // hashMap의 key를 전화번호로 저장.
    phone_book.forEach( num => {
      hashMap[num] = true
    })
  
  	for(const number of phone_book){
      if(!answer) break;
      
      let prefix = "";
      
      // 현재 검사 중인 전화번호(number)의 각 자릿수(digit)에 대해 반복
      for(const digit of number){
        
        // 1. 접두사 생성.
        // 현재까지의 접두사에 현재 자릿수를 더한다.
        // 이렇게 하면 접두사가 하나씩 늘어난다.
        // 접두사의 길이에 따라서 점차적으로 전체 전화번호의 자릿수를 확인가능
        prefix += digit
 
        // 2. 현재 전화번호가 다른 전화번호의 접두사인지를 확인
        
        // hashMap[prefix]
        // 현재까지 만들어진 접두사가 해시맵에 존재하는지 확인
        // 만약 존재한다면, 해당 접두사가 이미 다른 전화번호의 접두사임을 의미
        
        // prefix !== number
        // 현재까지 만들어진 접두사가 현재 검사 중인 전화번호(number)와 같지 않은지 확인
        // 만약 같다면, 이는 자기 자신의 전화번호를 검사하는 것이므로 접두사가 아님.
        if(hashMap[prefix] && prefix !== number){
          answer = false
          break;
        }
      }
    }
    return answer;
}