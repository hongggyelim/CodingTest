function solution(before, after) {
    var answer = 0;
    // 같은 문자, 문자 개수 동일하면 가능 
    // before 를 반복
    for (let c of before){
        const num_After = [...after].filter((v)=> v == c).length
        const num_Before = [...before].filter((v)=>v == c).length
        if (num_After === num_Before){ answer ++;}
    }
    return answer === before.length ? 1 : 0;
}