function solution(strArr) {
    let dict= {}
    strArr.forEach(v => dict[v.length] ? dict[v.length] += 1 : dict[v.length] = 1);
    return Math.max(...Object.values(dict))
}