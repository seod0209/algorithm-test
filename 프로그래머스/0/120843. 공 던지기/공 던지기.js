function solution(numbers, k) {
    // % numbers.length: 배열의 길이로 나눈 나머지
    // 이는 배열을 순환하게 만들기 위한 것으로, 
    // 만약 인덱스가 배열 길이를 초과하면 순환하여 처리됨.
    // (k-1) * 2 = 총 순환 요소 갯수
    // 총순환요소 갯수 % 배열길이 = 나머지
    // 나머지만큼 해당 배열의 요소 인덱스로 이동하면됨

    return numbers[((k-1)*2)%numbers.length];
    
}