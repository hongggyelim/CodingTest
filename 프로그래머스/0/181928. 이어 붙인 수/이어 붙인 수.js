function solution(num_list) {
    let even='';
    let odd='';
    num_list.map((num, index)=>{
        num % 2 ===0? even += num : odd += num;
    })
    return Number(even)+Number(odd);
}