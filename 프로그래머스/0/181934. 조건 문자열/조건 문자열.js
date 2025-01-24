function solution(ineq, eq, n, m) {
    var answer = 0;
    let operator = ineq + eq;
    console.log(operator)
    switch(operator){
        case "<!" : answer = n < m ? 1 : 0;  break;
        case "<=" : answer = n <= m ? 1 : 0; break;
        case ">!" : answer = n > m ? 1 : 0; break;
        case ">=" : answer = n >= m ? 1 : 0; break;
    }
    return answer;
}