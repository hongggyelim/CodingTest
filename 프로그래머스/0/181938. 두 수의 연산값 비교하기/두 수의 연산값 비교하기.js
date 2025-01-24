const plus = (a, b)=>{
    return ''+a+b;
}
function solution(a, b) {
    return Math.max(plus(a,b), 2*a*b)
}