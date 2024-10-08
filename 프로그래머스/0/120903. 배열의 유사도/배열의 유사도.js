function solution(s1, s2) {
    var answer = 0;
    s1 = s1.sort();
    s2 = s2.sort();
    const max = Math.max(s1.length, s2.length);
    console.log(s1, s2)
    for (let i = 0; i < max; i++){
        for (let j = 0; j < max ; j++ ){
            if (s1[i] === s2[j]){
                answer += 1;
            }
        }
    }
    return answer;
}