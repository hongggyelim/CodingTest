function solution(my_string, overwrite_string, s) {
    var answer = '';
    const first = my_string.slice(0, s)
    const rest = my_string.slice(s + overwrite_string.length)
    answer = first +overwrite_string + rest
    
    return answer;
}