function solution(s) {
    
    if(s.length !== 4 && s.length !== 6){return false}
    if(!/^\d+$/.test(s)) return false
    return true;
}