function solution(myString, pat) {
    var answer = 0;
    for (let i = 0; i < myString.length; i++){
        let splited = myString.slice(i, i+pat.length);
        if (splited === pat) answer ++;
    }
    return answer;
}