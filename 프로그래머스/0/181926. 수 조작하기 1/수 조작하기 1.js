function solution(n, control) {
    // d - a * 10
    // w - s * 10
    // 객체로 개수 세야하나
    const dic = { d : 0, s : 0, a : 0, w:0}
    for (let char of control){
        dic[char] += 1
    }
    return n+ (dic.w - dic.s) + (dic.d - dic.a)* 10
}