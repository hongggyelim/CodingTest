function solution(my_string, is_prefix) {
    let arr = []
    for (let i =0; i < my_string.length; i++){
        arr.push(my_string.slice(0, i))
    }
    return +arr.includes(is_prefix)
}