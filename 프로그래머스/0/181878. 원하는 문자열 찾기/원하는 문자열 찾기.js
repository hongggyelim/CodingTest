function solution(myString, pat) {
    let lowerString = myString.toLowerCase();
    let lowerPat = pat.toLowerCase();
    return lowerString.indexOf(lowerPat) === -1 ? 0 : 1
}