function solution(my_string, is_suffix) {
    return Array.from(my_string)
        .map((v, i)=> my_string.substring(i))
        .filter((v)=> v === is_suffix).length
}