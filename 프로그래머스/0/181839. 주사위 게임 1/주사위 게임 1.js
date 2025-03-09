function solution(a, b) {
    let answer = 0;
    switch ((a * b) % 2){
        case 1: answer = a ** 2 + b ** 2; break; // 둘다 홀수
        case 0: // 둘중 하나라도 홀수 
            if(a % 2 === 0 && b % 2 === 0){
                answer = Math.abs(a-b);
                return answer;
            }else {
                answer = 2 * (a + b);
            }
            break;
    }
    return answer;
}