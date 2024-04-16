function solution(price) {
    var answer = 0;
    
    let discount = 0;
   if(price >=100000 && price < 300000 ){
        discount = 0.05 *price
      
    } else if (price >=300000 && price <500000 ){
        discount = 0.1*price
    }
      else if (price >=500000 ){
        discount = 0.2*price
    } else {
        discount = 0
    }
  
  answer = Math.floor(price - discount)
    return answer;
}