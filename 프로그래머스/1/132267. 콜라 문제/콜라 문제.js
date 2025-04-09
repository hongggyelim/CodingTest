function solution(a, b, n) {
    var answer = 0;
    // a 개를 주면 -> b를 받는다 
    while(n >= a ){
        let change = Math.floor(n / a)
        answer += change * b; 
        n = n + change * b - change * a; 
    }
    return answer;
}