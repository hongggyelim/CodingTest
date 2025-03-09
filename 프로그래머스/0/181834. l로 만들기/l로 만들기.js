function solution(myString) {
    let codeOfL = "l".charCodeAt();
    return [...myString].map(v => v.charCodeAt() < codeOfL ? "l" : v).join("")
}