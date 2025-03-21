function solution(s){
    if(s.slice(0, 1) === `)`){ return false}
    let count = 0
    for(let char of s){
        char === "("? count += 1 : count -= 1
        if (count < 0) return false
    }
    return !count
    
}