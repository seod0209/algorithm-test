function solution(keyinput, board) {
   var answer = [];
    const widthX = Math.floor(board[0]/2)
    const widthY = Math.floor(board[1]/2)
    
    let x = 0
    let y = 0
    
    for(let dir of keyinput){
      console.log(widthY, y)
      if(dir === "up") {
        y +=1
        if(widthY <= y){
          y = widthY
        }
      }
      if(dir === "down") {
        y -=1
         if(widthY <= Math.abs(y)){
          y = widthY*-1
        }
      }
      if(dir === "right"){
        x +=1
         if(widthY <= x){
          x = widthX
        }
      }
      if(dir === "left"){
        x -=1
         if(widthY <= Math.abs(x)){
          x = widthX*-1
        }
      }
    }
  
    answer.push(x, y)
    return answer;
}