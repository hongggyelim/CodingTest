function solution(age) { // 숫자 
    const answer = []
    const stringArr = ['a','b','c','d','e','f','g','h','i','j'];
    
    const ageArr = String(age).split(''); //["2", "3"]
    // stringArr 의 문자열의 index와 ageArr의 원소 num이 일치하면 stringArr[i] 를 반환 
    
    /* 1. ageArr의 값을 숫자로 받아오기
        2. 그 값을 인덱스로 stringArr에 접근하기 
    */
    for (let i = 0; i < 4; i++){ // 4자리 수
        let index = Number(ageArr[i]);
        answer.push(stringArr[index]);
    }return answer.join("");
}