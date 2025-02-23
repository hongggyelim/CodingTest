function solution(numbers, n) {
    var answer = 0;
    // while문을 써야하나 reduce를 써야하나? 
    // 
    return numbers.reduce((acc, cur)=> acc > n ? acc : acc + cur)
    return answer;
}