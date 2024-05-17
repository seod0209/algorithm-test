function solution(nums) {
    var answer = 0;
    const max = nums.length/2
    const kinds = [...new Set([...nums])].length
    answer = max < kinds ? max: kinds
    return answer;
}