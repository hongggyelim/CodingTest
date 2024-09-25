function solution(num_list) {
    var answer = [];
    const even = num_list.filter((i)=> i % 2 === 0 );
    const odd = num_list.filter((i)=> i % 2 !== 0 );
    
    answer.push(even.length, odd.length);
    return answer;
}