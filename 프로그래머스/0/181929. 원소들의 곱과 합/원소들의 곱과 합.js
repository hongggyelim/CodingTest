function solution(num_list) {
    const sum = num_list.reduce((acc, cur)=> acc+cur, 0)
    const multiple = num_list.reduce((acc, cur)=> acc*cur, 1)
    return sum**2 > multiple ? 1 : 0
    }