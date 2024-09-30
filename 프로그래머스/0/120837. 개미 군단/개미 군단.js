function solution(hp) {
    // 장군 : 5, 병정: 3, 일 : 1
    /* hp 나누기 5 -> 나머지를 나누기 3 -> 나머지 */
    const dict = {
        a : 5, b: 3, c : 1
    }
    let answer = 0;
    
    answer += Math.floor(hp / dict.a); // 4
    let rest_hp = hp % dict.a; // 3 
    if (rest_hp === 0) return answer;
    
    answer += Math.floor(rest_hp / dict.b) //  4 +1
    rest_hp = rest_hp % dict.b 
    if (rest_hp === 0) return answer;
    
    
    answer += rest_hp / dict.c
    return answer;
}