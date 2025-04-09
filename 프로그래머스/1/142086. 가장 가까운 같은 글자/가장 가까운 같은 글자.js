function solution(s) {
    var answer = [];
    let map = {}
    // 해시에 제일 나중에 나온 index 최신화하기
    let arr = [...s]
    arr.forEach((v,i)=> {
        if(map[v]>= 0){
            // 이전 값을 answer에 푸시
            answer.push(Math.abs(map[v] - i));
            map[v] = i; //최신화
        }else{
            answer.push(-1);
            map[v] = i
        }
    })
    return answer;
}