function solution(clothes) {
    // 경우의 수 구하기
    // 각 의상의 타입별로 옷이 몇개인지 파악
      var answer = 0;
      const map = new Map()

      for(const [name, type] of clothes){
        console.log(name, type)
        if(map.get(type)){
          map.set(type, map.get(type) + 1);
        } else {
          map.set(type, 1)
        }
      }

      let ret = 1;
      // 해당 종류를 입을 수 있는 경우의 수를 곱하여 총 조합의 수를 계산
      for(const [key, value] of map){
        // 이미 입고 있는 경우를 고려 + 1
        ret = ret * (value + 1);
      }
      // 아무 옷을 안입는 경우를 제거
      return ret - 1;
}