function solution(n) {
    const arr = Array(300) // 길이가 100인 배열 생성
    .fill().map((v, i)=> i + 1) // fill, map을 같이 쓰면 map에서 리턴된 값으로 배열을 채워줌
    .filter((v)=> v % 3 !== 0 && !v.toString().includes('3')); // 조건을 만족하는 수만 남기기
    
    return arr[n-1] 
}