function solution(num_list, n) {
    return num_list.filter(v =>  v === n).length > 0 ? 1 : 0;
}