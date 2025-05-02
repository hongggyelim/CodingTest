function solution(s) {
    let x = s[0]
    let sameCount = 0;
    let diffCount = 0;
    let index= 0;
    let word = [...s].join("")
    let answer = 0;
    
    for(let i = 0; i < s.length; i++){
        s[i] === x ? sameCount ++ : diffCount ++
        // console.log(s[i], sameCount, diffCount)
        if(sameCount === diffCount){
            index = i
            word = s.slice(index + 1)
            
            x = word[0]
            // console.log("분해!","word", word, x)
            answer ++
            sameCount = 0;
            diffCount = 0;
        }
        if(i === s.length -1 && sameCount){
            // console.log("마지막 인덱스")
            answer ++
        }
        
    }
    return answer;
}