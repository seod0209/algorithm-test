function solution(my_string) {
    var answer = 0;
    const arr = my_string.split("")
    
    let nums = []
    const numArr = []
 
    for(let i = 0; i < arr.length+1; i++){
      let val = arr[i]
      
      if(!isNaN(val)){
        nums.push(val)
        
      } else{
        if(nums.length > 0){
          numArr.push(Number(nums.join('')));
          nums = []
        }
      }
    }
    
    answer = numArr.reduce((acc, curr)=>{
      return (acc) += (curr)
    },0)
    return answer;
}