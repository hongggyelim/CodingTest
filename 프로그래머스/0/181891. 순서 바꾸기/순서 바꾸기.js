function solution(num_list, n) {
    const slice1 = num_list.slice(0, n);
    const slice2 = num_list.slice(n)
    return slice2.concat(slice1)
}