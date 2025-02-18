function solution(my_string) {
    const A = "A".charCodeAt()
    const a = "a".charCodeAt()
    const dict = {}
    for (let i = A; i <= A+25; i++){
        dict[i] = 0;
    }
    for (let i = a; i <= a+25; i++){
        dict[i] = 0;
    }
    
    [...my_string].forEach((v)=>dict[v.charCodeAt()] += 1)
    return Object.values(dict)
}
