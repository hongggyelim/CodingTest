function solution(my_string, m, c) {
    var answer = '';
    // 등차수열
    for (let i = 0; i < my_string.length; i++){
        const value = c + m* i - 1 
        if(value < my_string.length) answer+= my_string[value]
    }
    return answer;
}