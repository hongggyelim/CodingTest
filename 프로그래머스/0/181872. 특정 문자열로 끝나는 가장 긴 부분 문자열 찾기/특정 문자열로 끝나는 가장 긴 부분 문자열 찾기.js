function solution(myString, pat) {
    let answer = '';
    let index = myString.lastIndexOf(pat)
    return myString.slice(0, index + pat.length)
}