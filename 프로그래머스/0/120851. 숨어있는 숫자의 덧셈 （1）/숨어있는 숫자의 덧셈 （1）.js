function solution(my_string) {
    return a = [...my_string].filter((c)=> !isNaN(c)).reduce((a, b)=> a*1 + b*1, 0)
}