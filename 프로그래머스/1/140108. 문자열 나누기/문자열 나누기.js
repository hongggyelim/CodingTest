function solution(s) {
    let x = s[0]
    let sameCount = 0;
    let diffCount = 0;
    let answer = 0;
    
    for(let i = 0; i < s.length; i++){
        s[i] === x ? sameCount ++ : diffCount ++
        
        if(sameCount === diffCount){
            x = s[i + 1]
            answer ++
            sameCount = 0;
            diffCount = 0;
        }
    }
     if(diffCount || sameCount){
            answer ++
        }
    return answer;
}