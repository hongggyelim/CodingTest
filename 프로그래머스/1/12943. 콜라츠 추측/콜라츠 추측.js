function solution(num) {
    
    var answer = 0;
    while(num !== 1 && answer < 500){
        num % 2 ? num = num * 3 + 1 : num /= 2
        answer ++;
    }
    
    return num === 1 ? answer : -1 ;
}