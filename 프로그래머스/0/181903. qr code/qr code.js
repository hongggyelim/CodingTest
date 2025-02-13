function solution(q, r, code) {
//     인덱스를 q로 나눠서 나머지가 r인 문자
    return [...code].filter((v, i)=> i % q === r).join("")
}