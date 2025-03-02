function solution(binomial) {
    var answer = 0;
    let [a, op, b] = binomial.split(" ");
    switch(op){
        case "+": answer = +a + +b; break;
        case "-": answer = a - b; break;
        case "*": answer = a * b; break;
    }    
    return answer;
}