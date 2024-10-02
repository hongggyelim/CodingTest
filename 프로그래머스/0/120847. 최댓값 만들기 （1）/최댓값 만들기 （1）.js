function solution(numbers) {
    let answer = 1;
    
    const max = Math.max(...numbers)
    answer *= max;
    const maxIndex = numbers.indexOf(max);
    numbers.splice(maxIndex, 1);
    const maxNext = Math.max(...numbers)
    answer *= maxNext;
    
    return answer;
}