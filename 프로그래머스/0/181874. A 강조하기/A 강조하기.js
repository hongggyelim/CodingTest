function solution(myString) {
    return [...myString].map(v => v === "a"? "A" : v ==="A" ? "A" : v.toLowerCase()).join('')
}
// a -> A 로 
// A 외의 모든 대문자는 소문자로 