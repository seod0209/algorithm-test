function solution(money) {
    var answer = [];
    	const price = 5500
   	
    const cup = Math.floor(money/price)
    const rest = money%price
    
  answer.push(cup,rest)

    return answer;
}