function solution(babbling) {
    var answer = 0;
    const speak = [ "aya", "ye", "woo", "ma"]; 
    // babbling 을 순회하면서 speak을 순회 -> speak과 같은 단어가 있으면 pop 
    // 글자 길이가 0보다 크다면 반복 
    for (let babb of babbling){
        let word = '';
        for (let pro of speak){
            if (babb.includes(pro)){
                word += pro;                 
                console.log("babb / pro ▶", babb, pro)
                console.log("word ▶", word)
                
            }
        }
        //speak for문이 끝났을때 sort 
        if (word.split('').sort().join() === babb.split('').sort().join()) answer += 1;
                console.log("answer ▶", answer)

    }
    return answer;
}