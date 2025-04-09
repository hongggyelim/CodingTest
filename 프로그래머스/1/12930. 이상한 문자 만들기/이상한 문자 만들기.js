function solution(s) {
    var answer = '';
    let index = 0;

    for (let i = 0; i < s.length; i++){
        if (s[i] === " ") {
            answer += s[i]
            index = -1;
        };
        if(index === 0 || index % 2 === 0){
            answer += s[i].toUpperCase();
            index ++;
        }else{
            if(s[i] !== " ")answer += s[i].toLowerCase()
            index ++;
        }
    }
    
    return answer;
}