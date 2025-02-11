function solution(intStrs, k, s, l) {
    var answer = [];
    const newArr = intStrs.map((v, i)=> v.slice(s, s+l))
    return newArr.filter((v)=> v > k).map((v)=>Number(v))
}