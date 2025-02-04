function solution(l, r) {
    var answer = [];
    for (let i = l; i <= r; i++ ){
        let arr = [...String(i)]
        // 5와 0만 가질때 .Number(arr.join("")) 변환 해서 answer배열에 push
        const filtered = arr.filter((i)=> i == 5 || i == 0)
        if (filtered.length === arr.length) answer.push(Number(arr.join("")))
    }
        
    return answer.length === 0 ? [-1] : answer;
}