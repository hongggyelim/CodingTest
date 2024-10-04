function solution(my_string) {
    const num = '1234567890';
    return a = [...my_string].filter((c)=> num.includes(c)).reduce((a, b)=> a*1 + b*1, 0)
}