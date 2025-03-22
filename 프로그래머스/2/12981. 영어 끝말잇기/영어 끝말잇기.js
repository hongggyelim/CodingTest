function solution(n, words) {
    var answer = [];
    
        // 중복 단어의 위치 찾기
        let dict = {};
        for (let i = 0; i < words.length; i++){
            if (dict[words[i]]){ // 중복 발생
                let index = i + 1;
                let a = index % n === 0 ? n : index % n
                return [a, Math.ceil(index/n)]
            }
            dict[words[i]] =true
        } 

    // 끝말잇기 규칙 위배 확인
    let filterRule = words.find((word, i) => i >= 1 && !word.startsWith(words[i - 1].slice(-1)));

    if (filterRule) {
        var index = words.indexOf(filterRule) + 1;
        let a = index % n === 0 ? n : index % n;
        return [a, Math.ceil(index / n)];
    }

    return [0, 0];
}
