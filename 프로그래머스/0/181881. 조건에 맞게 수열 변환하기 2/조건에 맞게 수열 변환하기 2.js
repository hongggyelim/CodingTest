function solution(arr) {
    var answer = 0;
    // 50 이상의 짝수 -> 2로 나눔
    // 50 보다 작은 홀수  -> 2를 곱하고 1 더함
    // 둘다 해당하지 않는 경우 : 50 이상의 홀수, 50보다 작은 짝수 
    // 모든 원소가 이 경우라면 더이상 변하지 않음
    // every 메서드 사용 
    let check = arr.every((v)=> (v >= 50 && v % 2) || (v < 50 && !(v % 2)));
    if (check) return answer;

    for (let i = 1; i <= 100; i ++){
        answer = i;
        arr = arr.map((v)=> {
            if(v >= 50 && !(v % 2)) return v / 2;
            else if (v < 50 && v % 2) return v * 2 + 1;
            else return v
        })

        let check = arr.every((v)=> (v >= 50 && v % 2) || (v < 50 && !(v % 2)));
        console.log(check)
        if (check) break;
    }
    return answer;
}