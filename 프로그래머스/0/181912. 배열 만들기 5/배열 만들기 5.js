function solution(intStrs, k, s, l) {
    return  intStrs.map((v, i)=> +v.slice(s, s+l)).filter((v)=> v > k)
}