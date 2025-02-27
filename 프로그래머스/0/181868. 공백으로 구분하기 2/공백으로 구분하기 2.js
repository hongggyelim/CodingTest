function solution(my_string) {
    // 둘 이상의 공백도 하나로 취급
    // 앞뒤 공백 => trim()
    return [...my_string.trim().split(" ")].filter(v => v.length !== 0)
}