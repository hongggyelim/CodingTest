function solution(a, b, c) {
    let answer = a + b + c;
    if (a === b || a === c || b === c){
        answer *= a**2 + b**2+ c**2;
    }
    if (a === b && a === c){
        answer *= a**3 + b**3 + c**3;
    }
    return answer;
}