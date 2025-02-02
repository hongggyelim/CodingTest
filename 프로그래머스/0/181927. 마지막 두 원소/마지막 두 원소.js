function solution(num_list) {
    var answer = [];
    const last = num_list.at(-1)
    const second = num_list.at(-2)
    if (last > second){
        num_list.push(last - second)
    }else{
        num_list.push(2*last)
    }
    return num_list;
}