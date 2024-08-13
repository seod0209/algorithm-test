// 답안 1
// 테스트 4, 5, 7 실패
// function solution(brown, yellow) {
//     var answer = [];
//     // 최소 높이(세로 길이)는 3이어야 노란색 타일을 감쌀 수 있습니다
//     const sum = brown + yellow
//     const arr = []
//      for(let i = 1; i <= sum; i ++){
//       for(let j = sum -1; j > 0; j --){
//         if(i>=j&&i *j === sum ){
//          answer = [i,j]
//           return answer
//         }
//       }
//     }
// }


// 답안 2

function solution(brown, yellow) {
    var answer = [];
    const total = brown + yellow; // 갈색과 노란색 타일의 총 개수
    for (let height = 3; height <= total / 3; height++) {
        // 높이는 최소 3부터 시작
        if (total % height === 0) {
            
            // 가로 길이 계산
            const width = total / height; 
            
            // 양쪽 가장자리에 각각 1칸씩 갈색 타일이 배치 : -2
            // 위와 아래에 각각 1칸씩 갈색 타일이 배치: -2
            
            if ((width - 2) * (height - 2) === yellow) {
                // 노란색 타일 개수가 맞으면
                // 가로와 세로 길이 저장
                answer = [width, height]; 
                break; // 반복문 종료
            }
        }
    }
    return answer; // 가로와 세로 길이 반환
}