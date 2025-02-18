function solution(num_list) {
    const newArr = num_list.map((v)=>v < 0 ? v="X" : v)
    return newArr.indexOf("X")
}